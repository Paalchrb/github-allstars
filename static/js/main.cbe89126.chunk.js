(this["webpackJsonpknowit-evaluation"]=this["webpackJsonpknowit-evaluation"]||[]).push([[0],{31:function(e,a,t){e.exports=t(42)},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(13),c=t.n(l),o=t(11),s=t.n(o),i=t(20),m=t(14),u=t(28),g=function(){var e=Object(m.a)(s.a.mark((function e(){var a,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://api.github.com/search/repositories","?q=language:javascript&sort=stars&order=desc&per_page=100"));case 3:return a=e.sent,e.next=6,a.json();case 6:return t=e.sent,e.abrupt("return",{repos:t.items,error:null});case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{repos:null,error:{msg:e.t0.message}});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),p=t(55),h=t(57),d=t(58),E=t(59),f=Object(p.a)({name:{width:"25%"},language:{width:"16.3%"},stars:{width:"9%"},forks:{width:"9%"},checkout:{width:"45%"}}),b=function(){var e=f();return n.a.createElement(r.Fragment,null,Array.from(new Array(20)).map((function(a,t){return n.a.createElement(h.a,{key:t},n.a.createElement(d.a,{className:e.name},n.a.createElement(E.a,{variant:"text",width:"83%"})),n.a.createElement(d.a,{className:e.language},n.a.createElement(E.a,{variant:"text",width:"83%"})),n.a.createElement(d.a,{className:e.stars},n.a.createElement(E.a,{variant:"text",width:"83%"})),n.a.createElement(d.a,{className:e.forks},n.a.createElement(E.a,{variant:"text",width:"83%"})),n.a.createElement(d.a,{className:e.checkout},n.a.createElement(E.a,{variant:"text",width:"83%"})))})))},w=Object(p.a)({table:{minWidth:650},tbody:{background:"rgb(222, 222, 222)"},tHeadCell:{color:"rgb(233, 233, 233)",fontSize:"1.3rem",background:"rgb(66, 66, 66)"},tBodyCell:{fontSize:"1.2rem"}}),v=t(66),k=function(e){var a=e.repos,t=w();return n.a.createElement(r.Fragment,null,a.map((function(e){return n.a.createElement(h.a,{key:e.id},n.a.createElement(d.a,{className:t.tBodyCell},e.name),n.a.createElement(d.a,{className:t.tBodyCell},e.language),n.a.createElement(d.a,{className:t.tBodyCell,align:"right"},e.stargazers_count),n.a.createElement(d.a,{className:t.tBodyCell,align:"right"},e.forks_count),n.a.createElement(d.a,{className:t.tBodyCell},n.a.createElement(v.a,{href:e.html_url,target:"_blank"},e.html_url)))})))},N=[{label:"Name",width:330},{label:"Language",width:200},{label:"Stars",width:100,align:"right"},{label:"Forks",width:100,align:"right"},{label:"Checkout"}],y=t(61),C=function(){var e=w();return n.a.createElement(y.a,null,n.a.createElement(h.a,{className:e.thead},N.map((function(a,t){return n.a.createElement(d.a,{key:t,align:a.align,style:{width:a.width},className:e.tHeadCell},a.label)}))))},x=t(62),j=t(63),P=function(e){var a=e.repos,t=e.loading,r=w();return n.a.createElement("section",{className:"table-container"},n.a.createElement(x.a,{stickyHeader:!0,"aria-label":"sticky table",className:r.table},n.a.createElement(C,null),n.a.createElement(j.a,{className:r.tbody},t?n.a.createElement(b,null):n.a.createElement(k,{repos:a}))))},O=t(64),B=t(65),_=t(60),F=function(e){var a=e.handlePageChange,t=e.currentPage,r=e.perPage;return n.a.createElement("footer",{className:"pagination-container"},t>0&&n.a.createElement(O.a,{className:"page-arrow back",onClick:function(){return a(-1)}}),n.a.createElement(_.a,{variant:"h6",component:"p",className:"pagination-text"},"showing repos  ",t*r+1||1,"  -  ",(t+1)*r,"  of 100"),t<4&&n.a.createElement(B.a,{className:"page-arrow forward",onClick:function(){return a(1)}}))},S=function(){var e=Object(r.useState)({repos:[],page:0,reposPrPage:20,error:null,loading:!0}),a=Object(u.a)(e,2),t=a[0],l=a[1];Object(r.useEffect)((function(){Object(m.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:a=e.sent,l((function(e){return Object(i.a)({},e,{repos:a.repos,error:a.error,loading:!1})}));case 4:case"end":return e.stop()}}),e)})))()}),[]);var c=t.repos,o=t.page,p=t.reposPrPage,h=t.loading,d=t.error,E=c.slice(o*p,(o+1)*p);return n.a.createElement(r.Fragment,null,n.a.createElement(_.a,{variant:"h1",component:"h1",id:"main-heading"},"GitHub Allstars"),d?n.a.createElement(_.a,{variant:"h2",component:"h2"},"Something went wrong. Please try again later..."):n.a.createElement(r.Fragment,null,n.a.createElement(P,{repos:E,loading:h}),n.a.createElement(F,{handlePageChange:function(e){l(Object(i.a)({},t,{page:t.page+e}))},currentPage:o,perPage:p})))};t(41);c.a.render(n.a.createElement(S,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.cbe89126.chunk.js.map