if(!lt.util.load.provided_QMARK_('lt.plugins.gibo')) {
goog.provide('lt.plugins.gibo');
goog.require('cljs.core');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.objs.tabs');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.workspace');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.workspace');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.objs.sidebar.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.gibo.gh_default = lt.objs.files.join.call(null,lt.objs.files.home.call(null),".gitignore-boilerplates");
lt.plugins.gibo.gh_remote = "https://github.com/github/gitignore.git";
lt.plugins.gibo.pwd = (function pwd(){return cljs.core.first.call(null,new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)));
});
lt.plugins.gibo.bo_name = (function bo_name(f){return lt.objs.files.basename.call(null,f,".gitignore");
});
lt.plugins.gibo.gitignore_QMARK_ = (function gitignore_QMARK_(f){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,f),"gitignore");
});
lt.plugins.gibo.git_QMARK_ = (function git_QMARK_(p){return lt.objs.files.exists_QMARK_.call(null,lt.objs.files.join.call(null,p,".git"));
});
lt.plugins.gibo.gitignore_in = (function gitignore_in(p){return lt.objs.files.join.call(null,p,".gitignore");
});
lt.plugins.gibo.local_bos = (function local_bos(r){return cljs.core.sort_by.call(null,(function (p1__8227_SHARP_){return clojure.string.lower_case.call(null,lt.plugins.gibo.bo_name.call(null,p1__8227_SHARP_));
}),cljs.core.filter.call(null,lt.plugins.gibo.gitignore_QMARK_,lt.plugins.gibo.repo_path_ls.call(null,r)));
});
lt.plugins.gibo.repo_path_ls = (function repo_path_ls(p){var global = (function (_){return lt.objs.files.join.call(null,_,"Global");
});return cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,lt.objs.files.full_path_ls,p)),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,lt.objs.files.full_path_ls,cljs.core.map.call(null,(function (p1__8229_SHARP_){return global.call(null,p1__8229_SHARP_);
}),cljs.core.filter.call(null,(function (p1__8228_SHARP_){return lt.objs.files.dir_QMARK_.call(null,global.call(null,p1__8228_SHARP_));
}),p)))));
});
lt.plugins.gibo.repo__GT_items = (function repo__GT_items(repo){var custom = new cljs.core.Keyword(null,"custom","custom",3959783139).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,repo));var gh = new cljs.core.Keyword(null,"gh-local","gh-local",3632269041).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,repo));var all = cljs.core.conj.call(null,custom,gh);return cljs.core.conj.call(null,lt.plugins.gibo.__GT_bo.call(null,lt.plugins.gibo.local_bos.call(null,all)),lt.plugins.gibo.undoer,lt.plugins.gibo.reviewer,lt.plugins.gibo.writer);
});
lt.plugins.gibo.__GT_bo = (function __GT_bo(coll){return cljs.core.map.call(null,(function (p1__8230_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"file","file",1017047278)],[lt.plugins.gibo.bo_name.call(null,p1__8230_SHARP_),p1__8230_SHARP_]);
}),coll);
});
lt.plugins.gibo.__GT_content = (function __GT_content(coll){return [cljs.core.str("## "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(coll)),cljs.core.str(" ##\n\n"),cljs.core.str(lt.objs.files.bomless_read.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(coll)))].join('');
});
lt.plugins.gibo.gitignore_LT__ = (function gitignore_LT__(coll){return clojure.string.join.call(null,cljs.core.interpose.call(null,"\n\n",cljs.core.map.call(null,(function (p1__8231_SHARP_){return lt.plugins.gibo.__GT_content.call(null,p1__8231_SHARP_);
}),coll)));
});
lt.plugins.gibo.prompt__GT_clone_QMARK_ = (function prompt__GT_clone_QMARK_(this$){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Gitignore boilerplates not found.",new cljs.core.Keyword(null,"body","body",1016933652),"To use gibo, you need a local copy of github/gitignore. Clone it now?",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Clone github/gitignore",new cljs.core.Keyword(null,"action","action",3885920680),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"create!","create!",2042458647),new cljs.core.Keyword(null,"gh-local","gh-local",3632269041).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})], null),lt.objs.popup.cancel_button], null)], null));
});
lt.plugins.gibo.__BEH__clone_gh_BANG_ = (function __BEH__clone_gh_BANG_(this$,local){lt.objs.notifos.working.call(null,[cljs.core.str("Cloning into "),cljs.core.str(local)].join(''));
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),"git",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clone",lt.plugins.gibo.gh_remote,local], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.gibo.pwd.call(null),new cljs.core.Keyword(null,"env","env",1014004831),null,new cljs.core.Keyword(null,"obj","obj",1014014057),this$], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","clone-gh!","lt.plugins.gibo/clone-gh!",3104284923),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__clone_gh_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"create!","create!",2042458647),null], null), null));
lt.plugins.gibo.__BEH__pull_gh_BANG_ = (function __BEH__pull_gh_BANG_(this$){if(cljs.core.truth_(lt.plugins.gibo.git_QMARK_.call(null,new cljs.core.Keyword(null,"gh-local","gh-local",3632269041).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))
{lt.objs.notifos.working.call(null,[cljs.core.str("Updating "),cljs.core.str(new cljs.core.Keyword(null,"gh-local","gh-local",3632269041).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),cljs.core.str(" to latest github/gitignore")].join(''));
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),"git",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull","origin","master"], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),new cljs.core.Keyword(null,"gh-local","gh-local",3632269041).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"env","env",1014004831),null,new cljs.core.Keyword(null,"obj","obj",1014014057),this$], null));
} else
{return lt.plugins.gibo.prompt__GT_clone_QMARK_.call(null,this$);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","pull-gh!","lt.plugins.gibo/pull-gh!",612122147),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__pull_gh_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update!","update!",779473898),null], null), null));
lt.plugins.gibo.__BEH__on_out = (function __BEH__on_out(this$,data){var out = [cljs.core.str(data)].join('');return console.log(out);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","on-out","lt.plugins.gibo/on-out",3422445995),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.gibo.__BEH__on_exit = (function __BEH__on_exit(this$,data){var out = [cljs.core.str(data)].join('');var G__8233 = out;if(cljs.core._EQ_.call(null,"1",G__8233))
{lt.objs.notifos.done_working.call(null);
return lt.objs.notifos.set_msg_BANG_.call(null,"Git operation failed with exit code 1.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{if(cljs.core._EQ_.call(null,"0",G__8233))
{lt.objs.notifos.done_working.call(null,"Git operation successful.");
return lt.object.raise.call(null,lt.plugins.gibo.gibo_list,new cljs.core.Keyword(null,"force-refresh!","force-refresh!",3989490874));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{lt.objs.notifos.done_working.call(null);
lt.objs.notifos.set_msg_BANG_.call(null,"Git operation failed; see console for details.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
return console.error([cljs.core.str("Git exit code: "),cljs.core.str(out)].join(''));
} else
{return null;
}
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","on-exit","lt.plugins.gibo/on-exit",3570984407),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__on_exit,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));
lt.plugins.gibo.__BEH__on_error = (function __BEH__on_error(this$,data){var out = [cljs.core.str(data)].join('');lt.objs.notifos.done_working.call(null);
lt.objs.notifos.set_msg_BANG_.call(null,"Git encountered an error; see console for details.");
return console.log(out);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","on-error","lt.plugins.gibo/on-error",4136408929),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__on_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","repo","lt.plugins.gibo/repo",4276560505),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gibo.repo","gibo.repo",2141009091),null], null), null),new cljs.core.Keyword(null,"gh-local","gh-local",3632269041),lt.plugins.gibo.gh_default,new cljs.core.Keyword(null,"custom","custom",3959783139),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return null;
}));
lt.plugins.gibo.__BEH__set_gh_local = (function __BEH__set_gh_local(this$,custom){if(cljs.core.truth_(custom))
{return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gh-local","gh-local",3632269041),custom], null));
} else
{return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gh-local","gh-local",3632269041),lt.plugins.gibo.gh_default], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","set-gh-local","lt.plugins.gibo/set-gh-local",1859379089),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__set_gh_local,new cljs.core.Keyword(null,"desc","desc",1016984067),"gibo: set local github/gitignore repository",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Absolute path",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"string","string",4416885635)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
/**
* @param {...*} var_args
*/
lt.plugins.gibo.__BEH__custom = (function() { 
var __BEH__custom__delegate = function (this$,paths){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"custom","custom",3959783139),cljs.core.set.call(null,paths)], null));
if(cljs.core.truth_(lt.plugins.gibo.gibo_list))
{return lt.object.raise.call(null,lt.plugins.gibo.gibo_list,new cljs.core.Keyword(null,"force-refresh!","force-refresh!",3989490874));
} else
{return null;
}
};
var __BEH__custom = function (this$,var_args){
var paths = null;if (arguments.length > 1) {
  paths = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BEH__custom__delegate.call(this,this$,paths);};
__BEH__custom.cljs$lang$maxFixedArity = 1;
__BEH__custom.cljs$lang$applyTo = (function (arglist__8238){
var this$ = cljs.core.first(arglist__8238);
var paths = cljs.core.rest(arglist__8238);
return __BEH__custom__delegate(this$,paths);
});
__BEH__custom.cljs$core$IFn$_invoke$arity$variadic = __BEH__custom__delegate;
return __BEH__custom;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","custom","lt.plugins.gibo/custom",3489976954),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__custom,new cljs.core.Keyword(null,"desc","desc",1016984067),"gibo: add custom local repositories",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Absolute path",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"string","string",4416885635)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"& more",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"string","string",4416885635)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.gibo.repo = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gibo","repo","lt.plugins.gibo/repo",4276560505));
lt.plugins.gibo.note_write = (function note_write(p){lt.objs.notifos.done_working.call(null,[cljs.core.str(".gitignore saved at "),cljs.core.str(p)].join(''));
return null;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","gibo","lt.plugins.gibo/gibo",4275838780),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gibo","gibo",1017076769),null], null), null),new cljs.core.Keyword(null,"bos","bos",1014001976),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"init","init",1017141378),(function (){return null;
}));
lt.plugins.gibo.__BEH__review_BANG_ = (function __BEH__review_BANG_(this$,content){var info = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mime","mime",1017255846),"plaintext",new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.plaintext","editor.plaintext",4474629672)], null),new cljs.core.Keyword(null,"name","name",1017277949),".gitignore",new cljs.core.Keyword(null,"content","content",1965434859),content], null);var ed = lt.objs.editor.pool.create.call(null,info);var dirty_QMARK_ = cljs.core.seq.call(null,content);lt.object.add_tags.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.transient","editor.transient",3554141883)], null));
lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dirty","dirty",1109497668),dirty_QMARK_], null));
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"open","open",1017321916),ed);
lt.objs.tabs.add_BANG_.call(null,ed);
lt.objs.tabs.active_BANG_.call(null,ed);
lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bos","bos",1014001976)], null),cljs.core.empty);
lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"close-sidebar","close-sidebar",1108494329));
return lt.object.raise.call(null,lt.plugins.gibo.gibo_list,new cljs.core.Keyword(null,"escape!","escape!",3844244274),false);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","review!","lt.plugins.gibo/review!",1107012178),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__review_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to-the-tabs!","to-the-tabs!",3450633895),null], null), null));
lt.plugins.gibo.__BEH__write_BANG_ = (function __BEH__write_BANG_(this$,content){var temp__4090__auto__ = lt.plugins.gibo.pwd.call(null);if(cljs.core.truth_(temp__4090__auto__))
{var p = temp__4090__auto__;lt.objs.notifos.working.call(null,"Saving gibos\u2026");
lt.objs.files.append.call(null,lt.plugins.gibo.gitignore_in.call(null,p),(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,lt.plugins.gibo.gitignore_in.call(null,p)))?[cljs.core.str("\n\n"),cljs.core.str(content)].join(''):content),lt.plugins.gibo.note_write.call(null,p));
lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bos","bos",1014001976)], null),cljs.core.empty);
lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"close-sidebar","close-sidebar",1108494329));
return lt.object.raise.call(null,lt.plugins.gibo.gibo_list,new cljs.core.Keyword(null,"escape!","escape!",3844244274),false);
} else
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"to-the-tabs!","to-the-tabs!",3450633895),content);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","write!","lt.plugins.gibo/write!",2989677033),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__write_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to-the-disks!","to-the-disks!",3087902539),null], null), null));
lt.plugins.gibo.gibo = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gibo","gibo","lt.plugins.gibo/gibo",4275838780));
lt.plugins.gibo.reviewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"gibo: Review",new cljs.core.Keyword(null,"file","file",1017047278),null,new cljs.core.Keyword(null,"action","action",3885920680),(function (){return lt.object.raise.call(null,lt.plugins.gibo.gibo,new cljs.core.Keyword(null,"to-the-tabs!","to-the-tabs!",3450633895),lt.plugins.gibo.gitignore_LT__.call(null,new cljs.core.Keyword(null,"bos","bos",1014001976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gibo.gibo))));
})], null);
lt.plugins.gibo.writer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"gibo: Write",new cljs.core.Keyword(null,"file","file",1017047278),null,new cljs.core.Keyword(null,"action","action",3885920680),(function (){return lt.object.raise.call(null,lt.plugins.gibo.gibo,new cljs.core.Keyword(null,"to-the-disks!","to-the-disks!",3087902539),lt.plugins.gibo.gitignore_LT__.call(null,new cljs.core.Keyword(null,"bos","bos",1014001976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gibo.gibo))));
})], null);
lt.plugins.gibo.undoer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"-",new cljs.core.Keyword(null,"file","file",1017047278),null,new cljs.core.Keyword(null,"action","action",3885920680),(function (){lt.object.update_BANG_.call(null,lt.plugins.gibo.gibo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bos","bos",1014001976)], null),cljs.core.disj,cljs.core.last.call(null,new cljs.core.Keyword(null,"bos","bos",1014001976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gibo.gibo))));
return lt.objs.notifos.set_msg_BANG_.call(null,cljs.core.apply.call(null,cljs.core.str,"gibo: ",cljs.core.interpose.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"bos","bos",1014001976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gibo.gibo))))));
})], null);
lt.plugins.gibo.make_gibolite = (function make_gibolite(opts){var lst = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gibo","gibo-list","lt.plugins.gibo/gibo-list",1267582215),opts);lt.object.raise.call(null,lst,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
return lst;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","gibo-list","lt.plugins.gibo/gibo-list",1267582215),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-list","filter-list",4372522309),null,new cljs.core.Keyword(null,"gibo.list","gibo.list",2140834287),null], null), null),new cljs.core.Keyword(null,"selected","selected",2205476365),0,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"search",new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search","search",4402534682),"",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,opts){var opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),100], null),opts);var lis = (function (){var iter__7469__auto__ = ((function (opts__$1){
return (function iter__8234(s__8235){return (new cljs.core.LazySeq(null,((function (opts__$1){
return (function (){var s__8235__$1 = s__8235;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8235__$1);if(temp__4092__auto__)
{var s__8235__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8235__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__8235__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__8237 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__8236 = 0;while(true){
if((i__8236 < size__7468__auto__))
{var i = cljs.core._nth.call(null,c__7467__auto__,i__8236);cljs.core.chunk_append.call(null,b__8237,lt.objs.sidebar.command.item.call(null,this$,i));
{
var G__8239 = (i__8236 + 1);
i__8236 = G__8239;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8237),iter__8234.call(null,cljs.core.chunk_rest.call(null,s__8235__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8237),null);
}
} else
{var i = cljs.core.first.call(null,s__8235__$2);return cljs.core.cons.call(null,lt.objs.sidebar.command.item.call(null,this$,i),iter__8234.call(null,cljs.core.rest.call(null,s__8235__$2)));
}
} else
{return null;
}
break;
}
});})(opts__$1))
,null,null));
});})(opts__$1))
;return iter__7469__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(opts__$1)));
})();lt.object.merge_BANG_.call(null,this$,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lis","lis",1014011400),cljs.core.vec.call(null,lis)], null),opts__$1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-list.empty","div.filter-list.empty",3131797703),lt.objs.sidebar.command.input.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),lis], null)], null);
}));
lt.plugins.gibo.gibo_list = lt.plugins.gibo.make_gibolite.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(cljs.core.truth_(lt.plugins.gibo.git_QMARK_.call(null,new cljs.core.Keyword(null,"gh-local","gh-local",3632269041).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gibo.repo))))?lt.plugins.gibo.repo__GT_items.call(null,lt.plugins.gibo.repo):null),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"search boilerplates"], null));
lt.plugins.gibo.__BEH__bo__GT_buffer = (function __BEH__bo__GT_buffer(this$,coll){var temp__4090__auto__ = new cljs.core.Keyword(null,"action","action",3885920680).cljs$core$IFn$_invoke$arity$1(coll);if(cljs.core.truth_(temp__4090__auto__))
{var f = temp__4090__auto__;return f.call(null);
} else
{lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
lt.object.update_BANG_.call(null,lt.plugins.gibo.gibo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bos","bos",1014001976)], null),cljs.core.conj,coll);
return lt.objs.notifos.set_msg_BANG_.call(null,cljs.core.apply.call(null,cljs.core.str,"gibo: ",cljs.core.interpose.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"bos","bos",1014001976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gibo.gibo))))));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","bo->buffer","lt.plugins.gibo/bo->buffer",1956644741),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__bo__GT_buffer,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.gibo.__BEH__repo_check = (function __BEH__repo_check(this$){if(cljs.core.truth_(lt.plugins.gibo.git_QMARK_.call(null,new cljs.core.Keyword(null,"gh-local","gh-local",3632269041).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gibo.repo)))))
{return null;
} else
{return lt.plugins.gibo.prompt__GT_clone_QMARK_.call(null,lt.plugins.gibo.repo);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","repo-check","lt.plugins.gibo/repo-check",4347604278),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__repo_check,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus!","focus!",4039653819),null], null), null));
lt.plugins.gibo.__BEH__refresh = (function __BEH__refresh(this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.gibo.repo__GT_items.call(null,lt.plugins.gibo.repo)], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","refresh","lt.plugins.gibo/refresh",1096341800),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__refresh,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-refresh!","force-refresh!",3989490874),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gibo.new","gibo.new",1742995283),new cljs.core.Keyword(null,"desc","desc",1016984067),"gibo: new gitignore",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.gibo.gibo_list], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gibo.update","gibo.update",1925584474),new cljs.core.Keyword(null,"desc","desc",1016984067),"gibo: update boilerplates",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.gibo.repo,new cljs.core.Keyword(null,"update!","update!",779473898));
})], null));
}

//# sourceMappingURL=gibo_compiled.js.map