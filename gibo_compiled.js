if(!lt.util.load.provided_QMARK_('lt.plugins.gibo')) {
goog.provide('lt.plugins.gibo');
goog.require('cljs.core');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.tabs');
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
lt.plugins.gibo.path = require("path");
lt.plugins.gibo.nfs = require("fs");
lt.plugins.gibo.gh_default = lt.objs.files.join.call(null,lt.objs.files.home.call(null),".gitignore-boilerplates");
lt.plugins.gibo.gh_remote = "https://github.com/github/gitignore.git";
lt.plugins.gibo.pwd = (function pwd(){return cljs.core.first.call(null,new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)));
});
lt.plugins.gibo.bo_name = (function bo_name(f){return lt.plugins.gibo.path.basename(f,".gitignore");
});
lt.plugins.gibo.gitignore_QMARK_ = (function gitignore_QMARK_(f){return cljs.core._EQ_.call(null,lt.plugins.gibo.path.extname(f),".gitignore");
});
lt.plugins.gibo.git_QMARK_ = (function git_QMARK_(p){return lt.objs.files.exists_QMARK_.call(null,lt.objs.files.join.call(null,p,".git"));
});
lt.plugins.gibo.gitignore_at = (function gitignore_at(p){return lt.objs.files.join.call(null,p,".gitignore");
});
lt.plugins.gibo.gh_local = (function gh_local(r){return cljs.core.peek.call(null,new cljs.core.Keyword(null,"gh-local","gh-local",3632269041).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,r)));
});
/**
* @param {...*} var_args
*/
lt.plugins.gibo.append = (function() { 
var append__delegate = function (path,content,p__8308){var vec__8311 = p__8308;var cb = cljs.core.nth.call(null,vec__8311,0,null);try{lt.plugins.gibo.nfs.appendFileSync(path,content);
lt.object.raise.call(null,lt.objs.files.files_obj,new cljs.core.Keyword(null,"files.save","files.save",3667076614),path);
if(cljs.core.truth_(cb))
{return cb.call(null);
} else
{return null;
}
}catch (e8312){if((e8312 instanceof global.Error))
{var e = e8312;lt.object.raise.call(null,lt.objs.files.files_obj,new cljs.core.Keyword(null,"files.save.error","files.save.error",2424546720),path,e);
if(cljs.core.truth_(cb))
{return cb.call(null,e);
} else
{return null;
}
} else
{if((e8312 instanceof Error))
{var e = e8312;lt.object.raise.call(null,lt.objs.files.files_obj,new cljs.core.Keyword(null,"files.save.error","files.save.error",2424546720),path,e);
if(cljs.core.truth_(cb))
{return cb.call(null,e);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8312;
} else
{return null;
}
}
}
}};
var append = function (path,content,var_args){
var p__8308 = null;if (arguments.length > 2) {
  p__8308 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return append__delegate.call(this,path,content,p__8308);};
append.cljs$lang$maxFixedArity = 2;
append.cljs$lang$applyTo = (function (arglist__8321){
var path = cljs.core.first(arglist__8321);
arglist__8321 = cljs.core.next(arglist__8321);
var content = cljs.core.first(arglist__8321);
var p__8308 = cljs.core.rest(arglist__8321);
return append__delegate(path,content,p__8308);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
lt.plugins.gibo.local_bos = (function local_bos(r){return cljs.core.sort_by.call(null,lt.plugins.gibo.bo_name,cljs.core.filter.call(null,lt.plugins.gibo.gitignore_QMARK_,cljs.core.concat.call(null,lt.objs.files.full_path_ls.call(null,r),lt.objs.files.full_path_ls.call(null,lt.objs.files.join.call(null,r,"Global")))));
});
lt.plugins.gibo.__GT_bo = (function __GT_bo(coll){return cljs.core.map.call(null,(function (p1__8313_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"file","file",1017047278)],[lt.plugins.gibo.bo_name.call(null,p1__8313_SHARP_),p1__8313_SHARP_]);
}),coll);
});
lt.plugins.gibo.__GT_content = (function __GT_content(coll){return [cljs.core.str("## "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(coll)),cljs.core.str(" ##\n\n"),cljs.core.str(lt.objs.files.bomless_read.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(coll)))].join('');
});
lt.plugins.gibo.gitignore_LT__ = (function gitignore_LT__(coll){return clojure.string.join.call(null,cljs.core.interpose.call(null,"\n\n",cljs.core.map.call(null,(function (p1__8314_SHARP_){return lt.plugins.gibo.__GT_content.call(null,p1__8314_SHARP_);
}),coll)));
});
lt.plugins.gibo.__BEH__clone_gh_BANG_ = (function __BEH__clone_gh_BANG_(this$,local){lt.objs.notifos.working.call(null,[cljs.core.str("Gitignore boilerplates not found; cloning into "),cljs.core.str(local)].join(''));
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),"git",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clone",lt.plugins.gibo.gh_remote,local], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.gibo.pwd.call(null),new cljs.core.Keyword(null,"env","env",1014004831),null,new cljs.core.Keyword(null,"obj","obj",1014014057),this$], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","clone-gh!","lt.plugins.gibo/clone-gh!",3104284923),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__clone_gh_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"create!","create!",2042458647),null], null), null));
lt.plugins.gibo.__BEH__pull_gh_BANG_ = (function __BEH__pull_gh_BANG_(this$){if(cljs.core.truth_(lt.plugins.gibo.git_QMARK_.call(null,lt.plugins.gibo.gh_local.call(null,this$))))
{lt.objs.notifos.working.call(null,[cljs.core.str("Updating "),cljs.core.str(lt.plugins.gibo.gh_local.call(null,this$)),cljs.core.str(" to latest github/gitignore")].join(''));
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),"git",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull","origin","master"], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.gibo.gh_local.call(null,this$),new cljs.core.Keyword(null,"env","env",1014004831),null,new cljs.core.Keyword(null,"obj","obj",1014014057),this$], null));
} else
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"create!","create!",2042458647),lt.plugins.gibo.gh_local.call(null,this$));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","pull-gh!","lt.plugins.gibo/pull-gh!",612122147),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__pull_gh_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update!","update!",779473898),null], null), null));
lt.plugins.gibo.__BEH__on_out = (function __BEH__on_out(this$,data){var out = [cljs.core.str(data)].join('');return console.log(out);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","on-out","lt.plugins.gibo/on-out",3422445995),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.gibo.__BEH__on_exit = (function __BEH__on_exit(this$,data){var out = [cljs.core.str(data)].join('');var G__8316 = out;if(cljs.core._EQ_.call(null,"1",G__8316))
{return lt.objs.notifos.done_working.call(null,"Git operation failed with exit code 1.");
} else
{if(cljs.core._EQ_.call(null,"0",G__8316))
{lt.objs.notifos.done_working.call(null,"Git operation successful.");
return lt.object.raise.call(null,lt.plugins.gibo.gibo_list,new cljs.core.Keyword(null,"force-refresh!","force-refresh!",3989490874));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{lt.objs.notifos.done_working.call(null,"Git operation failed; see console for details.");
return console.log([cljs.core.str("Git exit code: "),cljs.core.str(out)].join(''));
} else
{return null;
}
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","on-exit","lt.plugins.gibo/on-exit",3570984407),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__on_exit,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));
lt.plugins.gibo.__BEH__on_error = (function __BEH__on_error(this$,data){var out = [cljs.core.str(data)].join('');lt.objs.notifos.done_working.call(null,"Git encountered an error; see console for details.");
return console.log(out);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","on-error","lt.plugins.gibo/on-error",4136408929),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__on_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","repo","lt.plugins.gibo/repo",4276560505),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gibo.repo","gibo.repo",2141009091),null], null), null),new cljs.core.Keyword(null,"gh-local","gh-local",3632269041),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gibo.gh_default], null),new cljs.core.Keyword(null,"custom","custom",3959783139),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"init","init",1017141378),(function (){return null;
}));
lt.plugins.gibo.repo = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gibo","repo","lt.plugins.gibo/repo",4276560505));
lt.plugins.gibo.__BEH__set_gh_local = (function __BEH__set_gh_local(this$,custom){if(cljs.core.truth_(custom))
{return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gh-local","gh-local",3632269041)], null),cljs.core.assoc,0,custom);
} else
{return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gh-local","gh-local",3632269041)], null),cljs.core.assoc,0,lt.plugins.gibo.gh_default);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","set-gh-local","lt.plugins.gibo/set-gh-local",1859379089),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__set_gh_local,new cljs.core.Keyword(null,"desc","desc",1016984067),"Gibo: set local github/gitignore repository",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Absolute path"], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gibo.repo","gibo.repo",2141009091),null], null), null));
lt.plugins.gibo.note_write = (function note_write(p){lt.objs.notifos.done_working.call(null,[cljs.core.str(".gitignore saved at "),cljs.core.str(p)].join(''));
return null;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","gibo","lt.plugins.gibo/gibo",4275838780),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gibo","gibo",1017076769),null], null), null),new cljs.core.Keyword(null,"bos","bos",1014001976),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"init","init",1017141378),(function (){return null;
}));
lt.plugins.gibo.__BEH__review_BANG_ = (function __BEH__review_BANG_(this$,content){var last = lt.objs.editor.pool.last_active.call(null);var info = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mime","mime",1017255846),"plaintext",new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.plaintext","editor.plaintext",4474629672)], null),new cljs.core.Keyword(null,"name","name",1017277949),".gitignore",new cljs.core.Keyword(null,"content","content",1965434859),content], null);var ed = lt.objs.editor.pool.create.call(null,info);var dirty_QMARK_ = cljs.core.seq.call(null,content);lt.object.add_tags.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.transient","editor.transient",3554141883)], null));
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
lt.plugins.gibo.append.call(null,lt.plugins.gibo.gitignore_at.call(null,p),(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,lt.plugins.gibo.gitignore_at.call(null,p)))?[cljs.core.str("\n\n"),cljs.core.str(content)].join(''):content),lt.plugins.gibo.note_write.call(null,p));
lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bos","bos",1014001976)], null),cljs.core.empty);
lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"close-sidebar","close-sidebar",1108494329));
return lt.object.raise.call(null,lt.plugins.gibo.gibo_list,new cljs.core.Keyword(null,"escape!","escape!",3844244274),false);
} else
{return lt.object.raise.call(null,lt.plugins.gibo.gibo,new cljs.core.Keyword(null,"to-the-tabs!","to-the-tabs!",3450633895),content);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","write!","lt.plugins.gibo/write!",2989677033),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__write_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to-the-disks!","to-the-disks!",3087902539),null], null), null));
lt.plugins.gibo.gibo = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gibo","gibo","lt.plugins.gibo/gibo",4275838780));
lt.plugins.gibo.reviewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Gibo: Review",new cljs.core.Keyword(null,"file","file",1017047278),null,new cljs.core.Keyword(null,"action","action",3885920680),(function (){return lt.object.raise.call(null,lt.plugins.gibo.gibo,new cljs.core.Keyword(null,"to-the-tabs!","to-the-tabs!",3450633895),lt.plugins.gibo.gitignore_LT__.call(null,new cljs.core.Keyword(null,"bos","bos",1014001976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gibo.gibo))));
})], null);
lt.plugins.gibo.writer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Gibo: Write",new cljs.core.Keyword(null,"file","file",1017047278),null,new cljs.core.Keyword(null,"action","action",3885920680),(function (){return lt.object.raise.call(null,lt.plugins.gibo.gibo,new cljs.core.Keyword(null,"to-the-disks!","to-the-disks!",3087902539),lt.plugins.gibo.gitignore_LT__.call(null,new cljs.core.Keyword(null,"bos","bos",1014001976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gibo.gibo))));
})], null);
lt.plugins.gibo.make_gibolite = (function make_gibolite(opts){var lst = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gibo","gibo-list","lt.plugins.gibo/gibo-list",1267582215),opts);lt.object.raise.call(null,lst,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
return lst;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","gibo-list","lt.plugins.gibo/gibo-list",1267582215),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-list","filter-list",4372522309),null,new cljs.core.Keyword(null,"gibo.list","gibo.list",2140834287),null], null), null),new cljs.core.Keyword(null,"selected","selected",2205476365),0,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"search",new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search","search",4402534682),"",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,opts){var opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),100], null),opts);var lis = (function (){var iter__7455__auto__ = ((function (opts__$1){
return (function iter__8317(s__8318){return (new cljs.core.LazySeq(null,((function (opts__$1){
return (function (){var s__8318__$1 = s__8318;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8318__$1);if(temp__4092__auto__)
{var s__8318__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8318__$2))
{var c__7453__auto__ = cljs.core.chunk_first.call(null,s__8318__$2);var size__7454__auto__ = cljs.core.count.call(null,c__7453__auto__);var b__8320 = cljs.core.chunk_buffer.call(null,size__7454__auto__);if((function (){var i__8319 = 0;while(true){
if((i__8319 < size__7454__auto__))
{var x = cljs.core._nth.call(null,c__7453__auto__,i__8319);cljs.core.chunk_append.call(null,b__8320,lt.objs.sidebar.command.item.call(null,this$,x));
{
var G__8322 = (i__8319 + 1);
i__8319 = G__8322;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8320),iter__8317.call(null,cljs.core.chunk_rest.call(null,s__8318__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8320),null);
}
} else
{var x = cljs.core.first.call(null,s__8318__$2);return cljs.core.cons.call(null,lt.objs.sidebar.command.item.call(null,this$,x),iter__8317.call(null,cljs.core.rest.call(null,s__8318__$2)));
}
} else
{return null;
}
break;
}
});})(opts__$1))
,null,null));
});})(opts__$1))
;return iter__7455__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(opts__$1)));
})();lt.object.merge_BANG_.call(null,this$,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lis","lis",1014011400),cljs.core.vec.call(null,lis)], null),opts__$1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-list.empty","div.filter-list.empty",3131797703),lt.objs.sidebar.command.input.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),lis], null)], null);
}));
lt.plugins.gibo.gibo_list = lt.plugins.gibo.make_gibolite.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(cljs.core.truth_(lt.plugins.gibo.git_QMARK_.call(null,lt.plugins.gibo.gh_local.call(null,lt.plugins.gibo.repo)))?cljs.core.conj.call(null,lt.plugins.gibo.__GT_bo.call(null,lt.plugins.gibo.local_bos.call(null,lt.plugins.gibo.gh_local.call(null,lt.plugins.gibo.repo))),lt.plugins.gibo.writer,lt.plugins.gibo.reviewer):null),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Boilerplates"], null));
lt.plugins.gibo.__BEH__bo__GT_buffer = (function __BEH__bo__GT_buffer(this$,coll){var temp__4090__auto__ = new cljs.core.Keyword(null,"action","action",3885920680).cljs$core$IFn$_invoke$arity$1(coll);if(cljs.core.truth_(temp__4090__auto__))
{var f = temp__4090__auto__;return f.call(null);
} else
{lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
lt.object.update_BANG_.call(null,lt.plugins.gibo.gibo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bos","bos",1014001976)], null),cljs.core.conj,coll);
return lt.objs.notifos.set_msg_BANG_.call(null,cljs.core.apply.call(null,cljs.core.str,"Gibo: ",cljs.core.interpose.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"bos","bos",1014001976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gibo.gibo))))));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","bo->buffer","lt.plugins.gibo/bo->buffer",1956644741),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__bo__GT_buffer,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.gibo.__BEH__repo_check = (function __BEH__repo_check(this$){if(cljs.core.truth_(lt.plugins.gibo.git_QMARK_.call(null,lt.plugins.gibo.gh_local.call(null,lt.plugins.gibo.repo))))
{return null;
} else
{return lt.object.raise.call(null,lt.plugins.gibo.repo,new cljs.core.Keyword(null,"create!","create!",2042458647),lt.plugins.gibo.gh_local.call(null,lt.plugins.gibo.repo));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","repo-check","lt.plugins.gibo/repo-check",4347604278),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__repo_check,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null), null));
lt.plugins.gibo.__BEH__refresh = (function __BEH__refresh(this$){lt.objs.notifos.set_msg_BANG_.call(null,"Gitignore boilerplates refreshed.");
lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),(function (){return cljs.core.conj.call(null,lt.plugins.gibo.__GT_bo.call(null,lt.plugins.gibo.local_bos.call(null,lt.plugins.gibo.gh_local.call(null,lt.plugins.gibo.repo))),lt.plugins.gibo.writer,lt.plugins.gibo.reviewer);
}));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gibo","refresh","lt.plugins.gibo/refresh",1096341800),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gibo.__BEH__refresh,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-refresh!","force-refresh!",3989490874),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gibo.new","gibo.new",1742995283),new cljs.core.Keyword(null,"desc","desc",1016984067),"Gibo: new gitignore",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.gibo.gibo_list], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gibo.update","gibo.update",1925584474),new cljs.core.Keyword(null,"desc","desc",1016984067),"Gibo: update boilerplates",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.gibo.repo,new cljs.core.Keyword(null,"update!","update!",779473898));
})], null));
}

//# sourceMappingURL=gibo_compiled.js.map