(ns lt.plugins.gibo
  (:require [lt.object               :as object]
            [lt.objs.command         :as cmd]
            [lt.objs.sidebar.command :as scmd]
            [lt.objs.files           :as fs]
            [lt.objs.workspace       :as ws]
            [lt.objs.sidebar         :as sb]
            [lt.objs.editor.pool     :as pool]
            [lt.objs.tabs            :as tabs]
            [lt.objs.proc            :as proc]
            [lt.objs.notifos         :as notifos]
            [clojure.string          :as string])
  (:require-macros [lt.macros :refer [behavior]]))

(def path (js/require "path"))
(def nfs  (js/require "fs"))

(def gh-default (fs/join (fs/home) ".gitignore-boilerplates"))
(def gh-remote "https://github.com/github/gitignore.git")


;;;; file and path helpers ;;;;

(defn pwd []
  "Returns the Presumably Working Directory."
  (first (:folders @ws/current-ws)))

(defn bo-name [f]
  ;; This will be update to files/basename when commit be4ba8e is included in
  ;; release version of Light Table.
  (.basename path f ".gitignore"))

(defn gitignore? [f]
  (= (.extname path f) ".gitignore"))

(defn git? [p]
  (fs/exists? (fs/join p ".git")))

(defn gitignore-at [p]
  (fs/join p ".gitignore"))

(defn gh-local [r]
  (peek (:gh-local @r)))

(defn append [path content & [cb]]
  (try
    (.appendFileSync nfs path content)
    (object/raise fs/files-obj :files.save path)
    (when cb (cb))
    (catch js/global.Error e
      (object/raise fs/files-obj :files.save.error path e)
      (when cb (cb e)))
    (catch js/Error e
      (object/raise fs/files-obj :files.save.error path e)
      (when cb (cb e)))))


;;;; gibos reading and processing ;;;;

(defn local-bos [r]
  (sort-by bo-name (filter gitignore?
                           (concat (fs/full-path-ls r)
                                   (fs/full-path-ls (fs/join r "Global"))))))

(defn ->bo [coll]
  (map #(hash-map :name (bo-name %)
                  :file %)
       coll))

(defn ->content [coll]
  (str "## " (:name coll)
       " ##\n\n"
       (fs/bomless-read (:file coll))))

