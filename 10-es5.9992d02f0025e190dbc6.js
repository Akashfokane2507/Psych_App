function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,i){return n&&_defineProperties(e.prototype,n),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2yxt":function(e,n,i){"use strict";i.r(n),i.d(n,"ChatPageModule",(function(){return M}));var t=i("ofXK"),o=i("3Pt+"),s=i("TEn/"),r=i("tyNb"),a=i("HDdC"),c=i("fXoL"),b=i("7JkF"),u=i("R7Hv");function l(e,n){if(1&e&&(c.Mb(0,"ion-row",8),c.Mb(1,"ion-col",9),c.Mb(2,"ion-item",10),c.Mb(3,"ion-label",11),c.gc(4),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&e){var i=c.Wb().$implicit;c.zb(4),c.ic(" ",i.message," ")}}function m(e,n){if(1&e&&(c.Mb(0,"ion-row",12),c.Mb(1,"ion-col",9),c.Mb(2,"ion-list",13),c.Mb(3,"ion-list-header",14),c.Mb(4,"ion-label"),c.Mb(5,"b"),c.gc(6),c.Lb(),c.Lb(),c.Lb(),c.Mb(7,"ion-item"),c.Mb(8,"ion-label",15),c.gc(9),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&e){var i=c.Wb().$implicit;c.zb(6),c.hc(i.username),c.zb(3),c.ic(" ",i.message," ")}}function f(e,n){if(1&e&&(c.Mb(0,"div"),c.fc(1,l,5,1,"ion-row",6),c.fc(2,m,10,2,"ion-row",7),c.Lb()),2&e){var i=n.$implicit,t=c.Wb();c.zb(1),c.Zb("ngIf",i.username==t.username),c.zb(1),c.Zb("ngIf",i.username!=t.username)}}var g,d,h,p=[{path:"",component:(g=function(){function e(n,i){var t=this;_classCallCheck(this,e),this.socket=n,this.service=i,this.current_message="",this.messages=[],this.others_messages=[],this.username=this.service.getJdata("username"),new a.a((function(e){t.socket.on("received",(function(n){console.log("recieved message"),e.next(n)}))})).subscribe((function(e){t.messages.push(e)}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"key_press",value:function(e){13==e.keyCode&&this.send_message()}},{key:"send_message",value:function(){""!=this.current_message&&(console.log(this.current_message),this.messages.push({username:this.username,message:this.current_message}),this.socket.emit("chat message",{username:this.username,message:this.current_message}),this.current_message="")}},{key:"receive_message",value:function(){}}]),e}(),g.\u0275fac=function(e){return new(e||g)(c.Jb(b.a),c.Jb(u.a))},g.\u0275cmp=c.Db({type:g,selectors:[["app-chat"]],decls:11,vars:2,consts:[["fullscreen","true"],[4,"ngFor","ngForOf"],[1,"ion-no-bordr"],[2,"position","fixed","bottom","0","width","100%","z-index","1000"],["autocapitalize","","autofocus","","color","primary","inputmode","text","minlength","1","placeholder","Type a message","required","",3,"ngModel","keydown","ngModelChange"],["slot","end","name","send",3,"click"],["class","ion-justify-content-end ion-margin-start",4,"ngIf"],["class","ion-justify-content-start ion-margin-end",4,"ngIf"],[1,"ion-justify-content-end","ion-margin-start"],["size","auto"],["lines","none","end","",2,"--border-radius","10px","--background","#075E54"],[1,"ion-text-wrap"],[1,"ion-justify-content-start","ion-margin-end"],["lines","none","inset","true","end","",1,"ion-no-padding","ion-margin-start",2,"border-radius","10px!important"],["lines","none",1,"ion-no-padding","ion-no-margin","ion-padding-horizontal",2,"--color","red"],[1,"ion-text-wrap","ion-no-margin","ion-no-padding"]],template:function(e,n){1&e&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.gc(3,"chat"),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content",0),c.fc(5,f,3,2,"div",1),c.Lb(),c.Mb(6,"ion-footer",2),c.Mb(7,"ion-toolbar"),c.Mb(8,"ion-item",3),c.Mb(9,"ion-input",4),c.Ub("keydown",(function(e){return n.key_press(e)}))("ngModelChange",(function(e){return n.current_message=e})),c.Lb(),c.Mb(10,"ion-icon",5),c.Ub("click",(function(){return n.send_message()})),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.zb(5),c.Zb("ngForOf",n.messages),c.zb(4),c.Zb("ngModel",n.current_message))},directives:[s.h,s.w,s.v,s.e,t.h,s.f,s.k,s.j,s.B,o.b,o.g,o.e,o.f,s.i,t.i,s.t,s.d,s.l,s.m,s.n],styles:[""]}),g)}],y=((h=function e(){_classCallCheck(this,e)}).\u0275mod=c.Hb({type:h}),h.\u0275inj=c.Gb({factory:function(e){return new(e||h)},imports:[[r.i.forChild(p)],r.i]}),h),M=((d=function e(){_classCallCheck(this,e)}).\u0275mod=c.Hb({type:d}),d.\u0275inj=c.Gb({factory:function(e){return new(e||d)},imports:[[t.b,o.a,s.x,y]]}),d)}}]);