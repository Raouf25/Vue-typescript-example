"use strict";(self["webpackChunkts_vue_sample"]=self["webpackChunkts_vue_sample"]||[]).push([[803],{3617:function(t,e,s){s.r(e),s.d(e,{default:function(){return f}});var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"blog"},[e("h1",{staticClass:"page-title"},[t._v("Article")]),e("div",{staticClass:"main"},[t._m(0),e("h1",{staticClass:"page-title article-title"},[t._v(t._s(t.article.title))]),e("div",{staticClass:"article-description"},[t._v(t._s(t.article.body))])])])},r=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"banner-container"},[e("img",{staticClass:"banner",attrs:{src:"https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg"}})])}],l=s(6318),n=s(655),a=s(5334),c=s(176);const o=(0,c.uD)("posts");let u=class extends a.w3{constructor(...t){super(...t),(0,l.Z)(this,"article",{}),(0,l.Z)(this,"list",void 0),(0,l.Z)(this,"getPost",void 0)}created(){this.getArticle(+this.$route.params.id)}getArticle(t){this.getPost(t).then((t=>{this.article=t}))}};(0,n.gn)([o.State],u.prototype,"list",void 0),(0,n.gn)([o.Action],u.prototype,"getPost",void 0),u=(0,n.gn)([a.wA],u);var d=u,p=d,v=s(1001),h=(0,v.Z)(p,i,r,!1,null,"f11a5f62",null),f=h.exports},5473:function(t,e,s){s.r(e),s.d(e,{default:function(){return f}});var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"home"},[e("h1",{staticClass:"page-title"},[t._v("Modify / Delete Articles")]),e("div",{staticClass:"card-container"},t._l(t.list,(function(s){return e("el-card",{key:s.id,staticClass:"article",attrs:{"body-style":{padding:"0px"}}},[e("div",{staticClass:"overlay"},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.editArticle(s.id)}}},[t._v(" Edit Article ")]),e("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.deleteArticle(s.id)}}},[t._v(" Delete Article ")])],1),e("img",{staticClass:"image",attrs:{src:"https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg"}}),e("div",{staticClass:"title"},[t._v(" "+t._s(s.title)+" ")])])})),1)])},r=[],l=s(6318),n=(s(7658),s(655)),a=s(5334),c=s(176);const o=(0,c.uD)("posts");let u=class extends a.w3{constructor(...t){super(...t),(0,l.Z)(this,"list",void 0),(0,l.Z)(this,"getAllPosts",void 0),(0,l.Z)(this,"deletePost",void 0)}mounted(){this.getAllPosts()}editArticle(t){this.$router.push({name:"edit",params:{id:t.toString()}})}deleteArticle(t){this.deletePost(t)}};(0,n.gn)([o.State],u.prototype,"list",void 0),(0,n.gn)([o.Action],u.prototype,"getAllPosts",void 0),(0,n.gn)([o.Action],u.prototype,"deletePost",void 0),u=(0,n.gn)([a.wA],u);var d=u,p=d,v=s(1001),h=(0,v.Z)(p,i,r,!1,null,"a5b26004",null),f=h.exports},7658:function(t,e,s){var i=s(2109),r=s(7908),l=s(6244),n=s(3658),a=s(7207),c=s(7293),o=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},d=o||!u();i({target:"Array",proto:!0,arity:1,forced:d},{push:function(t){var e=r(this),s=l(e),i=arguments.length;a(s+i);for(var c=0;c<i;c++)e[s]=arguments[c],s++;return n(e,s),s}})}}]);
//# sourceMappingURL=ModifyBlog.d72e42f2.js.map