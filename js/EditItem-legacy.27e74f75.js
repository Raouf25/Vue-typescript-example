"use strict";(self["webpackChunkts_vue_sample"]=self["webpackChunkts_vue_sample"]||[]).push([[514],{7732:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"create"},[e("h1",{staticClass:"page-title"},[t._v(t._s(t.pageTitle))]),e("div",{staticClass:"form-container"},[e("el-form",{attrs:{"label-position":"top",model:t.formData}},[e("el-form-item",{attrs:{label:"Title"}},[e("el-input",{attrs:{type:"textarea"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),e("el-form-item",{attrs:{label:"Description"}},[e("el-input",{attrs:{type:"textarea"},model:{value:t.formData.body,callback:function(e){t.$set(t.formData,"body",e)},expression:"formData.body"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm()}}},[t._v(t._s(t.pageTitle))])],1)],1)],1)])},o=[],s=i(5226),r=i(7594),l=i(6520),n=i(2011),c=i(1801),p=i(4503),u=(i(2222),i(655)),f=i(5334),m=i(176),d=(0,m.uD)("posts"),h=function(t){(0,n.Z)(i,t);var e=(0,c.Z)(i);function i(){var t;(0,s.Z)(this,i);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o)),(0,p.Z)((0,l.Z)(t),"pageTitle",""),(0,p.Z)((0,l.Z)(t),"isNew",!0),(0,p.Z)((0,l.Z)(t),"postId",0),(0,p.Z)((0,l.Z)(t),"formData",{title:"",id:0,body:""}),(0,p.Z)((0,l.Z)(t),"editPost",void 0),(0,p.Z)((0,l.Z)(t),"createPost",void 0),(0,p.Z)((0,l.Z)(t),"getPost",void 0),t}return(0,r.Z)(i,[{key:"created",value:function(){var t=this;this.postId=+this.$route.params.id,this.postId?(this.isNew=!1,this.pageTitle="Modify Article",this.getPost(this.postId).then((function(e){t.formData=e}))):this.pageTitle="Create new Article"}},{key:"submitForm",value:function(){this.isNew?this.createPost(this.formData):(this.formData.id=this.postId,this.editPost(this.formData))}}]),i}(f.w3);(0,u.gn)([d.Action],h.prototype,"editPost",void 0),(0,u.gn)([d.Action],h.prototype,"createPost",void 0),(0,u.gn)([d.Action],h.prototype,"getPost",void 0),h=(0,u.gn)([f.wA],h);var v=h,Z=v,y=i(1001),b=(0,y.Z)(Z,a,o,!1,null,"7ef2ce15",null),g=b.exports}}]);
//# sourceMappingURL=EditItem-legacy.27e74f75.js.map