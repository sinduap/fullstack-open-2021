(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(22),a=n.n(c),u=n(5),s=n.n(u),o=n(10),i=n(13),b=n(12),l=n(3),j=n(6),f=n.n(j),d="api/persons",m=function(e){return f.a.post(d,e)},h=function(e,t){return f.a.patch("".concat(d,"/").concat(e),t)},x=function(e){return f.a.delete("".concat(d,"/").concat(e))},p=n(0),O=function(e){var t=e.onSubmit,n=e.name,r=e.number,c=e.onNumberChange,a=e.onNameChange;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(p.jsxs)("div",{children:["name:",Object(p.jsx)("input",{name:"name",value:n,onChange:a,required:!0})]}),Object(p.jsxs)("div",{children:["number:",Object(p.jsx)("input",{name:"number",value:r,onChange:c,required:!0})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"submit",children:"add"})})]})},v=function(e){var t=e.text,n=e.onDelete;return Object(p.jsx)("button",{type:"button",onClick:n,children:t})},w=function(e){var t=e.filteredPersons,n=e.onDelete;return Object(p.jsx)("div",{children:t.map((function(e,t){var r=e.name,c=e.number,a=e.id;return Object(p.jsxs)("div",{children:[r," ",c,Object(p.jsx)(v,{text:"delete",onDelete:function(){return n(a,r)}})]},t)}))})},g=function(e){var t=e.onSearchChange;return Object(p.jsxs)("div",{children:["Filter shown with:",Object(p.jsx)("input",{type:"search",name:"filter",onChange:t})]})},k=(n(47),function(e){var t=e.message;return null===t?null:Object(p.jsx)("div",{className:t.success?"success":"fail",children:t.text})}),C=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),u=Object(l.a)(a,2),j=u[0],v=u[1],C=Object(r.useState)(""),y=Object(l.a)(C,2),S=y[0],D=y[1],N=Object(r.useState)(""),P=Object(l.a)(N,2),T=P[0],L=P[1],A=Object(r.useState)(null),E=Object(l.a)(A,2),q=E[0],J=E[1],B=function(){var e=Object(b.a)(s.a.mark((function e(t){var r,a,u,b,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),v(""),D(""),!(r=n.find((function(e){return e.name.toLowerCase()===j.toLowerCase().trim()})))){e.next=22;break}if(window.confirm("Are you want to update ".concat(r.name," contact?"))){e.next=8;break}return e.abrupt("return");case 8:return r=Object(i.a)(Object(i.a)({},r),{},{number:S.trim()}),e.prev=9,e.next=12,h(r.id,r);case 12:a=e.sent,u=a.data,c(Object(o.a)(n.map((function(e){return e.id===r.id?u:e})))),J({success:!0,text:"Person has been succesfully updated"}),setTimeout((function(){return J(null)}),2e3),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(9),J({success:!1,text:e.t0.response.data.error});case 22:if(r){e.next=37;break}return r={name:j.trim(),number:S.trim()},e.prev=24,e.next=27,m(r);case 27:b=e.sent,l=b.data,c([].concat(Object(o.a)(n),[l])),J({success:!0,text:"Person has been succesfully added"}),setTimeout((function(){return J(null)}),2e3),e.next=37;break;case 34:e.prev=34,e.t1=e.catch(24),J({success:!1,text:e.t1.response.data.error});case 37:case"end":return e.stop()}}),e,null,[[9,19],[24,34]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(s.a.mark((function e(t,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Are you want to delete ".concat(r," contact?"))){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,x(t);case 6:c(Object(o.a)(n.filter((function(e){return e.id!==t})))),J({success:!0,text:"Deleted successfully"}),setTimeout((function(){return J(null)}),2e3),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),J({success:!1,text:e.t0.response.data.error});case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t,n){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){f.a.get(d).then((function(e){return e.data})).then((function(e){return c(e)}))}),[]),Object(r.useEffect)((function(){if(q){var e=setTimeout((function(){J(null)}),2e3);return function(){e&&clearTimeout(e)}}}),[q]);var I=n.filter((function(e){return e.name.toLowerCase().includes(T.toLowerCase().trim())}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Phonebook"}),Object(p.jsx)(k,{message:q}),Object(p.jsx)(g,{onSearchChange:function(e){L(e.target.value)}}),Object(p.jsx)("h3",{children:"Add a new contact"}),Object(p.jsx)(O,{name:j,number:S,onNumberChange:function(e){D(e.target.value)},onNameChange:function(e){v(e.target.value)},onSubmit:B}),Object(p.jsx)("h3",{children:"Numbers"}),Object(p.jsx)(w,{filteredPersons:I,onDelete:F})]})};a.a.render(Object(p.jsx)(C,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.2e8a0ca4.chunk.js.map