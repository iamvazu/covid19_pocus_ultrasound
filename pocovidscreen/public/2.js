(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{45:function(e,t){e.exports="/images/download.svg?4861d7cb6b1840333fd988f95ab0c6a0"},46:function(e,t){e.exports="/images/download-dark.svg?870a552c6f977dfdd3671bb01e9bb11a"},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a(11),i=a(7),c=a(47),s=a(6),m=a(45),u=a.n(m),d=a(46),p=a.n(d),f=a(19),b=a(15);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(){var e=Object(n.useContext)(f.a),t=Object(b.g)(),a="light"===e.themeMode,m=p.a;a&&(m=u.a);var d={display:"inline-flex",borderRadius:7,marginBottom:8,marginRight:8,width:150,height:150,padding:0,overflow:"hidden",boxSizing:"border-box"},v={display:"flex",minWidth:0,overflow:"hidden"},y={display:"block",width:"auto",height:"100%"},E=g(Object(n.useState)([]),2),h=E[0],w=E[1];Object(n.useEffect)((function(){return function(){h.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[h]);var j=Object(c.a)({accept:"image/png, image/jpeg, image/jpg",noClick:!0,multiple:!0,noKeyboard:!0,onDrop:function(e){w(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),x=j.getRootProps,N=j.getInputProps,O=j.open,k=h.map((function(e){return r.a.createElement("div",{style:d,key:e.name},r.a.createElement("div",{style:v},r.a.createElement("img",{src:e.preview,style:y})))}));return r.a.createElement(s.a,null,r.a.createElement(l.a,null,r.a.createElement("title",null,"Screen - ",i.a.appTitle)),r.a.createElement(o.a,{additionalClass:"small",teaser:"Select the images you want to analyses"}),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.push({pathname:"/screen/results",state:{files:h}})}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-10 offset-lg-1"},r.a.createElement("section",{className:"custom-dropzone text-center"},r.a.createElement("img",{src:m,className:"mt-3 mb-2"}),r.a.createElement("div",x({className:"dropzone"}),r.a.createElement("input",N()),r.a.createElement("button",{type:"button",className:"button primary round my-4 px-5",onClick:O},"Choose file"),r.a.createElement("p",null,"Or drag and drop some files here"))))),r.a.createElement("aside",{className:"justify-content-center",style:{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16}},k),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-10 offset-lg-1"},r.a.createElement("button",{className:"button primary round w-100 text-uppercase mt-4"},"Confirm"))))),r.a.createElement("div",{className:"spacer"}))}}}]);
//# sourceMappingURL=2.js.map