(defn gitignore<- [coll]
  (string/join (interpose "\n\n" (map #(->content %) coll))))


;;;; git processes and notifications ;;;;

(behavior ::clone-gh!
          :triggers #{:create!}
          :reaction (fn [this local]
                      (do
                        (notifos/working (str "Gitignore boilerplates not found; cloning into " local))
                        (proc/exec {:command "git"
                                    :args ["clone" gh-remote local]
                                    :cwd (pwd)
                                    :env nil
                                    :obj this}))))
(behavior ::pull-gh!
          :triggers #{:update!}
          :reaction (fn [this]
                      (if (git? (gh-local this))
                        (do
                          (notifos/working (str "Updating " (gh-local this) " to latest github/gitignore"))
                          (proc/exec {:command "git"
                                      :args ["pull" "origin" "master"]
                                      :cwd (gh-local this)
                                      :env nil
                                      :obj this}))
                        (object/raise this :create! (gh-local this)))))

(behavior ::on-out
          :triggers #{:proc.out}
          :reaction (fn[this data]
                      (let [out (str data)]
                          (js/console.log out))))

(behavior ::on-exit
          :triggers #{:proc.exit}
          :reaction (fn [this data]
                      (let [out (str data)]
                        (case out
                          "0" (do (notifos/done-working "Git operation successful.")
                                  (object/raise gibo-list :force-refresh!))
                          "1" (do (notifos/done-working)
                                  (notifos/set-msg! "Git operation failed with exit code 1." {:class "error"}))
                          (do (notifos/done-working)
                              (notifos/set-msg! "Git operation failed; see console for details." {:class "error"})
                              (.error js/console (str "Git exit code: " out)))))))

(behavior ::on-error
          :triggers #{:proc.error}
          :reaction (fn [this data]
                      (let [out (str data)]
                        (do
                          (notifos/done-working)
                          (notifos/set-msg! "Git encountered an error; see console for details.")
                          (js/console.log out)))))


;;;; repository manager ;;;;

(object/object* ::repo
                :tags #{:gibo.repo}
                :gh-local [gh-default]
                :custom #{}             ; TODO: user-defined boilerplates
                :init (fn[]))

(def repo (object/create ::repo))

(behavior ::set-gh-local
          :triggers #{:object.instant}
          :for #{:gibo.repo}
          :desc "Gibo: set local github/gitignore repository"
          :params [{:label "Absolute path"}]
          :type :user
          :reaction (fn [this custom]
                      (if custom
                        (object/update! this [:gh-local] assoc 0 custom)
                        (object/update! this [:gh-local] assoc 0 gh-default))))


;;;; let there be gibos ;;;;

(defn note-write [p]
  (notifos/done-working (str ".gitignore saved at " p))
  nil)

(object/object* ::gibo
                :tags #{:gibo}
                :bos #{}
                :init (fn[]))

(behavior ::review!
          :triggers #{:to-the-tabs!}
          :reaction (fn [this content]
                      (let [last (pool/last-active)
                            info {:mime "plaintext"
                                  :tags [:editor.plaintext]
                                  :name ".gitignore"
                                  :content content}
                            ed (pool/create info)
                            dirty? (seq content)]
                        (object/add-tags ed [:editor.transient])
                        (object/merge! ed {:dirty dirty?})
                        (object/raise this :open ed)
                        (tabs/add! ed)
                        (tabs/active! ed)
                        (object/update! this [:bos] empty)
                        (scmd/exec! :close-sidebar)
                        (object/raise gibo-list :escape! false))))

(behavior ::write!
          :triggers #{:to-the-disks!}
          :reaction (fn [this content]
                      (if-let [p (pwd)]
                        (do
                          (notifos/working "Saving gibos…")
                          (append (gitignore-at p)
                                  (if (fs/exists? (gitignore-at p))
                                    (str "\n\n" content)
                                    content)
                                  (note-write p))
                          (object/update! this [:bos] empty)
                          (scmd/exec! :close-sidebar)
                          (object/raise gibo-list :escape! false))
                        (object/raise gibo :to-the-tabs! content))))

(def gibo (object/create ::gibo))


;;;; list of boilerplates and associated behaviors ;;;;

(def reviewer {:name "Gibo: Review"
               :file nil
               :action (fn []
                         (object/raise gibo :to-the-tabs! (gitignore<- (:bos @gibo))))})

(def writer {:name "Gibo: Write"
             :file nil
             :action (fn []
                       (object/raise gibo :to-the-disks! (gitignore<- (:bos @gibo))))})

(def undoer {:name "-"
             :file nil
             :action (fn []
                       (do
                         (object/update! gibo [:bos] disj (last (:bos @gibo)))
                         (notifos/set-msg! (apply str "Gibo: "
                                                       (interpose ", " (map :name (:bos @gibo)))))))})

(defn make-gibolite [opts]      ;; gibolite: granular sedimentary rock of a giboic nature. Also a bad *light* table pun.
  (let [lst (object/create ::gibo-list opts)]
    (object/raise lst :refresh!)
    lst))

(object/object* ::gibo-list
                :tags #{:filter-list :gibo.list}
                :selected 0
                :placeholder "search"
                :items []
                :search ""
                :init (fn [this opts]
                        (let [opts (merge {:size 100} opts)
                              lis (for [x (range (:size opts))]
                                    (scmd/item this x))]
                          (object/merge! this (merge {:lis (vec lis)} opts))
                          [:div.filter-list.empty
                           (scmd/input this)
                           [:ul
                            lis]])))

(def gibo-list (make-gibolite {:items (when (git? (gh-local repo))
                                              (conj (->bo (local-bos (gh-local repo))) undoer reviewer writer))
                               :key :name
                               :placeholder "Boilerplates"}))

(behavior ::bo->buffer
          :triggers #{:select}
          :reaction (fn [this coll]
                      (if-let [f (:action coll)]
                        (f)
                        (do
                          (object/raise this :clear!)
                          (object/update! gibo [:bos] conj coll)
                          (notifos/set-msg! (apply str "Gibo: "
                                                       (interpose ", " (map :name (:bos @gibo)))))))))

(behavior ::repo-check
          :triggers #{:active}
          :reaction (fn [this]
                      (when-not (git? (gh-local repo))
                        (object/raise repo :create! (gh-local repo)))))

(behavior ::refresh
          :triggers #{:force-refresh!}
          :reaction (fn [this]
                      (do
                        (object/update! this [:items] #(conj (->bo (local-bos (gh-local repo))) undoer reviewer writer))
                        (object/raise this :refresh!))))


;;;; user-reachable commands ;;;;

(cmd/command {:command :gibo.new
              :desc "Gibo: new gitignore"
              :options gibo-list})

(cmd/command {:command :gibo.update
              :desc "Gibo: update boilerplates"
              :exec (fn[]
                      (object/raise repo :update!))})
