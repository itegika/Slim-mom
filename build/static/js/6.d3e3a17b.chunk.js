(this["webpackJsonpslim-mom"]=this["webpackJsonpslim-mom"]||[]).push([[6],{100:function(e,a,t){"use strict";var n=t(7),o=t(16),i=t(35),r=t(0);a.a=function(e,a){var t=Object(r.useState)(e),c=Object(i.a)(t,2),l=c[0],s=c[1];return[l,function(e){var a=e.target,t=a.type,i=a.name,r=a.value,c="radio"===t?a.dataset.radio:r;s((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(n.a)({},i,c))}))},function(t){t.preventDefault(),a(l),s(Object(o.a)({},e))}]}},101:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(99),o=t.n(n),i=t(1),r={primary:o.a.buttonPrimary,secondary:o.a.buttonSecondary},c=function(e){var a=e.className,t=e.text,n=e.onClick,c=e.variant,l=e.type,s=r[c];return Object(i.jsx)("button",{type:l,onClick:n,className:"".concat(o.a.button," ").concat(s," ").concat(a),children:t})},l=c;c.defaultProps={variant:"primary",className:"",type:"button",onClick:function(){}}},107:function(e,a,t){e.exports={container:"RadioField_container__1hTKn",visuallyHidden:"RadioField_visuallyHidden__K6ANJ",radioBox:"RadioField_radioBox__MubjG",radioLabel:"RadioField_radioLabel__1wJ0F",radioButton:"RadioField_radioButton__22-lM",customRadio:"RadioField_customRadio__2mxSh"}},108:function(e,a,t){e.exports={container:"RadioGroup_container__2PlHb",visuallyHidden:"RadioGroup_visuallyHidden__sQLyu",radioGroup:"RadioGroup_radioGroup__QEPX2",radioButtons:"RadioGroup_radioButtons__1EheF",label:"RadioGroup_label__bz-H4"}},120:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(16),o=t(96),i=t(0),r=function(){return Object(i.useRef)(Object(o.a)()).current},c=t(107),l=t.n(c),s=t(1),d=function(e){var a=e.onChange,t=e.label,n=e.name,o=e.required,i=e.dataRadio,c=r();return Object(s.jsxs)("div",{className:l.a.radioBox,children:[Object(s.jsx)("input",{name:n,id:c,type:"radio","data-radio":i,onChange:a,required:o&&o,className:"".concat(l.a.radioButton," ").concat(l.a.visuallyHidden)}),Object(s.jsxs)("label",{htmlFor:c,className:l.a.radioLabel,children:[Object(s.jsx)("span",{className:l.a.customRadio}),t&&t]})]})};d.defaultProps={onChange:function(){},required:!1};var u=d,b=t(108),_=t.n(b),j=function(e){var a=e.label,t=e.items.map((function(e){return Object(s.jsx)(u,Object(n.a)({},e),e.label)}));return Object(s.jsxs)("div",{className:_.a.radioGroup,children:[a&&Object(s.jsx)("label",{className:_.a.label,children:a}),Object(s.jsx)("div",{className:_.a.radioButtons,children:t})]})};j.defaultProps={items:[]};var m=j},213:function(e,a,t){e.exports={container:"MainPage_container__10BtP",visuallyHidden:"MainPage_visuallyHidden__2gImd",title:"MainPage_title__2-Ikf",main:"MainPage_main__3pAPV",form:"MainPage_form__2Mpkx",fields:"MainPage_fields__1fboo",field:"MainPage_field__3dtMg",button:"MainPage_button__1fNBU"}},214:function(e,a,t){e.exports={container:"Modal_container__1sC4E",visuallyHidden:"Modal_visuallyHidden__U0jRH",modalMainContainerOverlay:"Modal_modalMainContainerOverlay__ZgPgh",modalMainContainer:"Modal_modalMainContainer__2fhY3",mobileBackground:"Modal_mobileBackground__aX3tY",closeModalBtnMobile:"Modal_closeModalBtnMobile__3X7Ur",closeModalBtn:"Modal_closeModalBtn__1tbzQ"}},215:function(e,a,t){e.exports={container:"ModalInfo_container__1YUyj",visuallyHidden:"ModalInfo_visuallyHidden__3Iuyi",title:"ModalInfo_title__1Wq5y",button:"ModalInfo_button__3TpY1",caloriesText:"ModalInfo_caloriesText__3T44T",caloriesValue:"ModalInfo_caloriesValue__3VDhM",productsTitle:"ModalInfo_productsTitle__950Ad",productsList:"ModalInfo_productsList__1-9Xm",productsItem:"ModalInfo_productsItem__GsCOn"}},226:function(e,a,t){"use strict";t.r(a);var n=t(3),o=t.n(n),i=t(5),r=t(35),c=t(0),l=t(213),s=t.n(l),d=t(101),u=t(98),b=t(120),_=t(214),j=t.n(_),m=t(22),f=t(1),p=function(e){var a=e.onClose,t=e.children;Object(c.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[]);var n=function(e){"Escape"===e.code&&a()};return Object(m.createPortal)(Object(f.jsx)("div",{className:j.a.modalMainContainerOverlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(f.jsxs)("div",{className:j.a.modalMainContainer,children:[Object(f.jsx)("button",{className:j.a.closeModalBtn,onClick:a}),Object(f.jsx)("div",{className:j.a.mobileBackground,children:Object(f.jsx)("button",{className:j.a.closeModalBtnMobile,onClick:function(e){"BUTTON"===e.target.tagName&&a()}})}),Object(f.jsx)("div",{className:j.a.container,children:t})]})}),document.getElementById("modal"))};p.defaultProps={onClose:function(){}};var h=p,O=t(215),v=t.n(O),x=t(17),g=function(e){var a=e.products,t=e.calories;return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{className:v.a.title,children:"\u0412\u0430\u0448\u0430 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u0430\u044f \u0441\u0443\u0442\u043e\u0447\u043d\u0430\u044f \u043d\u043e\u0440\u043c\u0430 \u043a\u0430\u043b\u043e\u0440\u0438\u0439 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442"}),Object(f.jsxs)("div",{className:v.a.container,children:[Object(f.jsxs)("p",{className:v.a.caloriesText,children:[Object(f.jsx)("span",{className:v.a.caloriesValue,children:t})," \u043a\u043a\u0430\u043b"]}),Object(f.jsx)("h2",{className:v.a.productsTitle,children:" \u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0430\u043c \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0443\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0442\u044c"}),Object(f.jsx)("ol",{className:v.a.productsList,children:a.map((function(e){return Object(f.jsx)("li",{className:v.a.productsItem,children:e},e)}))}),Object(f.jsx)(x.b,{to:"/registration",className:v.a.button,children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0445\u0443\u0434\u0435\u0442\u044c"})]})]})},y=t(47),M=t(100),N={weight:"",height:"",age:"",desiredWeight:"",bloodType:null};a.default=function(){var e=Object(M.a)(N,(function(){})),a=Object(r.a)(e,3),t=a[0],n=a[1],l=a[2],_=Object(c.useState)(!1),j=Object(r.a)(_,2),m=j[0],p=j[1],O=Object(c.useState)([]),v=Object(r.a)(O,2),x=v[0],C=v[1],B=Object(c.useState)(null),P=Object(r.a)(B,2),R=P[0],H=P[1],I=function(){p(!m)},T="bloodType",k=[{onChange:n,name:T,label:"1",dataRadio:1,required:!0},{onChange:n,name:T,dataRadio:2,label:"2"},{onChange:n,name:T,dataRadio:3,label:"3"},{onChange:n,name:T,dataRadio:4,label:"4"}],w=function(){var e=Object(i.a)(o.a.mark((function e(a){var n,i,c,s,d,u,b,_;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=Object.entries(t),i=n.map((function(e){var a=Object(r.a)(e,2),t=a[0],n=a[1];return[t,Number(n)]})),e.next=5,Object.fromEntries(i);case 5:return c=e.sent,I(),e.prev=7,e.next=10,Object(y.a)(c);case 10:return s=e.sent,d=s.data,e.next=14,d;case 14:u=e.sent,b=u.dailyRate,_=u.notAllowedProducts,H(b),C(_.slice(0,4)),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(7),console.log(e.t0);case 24:a.target.reset(),l(a);case 26:case"end":return e.stop()}}),e,null,[[7,21]])})));return function(a){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:s.a.main,children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{className:s.a.title,children:"\u041f\u0440\u043e\u0441\u0447\u0438\u0442\u0430\u0439 \u0441\u0432\u043e\u044e \u0441\u0443\u0442\u043e\u0447\u043d\u0443\u044e \u043d\u043e\u0440\u043c\u0443 \u043a\u0430\u043b\u043e\u0440\u0438\u0439 \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441"}),m&&Object(f.jsx)(h,{onClose:I,children:Object(f.jsx)(g,{products:x,calories:R})}),Object(f.jsxs)("form",{onSubmit:w,className:s.a.form,children:[Object(f.jsxs)("div",{className:s.a.fields,children:[Object(f.jsx)("div",{className:s.a.field,children:Object(f.jsx)(u.a,{required:!0,label:"",name:"height",value:t.height,onChange:n,placeholder:"\u0420\u043e\u0441\u0442"})}),Object(f.jsx)("div",{className:s.a.field,children:Object(f.jsx)(u.a,{required:!0,label:"",value:t.age,name:"age",onChange:n,placeholder:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"})}),Object(f.jsx)("div",{className:s.a.field,children:Object(f.jsx)(u.a,{required:!0,label:"",value:t.weight,name:"weight",onChange:n,placeholder:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0432\u0435\u0441"})}),Object(f.jsx)("div",{className:s.a.field,children:Object(f.jsx)(u.a,{required:!0,label:"",value:t.desiredWeight,name:"desiredWeight",onChange:n,placeholder:"\u0416\u0435\u043b\u0430\u0435\u043c\u044b\u0439 \u0432\u0435\u0441"})}),Object(f.jsx)(b.a,{label:"\u0413\u0440\u0443\u043f\u043f\u0430 \u043a\u0440\u043e\u0432\u0438 *",items:k})]}),Object(f.jsx)(d.a,{text:"\u041f\u043e\u0445\u0443\u0434\u0435\u0442\u044c",className:s.a.button,type:"submit"})]})]})})}},96:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,a="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var n=63&t[e];a+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return a}},97:function(e,a,t){e.exports={container:"TextField_container__3jTzc",visuallyHidden:"TextField_visuallyHidden__2HKVH",formInput:"TextField_formInput__1n7-G"}},98:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(16),o=t(19),i=t(96),r=t(97),c=t.n(r),l=t(1),s=function(e){var a=e.label,t=Object(o.a)(e,["label"]),r=Object(i.a)();return t.required&&(t.placeholder+=" *"),Object(l.jsxs)("div",{className:c.a.formGroup,children:[a&&Object(l.jsx)("label",{htmlFor:r,children:a}),Object(l.jsx)("input",Object(n.a)(Object(n.a)({className:c.a.formInput},t),{},{id:r}))]})};s.defaultProps={required:!1,type:"text"};var d=s},99:function(e,a,t){e.exports={container:"Button_container__1xKJd",visuallyHidden:"Button_visuallyHidden__2neLE",button:"Button_button__3NJm6",buttonPrimary:"Button_buttonPrimary__1oM8A",buttonSecondary:"Button_buttonSecondary__3_xVy"}}}]);
//# sourceMappingURL=6.d3e3a17b.chunk.js.map