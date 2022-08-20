import{l as t}from"./chunks/preact.module.f099146f.js";var H,s,h,p,m=0,C=[],f=[],y=t.__b,b=t.__r,w=t.diffed,x=t.__c,k=t.unmount;function $(e,n){t.__h&&t.__h(s,e,m||n),m=0;var r=s.__H||(s.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({__V:f}),r.__[e]}function j(e){return m=1,A(M,e)}function A(e,n,r){var i=$(H++,2);return i.t=e,i.__c||(i.__=[r?r(n):M(void 0,n),function(c){var a=i.t(i.__[0],c);i.__[0]!==a&&(i.__=[a,i.__[1]],i.__c.setState({}))}],i.__c=s),i.__}function q(){for(var e;e=C.shift();)if(e.__P)try{e.__H.__h.forEach(d),e.__H.__h.forEach(g),e.__H.__h=[]}catch(n){e.__H.__h=[],t.__e(n,e.__v)}}t.__b=function(e){s=null,y&&y(e)},t.__r=function(e){b&&b(e),H=0;var n=(s=e.__c).__H;n&&(h===s?(n.__h=[],s.__h=[],n.__.forEach(function(r){r.__V=f,r.u=void 0})):(n.__h.forEach(d),n.__h.forEach(g),n.__h=[])),h=s},t.diffed=function(e){w&&w(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(C.push(n)!==1&&p===t.requestAnimationFrame||((p=t.requestAnimationFrame)||function(r){var i,c=function(){clearTimeout(a),N&&cancelAnimationFrame(i),setTimeout(r)},a=setTimeout(c,100);N&&(i=requestAnimationFrame(c))})(q)),n.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.__V!==f&&(r.__=r.__V),r.u=void 0,r.__V=f})),h=s=null},t.__c=function(e,n){n.some(function(r){try{r.__h.forEach(d),r.__h=r.__h.filter(function(i){return!i.__||g(i)})}catch(i){n.some(function(c){c.__h&&(c.__h=[])}),n=[],t.__e(i,r.__v)}}),x&&x(e,n)},t.unmount=function(e){k&&k(e);var n,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(i){try{d(i)}catch(c){n=c}}),n&&t.__e(n,r.__v))};var N=typeof requestAnimationFrame=="function";function d(e){var n=s,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),s=n}function g(e){var n=s;e.__c=e.__(),s=n}function M(e,n){return typeof n=="function"?n(e):n}const E="/assets/logo.c1da8cfa.svg",u="https://parassolanki.github.io/mahalaxami-foundry";var F=0;function o(e,n,r,i,c){var a,l,_={};for(l in n)l=="ref"?a=n[l]:_[l]=n[l];var v={type:e,props:_,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--F,__source:c,__self:i};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)_[l]===void 0&&(_[l]=a[l]);return t.vnode&&t.vnode(v),v}const L=[{name:"Home",href:`${u}/`},{name:"About us",href:`${u}/about-us`},{name:"Products",childern:[{name:"Pillar / Driling Machine Column",href:`${u}/pillar`},{name:"Coupling / Rolling Mill Coupling Machine Column",href:`${u}/coupling`}]},{name:"Contact",href:`${u}/contact`},{name:"Enquiry",href:`${u}/enquiry`}],V=()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:o("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})}),B=({link:e})=>o("li",{className:"dropdown",children:[o("label",{tabindex:"0",className:"0 inline-flex cursor-pointer items-center rounded text-base font-medium  text-gray-700 hover:text-sky-400 focus:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white",children:[e.name,o("span",{className:"ml-1.5",children:o(V,{})})]}),o("ul",{tabindex:"0",className:"dropdown-content menu mt-5 w-64 rounded-md bg-white p-2 shadow",children:e.childern.map(n=>o("li",{children:o("a",{className:"text-sm focus:bg-sky-400 focus:text-white",href:n.href,title:n.name,children:n.name})}))})]});function P(){const[e,n]=j(!1);return o("div",{className:"relative",children:[o("button",{type:"button",className:"inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",onClick:()=>{document.body.classList.add("overflow-hidden"),n(!0)},children:[o("span",{class:"sr-only",children:"Open main menu"}),o("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:o("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16m-7 6h7"})})]}),e&&o("div",{class:"fixed inset-x-0 top-0 z-50 h-full w-full origin-top-right transform bg-black/50 p-2 backdrop-blur-sm transition md:hidden",children:o("div",{class:"overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5",children:[o("div",{class:"flex items-center justify-between px-5 pt-4",children:[o("a",{href:"/",className:"rounded focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white",children:o("div",{className:"w-36",children:o("img",{src:E,alt:"logo",className:"h-full w-full"})})}),o("div",{class:"-mr-2",children:o("button",{type:"button",class:"inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",onClick:()=>{document.body.classList.remove("overflow-hidden"),n(!1)},children:[o("span",{class:"sr-only",children:"Close main menu"}),o("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true",children:o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})})]})})]}),o("ul",{class:"space-y-1 px-2 pt-2 pb-3",children:L.map(r=>o("li",{children:o("a",{href:r.href,class:"block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",children:r.name})}))})]})})]})}function O(){return o("header",{className:"navbar h-24",children:o("div",{className:"container mx-auto ",children:[o("div",{className:"navbar-start",children:o("a",{href:"/",className:"rounded focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white",children:o("div",{className:"w-36",children:o("img",{src:E,alt:"logo",className:"h-full w-full"})})})}),o("div",{className:"navbar-end flex justify-end",children:[o("div",{className:"block md:hidden",children:o(P,{})}),o("nav",{className:"hidden md:block",children:o("ul",{className:"hidden items-center space-x-6 md:flex",children:L.map(e=>e?.childern?o(B,{link:e}):o("li",{children:o("a",{className:"rounded text-base font-medium text-gray-700 hover:text-sky-400 focus:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white",href:e.href,title:e.name,children:e.name})}))})})]})]})})}export{O as default};