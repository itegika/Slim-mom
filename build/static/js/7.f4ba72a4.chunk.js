(this["webpackJsonpslim-mom"]=this["webpackJsonpslim-mom"]||[]).push([[7],{100:function(t,e,a){"use strict";var n=a(7),r=a(16),o=a(35),i=a(0);e.a=function(t,e){var a=Object(i.useState)(t),c=Object(o.a)(a,2),s=c[0],u=c[1];return[s,function(t){var e=t.target,a=e.type,o=e.name,i=e.value,c="radio"===a?e.dataset.radio:i;u((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(n.a)({},o,c))}))},function(a){a.preventDefault(),e(s),u(Object(r.a)({},t))}]}},101:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(99),r=a.n(n),o=a(1),i={primary:r.a.buttonPrimary,secondary:r.a.buttonSecondary},c=function(t){var e=t.className,a=t.text,n=t.onClick,c=t.variant,s=t.type,u=i[c];return Object(o.jsx)("button",{type:s,onClick:n,className:"".concat(r.a.button," ").concat(u," ").concat(e),children:a})},s=c;c.defaultProps={variant:"primary",className:"",type:"button",onClick:function(){}}},119:function(t,e,a){"use strict";e.a={name:{name:"username",placeholder:"\u0418\u043c\u044f",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0},email:{name:"email",placeholder:"\u041b\u043e\u0433\u0438\u043d",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 user@example.com, \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043b\u043e\u0433\u0438\u043d\u0430",required:!0},password:{name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",required:!0}}},212:function(t,e,a){t.exports={container:"LoginForm_container__3CdV_",visuallyHidden:"LoginForm_visuallyHidden__Dwpg-",main:"LoginForm_main__33-vl",title:"LoginForm_title__qcTzm",btnBox:"LoginForm_btnBox__TQdiA",regBtn:"LoginForm_regBtn__1USNt",form:"LoginForm_form__2uxtK"}},227:function(t,e,a){"use strict";a.r(e);var n=a(16),r=a(35),o=a(18),i=a(14),c=a(17),s=a(98),u=a(100),l=a(101),d=a(119),m=a(212),b=a.n(m),_=a(1),p={email:"",password:""},j=function(){var t=Object(o.b)(),e=Object(u.a)(p,(function(e){t(i.a.logIn(e))})),a=Object(r.a)(e,3),m=a[0],j=a[1],f=a[2];return Object(_.jsxs)("div",{className:"".concat(b.a.main," container"),children:[Object(_.jsx)("h1",{className:b.a.title,children:"\u0412\u0425\u041e\u0414"}),Object(_.jsxs)("form",{onSubmit:f,className:b.a.form,autoComplete:"off",children:[Object(_.jsx)(s.a,Object(n.a)(Object(n.a)({},d.a.email),{},{onChange:j,name:"email",required:!0,placeholder:"\u041b\u043e\u0433\u0438\u043d",value:m.email})),Object(_.jsx)(s.a,Object(n.a)(Object(n.a)({},d.a.password),{},{onChange:j,name:"password",required:!0,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:m.password})),Object(_.jsxs)("div",{className:b.a.btnBox,children:[Object(_.jsx)(l.a,{className:"".concat(b.a.button," ").concat(b.a.buttonPrimary," ").concat(b.a.regBtn),text:"\u0412\u0445\u043e\u0434",type:"submit",variant:"primary"}),Object(_.jsx)(c.b,{to:"/registration"})]})]})]})};e.default=function(){return Object(_.jsx)(j,{})}},96:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",a=crypto.getRandomValues(new Uint8Array(t));t--;){var n=63&a[t];e+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return e}},97:function(t,e,a){t.exports={container:"TextField_container__3jTzc",visuallyHidden:"TextField_visuallyHidden__2HKVH",formInput:"TextField_formInput__1n7-G"}},98:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=a(16),r=a(19),o=a(96),i=a(97),c=a.n(i),s=a(1),u=function(t){var e=t.label,a=Object(r.a)(t,["label"]),i=Object(o.a)();return a.required&&(a.placeholder+=" *"),Object(s.jsxs)("div",{className:c.a.formGroup,children:[e&&Object(s.jsx)("label",{htmlFor:i,children:e}),Object(s.jsx)("input",Object(n.a)(Object(n.a)({className:c.a.formInput},a),{},{id:i}))]})};u.defaultProps={required:!1,type:"text"};var l=u},99:function(t,e,a){t.exports={container:"Button_container__1xKJd",visuallyHidden:"Button_visuallyHidden__2neLE",button:"Button_button__3NJm6",buttonPrimary:"Button_buttonPrimary__1oM8A",buttonSecondary:"Button_buttonSecondary__3_xVy"}}}]);
//# sourceMappingURL=7.f4ba72a4.chunk.js.map