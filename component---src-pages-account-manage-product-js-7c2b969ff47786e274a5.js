(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{b3Vd:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),c=(n("ls82"),n("HaE+")),o=n("q1tI"),i=n.n(o),l=n("otPn"),u=n("P3Am"),s=n("463D"),d=n("ZmBq"),h=n("XDYV"),f=n("evJi"),m=n("ebn3"),p=function(e){var t=e.data,n=e.onConfigure,r=e.onDelete;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{columns:[{property:"name",header:i.a.createElement(h.a,null,"Name"),primary:!0},{property:"description",header:i.a.createElement(h.a,null,"Description")},{property:"startBid",header:i.a.createElement(h.a,null,"Start Bid")},{property:"instantClosePrice",header:i.a.createElement(h.a,null,"Instant Close Price")},{property:"Status",header:i.a.createElement(h.a,null,"Status")},{property:"available",header:i.a.createElement(h.a,null,"Display")},{property:"",header:i.a.createElement(h.a,null,"Action"),render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{onClick:function(){return n&&n(e)},style:{cursor:"pointer"}}),i.a.createElement(m.a,{onClick:function(){return r&&r(e)},style:{cursor:"pointer"}}))}}],data:t}))},b=n("ACV0"),g=n("omfP"),k=n("T1Te"),x=n("pngH"),j=n("yzbm"),O=n("LXcg"),v=function(e){var t=e.formModal,n=e.onModal,r=e.mode,a=void 0===r?"create":r,c=(e.onDelete,e.onUpdate,Object(o.useState)(t)),s=c[0],d=c[1],h=i.a.useState(!0),f=h[0],m=h[1],p=Object(o.useState)(null)[1],v=function(e,t){return{value:t[e],onChange:function(n){var r;return d(Object.assign({},t,((r={})[e]=n.target.value,r)))}}},y=Object(o.useCallback)((function(e){!function(e){new O.g.File(e.name,e).save().then((function(e){p(e.url()),d(Object.assign({},s,{photo:e,available:!!f}))}))}(e&&e[0])}),[s,f]),B=Object(j.a)({onDrop:y}),E=B.getRootProps,C=B.getInputProps,w=B.isDragActive;return i.a.createElement(l.a,null,"delete"===a&&i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{level:2},"Are you sure?"),s&&s.photo&&s.photo.url&&i.a.createElement(l.a,{height:"small",width:"small"},i.a.createElement(g.a,{fit:"cover",src:s.photo.url})),i.a.createElement(k.a,{label:"delete",onClick:function(){n&&n(a,Object.assign({},s,{available:!!f}))}})),["create","update"].includes(a)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{level:3},"Upload Product"),i.a.createElement(u.a,Object.assign({placeholder:"Product Name"},v("name",s))),i.a.createElement(l.a,{direction:"row"},i.a.createElement("div",E(),i.a.createElement("input",C()),s&&s.photo&&s.photo.url&&i.a.createElement(l.a,{height:"small",width:"small"},i.a.createElement(g.a,{fit:"cover",src:s.photo.url})),w?i.a.createElement("p",null,"Drop the files here ..."):i.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files"))),i.a.createElement(u.a,Object.assign({},v("startBid",s),{placeholder:"Start Bid"})),i.a.createElement(u.a,Object.assign({},v("instantClosePrice",s),{placeholder:"Instant Close"})),i.a.createElement(x.a,{checked:f,label:"Display On Store",onChange:function(e){m(e.target.checked)}}),i.a.createElement(k.a,{label:a,onClick:function(){return n&&n(a,Object.assign({},s,{available:!!f}))}})))},y=n("/Q2I"),B=n("zpb6");t.default=function(e){var t=e.id,n=O.g&&O.g.Object&&O.g.Object.extend("Store"),r=Object(o.useState)({}),d=r[0],h=r[1],f=Object(o.useState)(n&&new n)[0],m=Object(o.useState)({}),b=m[0],g=m[1],k=Object(o.useState)(!1),x=k[0],j=k[1],E=Object(o.useState)(null),C=E[0],w=E[1],P=Object(o.useState)([]),S=P[0],I=P[1],z=Object(o.useState)("create"),D=z[0],F=z[1];return Object(o.useEffect)((function(){(function(){var e=Object(c.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.m)();case 2:n=e.sent,w(n.find((function(e){return e.id===t})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(o.useEffect)((function(){C&&(g({name:C.get("name")}),function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=I,e.next=3,Object(O.n)(C);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())}),[C]),i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{fill:!0,justify:"center",align:"center",alignContent:"center"},i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{fill:!0,gap:"small",direction:"row"},i.a.createElement(u.a,{plain:!1,placeholder:"choose a store name",value:b.name,onChange:function(e){g(Object.assign({},b,{objectId:f&&f.id,name:e.target.value}))}}),i.a.createElement(s.a,{onClick:function(){return j(!0)}},"Change Store Name"),i.a.createElement(s.a,{onClick:function(){F("create"),h({}),j(!0)}},"Add Product")),i.a.createElement(l.a,{fill:!0},i.a.createElement(p,{data:S?S.map((function(e){return e.toJSON()})):[],onConfigure:function(e){F("update"),h(e),j(!0)},onDelete:function(e){F("delete"),h(e),j(!0)}})))),x&&i.a.createElement(y.a,{onClose:function(){return j(!1)}},i.a.createElement(v,{mode:D,formModal:d,onModal:function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=["name","photo","startBid","instantClosePrice","objectId","available"],c=C.id,n=Object(B.cloneJSONKey)(n,r),"create"!==t){e.next=6;break}return e.next=6,Object(O.e)(n,C.id);case 6:if("update"!==t){e.next=9;break}return e.next=9,Object(O.E)(Object.assign({},n,{productId:n.objectId,storeId:c}));case 9:if("delete"!==t){e.next=12;break}return e.next=12,Object(O.h)({productId:n.objectId,storeId:c});case 12:setTimeout((function(){return Object(O.n)(C).then((function(e){I(e),j(!1)}))}),1e3);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),onClose:function(){return j(!1)}})))}},pngH:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("q1tI"),a=n.n(r),c=n("vOnD"),o=n("U7WQ"),i=n("+Wdg"),l=n("otPn"),u=n("y90F"),s=n("cVt8"),d=n("/Rk8"),h=Object(c.css)([":hover input:not([disabled]) + div,:hover input:not([disabled]) + span{border-color:",";}"],(function(e){return Object(s.c)(e.theme.checkBox.hover.border.color,e.theme)})),f=c.default.svg.withConfig({displayName:"StyledCheckBox__StyledCheckBoxIcon",componentId:"sc-1dbk5ju-0"})(["box-sizing:border-box;stroke-width:",";stroke:",";width:",";height:",";",";"],(function(e){return e.theme.checkBox.check.thickness}),(function(e){return Object(s.c)(e.theme.checkBox.color||"control",e.theme)}),(function(e){return e.theme.checkBox.icon.size||e.theme.checkBox.size}),(function(e){return e.theme.checkBox.icon.size||e.theme.checkBox.size}),(function(e){return e.theme.checkBox.icon.extend}));f.defaultProps={},Object.setPrototypeOf(f.defaultProps,i.a);var m=c.default.label.withConfig({displayName:"StyledCheckBox__StyledCheckBoxContainer",componentId:"sc-1dbk5ju-1"})(["display:flex;flex-direction:row;align-items:center;user-select:none;width:fit-content;"," "," "," ",""],(function(e){return e.disabled&&"\n  opacity: 0.5;\n  cursor: default;\n"}),(function(e){return!e.disabled&&"cursor: pointer;"}),(function(e){return e.theme.checkBox.hover.border.color&&h}),(function(e){return e.theme.checkBox.extend}));m.defaultProps={},Object.setPrototypeOf(m.defaultProps,i.a);var p=c.default.input.withConfig({displayName:"StyledCheckBox__StyledCheckBoxInput",componentId:"sc-1dbk5ju-2"})(["opacity:0;-moz-appearance:none;width:0;height:0;margin:0;",":checked + span > span{left:calc( "," - "," );background:",";}"],(function(e){return!e.disabled&&"cursor: pointer;"}),(function(e){return e.theme.checkBox.toggle.size}),(function(e){return e.theme.checkBox.size}),(function(e){return Object(s.c)(e.theme.checkBox.color||"control",e.theme)}));p.defaultProps={},Object.setPrototypeOf(p.defaultProps,i.a);var b=c.default.div.withConfig({displayName:"StyledCheckBox__StyledCheckBoxBox",componentId:"sc-1dbk5ju-3"})(["",";",";"],(function(e){return e.focus&&Object(d.f)()}),(function(e){return e.theme.checkBox.check.extend}));b.defaultProps={},Object.setPrototypeOf(b.defaultProps,i.a);var g=c.default.span.withConfig({displayName:"StyledCheckBox__StyledCheckBoxToggle",componentId:"sc-1dbk5ju-4"})(["box-sizing:border-box;vertical-align:middle;display:inline-block;width:",";height:",";border:"," solid;border-color:",";border-radius:",";background-color:",";",";",";"],(function(e){return e.theme.checkBox.toggle.size}),(function(e){return e.theme.checkBox.size}),(function(e){return e.theme.checkBox.border.width}),(function(e){return Object(s.c)(e.theme.checkBox.border.color,e.theme)}),(function(e){return e.theme.checkBox.toggle.radius}),(function(e){return e.theme.checkBox.toggle.background?Object(s.c)(e.theme.checkBox.toggle.background,e.theme):"transparent"}),(function(e){return e.focus&&Object(d.f)()}),(function(e){return e.theme.checkBox.toggle.extend}));g.defaultProps={},Object.setPrototypeOf(g.defaultProps,i.a);var k=c.default.span.withConfig({displayName:"StyledCheckBox__StyledCheckBoxKnob",componentId:"sc-1dbk5ju-5"})(["box-sizing:border-box;position:relative;display:inherit;top:-",";left:-",";transition:all 0.3s;width:",";height:",";background:",";border-radius:",";",";"],(function(e){return e.theme.checkBox.border.width}),(function(e){return e.theme.checkBox.border.width}),(function(e){return e.theme.checkBox.size}),(function(e){return e.theme.checkBox.size}),(function(e){return Object(s.c)(e.theme.checkBox.toggle.color[e.theme.dark?"dark":"light"],e.theme)}),(function(e){return e.theme.checkBox.toggle.radius}),(function(e){return e.theme.checkBox.toggle.knob.extend}));k.defaultProps={},Object.setPrototypeOf(k.defaultProps,i.a);var x=c.default.div.withConfig({displayName:"StyledCheckBox",componentId:"sc-1dbk5ju-6"})(["flex-shrink:0;"]);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}x.defaultProps={},Object.setPrototypeOf(x.defaultProps,i.a);var O=function(e){"checkbox"!==e.target.type&&e.stopPropagation()},v=Object(r.forwardRef)((function(e,t){var n,d=e.a11yTitle,h=e.checked,v=e.disabled,y=e.focus,B=e.id,E=e.label,C=e.name,w=e.onBlur,P=e.onChange,S=e.onFocus,I=e.reverse,z=e.toggle,D=e.indeterminate,F=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["a11yTitle","checked","disabled","focus","id","label","name","onBlur","onChange","onFocus","reverse","toggle","indeterminate"]),N=Object(r.useContext)(c.ThemeContext)||i.a.theme,_=Object(r.useContext)(u.a).useFormInput(C,h,!1),M=_[0],A=_[1],T=Object(r.useState)(y),J=T[0],R=T[1];Object(r.useEffect)((function(){return R(y)}),[y]),Object(r.useEffect)((function(){h&&D&&console.warn('Checkbox cannot be "checked" and "indeterminate" at the same time.'),z&&D&&console.warn('Checkbox of type toggle does not have "indeterminate" state.')}),[h,z,D]);var L,V={checked:M,disabled:v,focus:J,reverse:I,toggle:z,indeterminate:D};v&&M&&(L=a.a.createElement("input",{name:C,type:"hidden",value:"true"}));var q=N.checkBox.icons,H=q.checked,U=q.indeterminate,Y=Object(s.c)(N.checkBox.border.color,N);M&&(Y=Object(s.c)(N.checkBox.color||"control",N));var K=z?a.a.createElement(g,V,a.a.createElement(k,V)):a.a.createElement(b,j({as:l.a,align:"center",justify:"center",width:N.checkBox.size,height:N.checkBox.size,border:{size:N.checkBox.border.width,color:Y},round:N.checkBox.check.radius},V),!D&&M&&(H?a.a.createElement(H,{theme:N,as:f}):a.a.createElement(f,j({theme:N,viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet"},V),a.a.createElement("path",{fill:"none",d:"M6,11.3 L10.3,16 L18,6.2"}))),!M&&D&&(U?a.a.createElement(U,{theme:N,as:f}):a.a.createElement(f,j({theme:N,viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet"},V),a.a.createElement("path",{fill:"none",d:"M6,12 L18,12"})))),Q=I?"left":"right",W=a.a.createElement(x,j({as:l.a,align:"center",justify:"center",margin:E&&(n={},n[Q]=N.checkBox.gap||"small",n)},V),a.a.createElement(p,j({},F,{ref:t,type:"checkbox"},Object(o.c)({id:B,name:C,checked:M,disabled:v}),V,{onFocus:function(e){R(!0),S&&S(e)},onBlur:function(e){R(!1),w&&w(e)},onChange:function(e){A(e.target.checked),P&&P(e)}})),K,L),X="string"==typeof E?a.a.createElement("span",null,E):E,Z=I?X:W,G=I?W:X;return a.a.createElement(m,j({"aria-label":d,reverse:I},Object(o.c)({htmlFor:B,disabled:v}),{checked:M,onClick:O},V),Z,G)}));v.displayName="CheckBox";var y=v}}]);
//# sourceMappingURL=component---src-pages-account-manage-product-js-7c2b969ff47786e274a5.js.map