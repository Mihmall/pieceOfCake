(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},5263:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>x,default:()=>f,getServerSideProps:()=>m,getStaticPaths:()=>p,getStaticProps:()=>h,reportWebVitals:()=>g,routeModule:()=>C,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>P,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>j});var a=r(7093),l=r(5244),s=r(1323),i=r(9209),o=r.n(i),c=r(2257),d=r(6908),u=e([c]);c=(u.then?(await u)():u)[0];let f=(0,s.l)(d,"default"),h=(0,s.l)(d,"getStaticProps"),p=(0,s.l)(d,"getStaticPaths"),m=(0,s.l)(d,"getServerSideProps"),x=(0,s.l)(d,"config"),g=(0,s.l)(d,"reportWebVitals"),j=(0,s.l)(d,"unstable_getStaticProps"),v=(0,s.l)(d,"unstable_getStaticPaths"),b=(0,s.l)(d,"unstable_getStaticParams"),y=(0,s.l)(d,"unstable_getServerProps"),P=(0,s.l)(d,"unstable_getServerSideProps"),C=new a.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:c.default,Document:o()},userland:d});n()}catch(e){n(e)}})},6908:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return Error}});let n=r(167),a=n._(r(6689)),l=n._(r(9201)),s={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function i(e){let{res:t,err:r}=e,n=t&&t.statusCode?t.statusCode:r?r.statusCode:404;return{statusCode:n}}let o={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class Error extends a.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||s[e]||"An unexpected error has occurred";return a.default.createElement("div",{style:o.error},a.default.createElement(l.default,null,a.default.createElement("title",null,e?e+": "+r:"Application error: a client-side exception has occurred")),a.default.createElement("div",{style:o.desc},a.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?a.default.createElement("h1",{className:"next-error-h1",style:o.h1},e):null,a.default.createElement("div",{style:o.wrap},a.default.createElement("h2",{style:o.h2},this.props.title||e?r:a.default.createElement(a.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}Error.displayName="ErrorPage",Error.getInitialProps=i,Error.origGetInitialProps=i,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7543:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},9201:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return d},default:function(){return p}});let n=r(167),a=r(8760),l=a._(r(6689)),s=n._(r(8955)),i=r(8039),o=r(1988),c=r(7543);function d(e){void 0===e&&(e=!1);let t=[l.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(l.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(1905);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(u,[]).reverse().concat(d(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return a=>{let l=!0,s=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){s=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?l=!1:t.add(a.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?l=!1:r.add(t);else{let e=a.props[t],r=n[t]||new Set;("name"!==t||!s)&&r.has(e)?l=!1:(r.add(e),n[t]=r)}}}}return l}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:n})})}let p=function(e){let{children:t}=e,r=(0,l.useContext)(i.AmpStateContext),n=(0,l.useContext)(o.HeadManagerContext);return l.default.createElement(s.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,c.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8955:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(6689),a=()=>{},l=()=>{};function s(e){var t;let{headManager:r,reduceComponentsToState:s}=e;function i(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(s(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),i(),a(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),a(()=>(r&&(r._pendingUpdate=i),()=>{r&&(r._pendingUpdate=i)})),l(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1905:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},4990:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{Z:()=>h,w:()=>f});var a=r(997),l=r(6689),s=r(3627),i=r(5462),o=r(9583),c=r(6706),d=r(9648),u=e([c,d]);[c,d]=u.then?(await u)():u;let f=(0,l.createContext)({}),h=({children:e})=>{let{user:t}=(0,i.U)(),[r,n]=(0,l.useState)(!1),[u,h]=(0,l.useState)([]),[p,m]=(0,l.useState)([]);(0,l.useEffect)(()=>{let e=async()=>{try{let e=await d.default.get("http://localhost:3001/catalogCard"),t=await d.default.get("http://localhost:3001/ToCart");h(t.data),m(e.data)}catch(e){console.error("Error fetching data:",e)}};e()},[]);let x=async e=>{try{u.find(t=>Number(t.id)===Number(e.id))?(await d.default.delete(`http://localhost:3001/ToCart/${e.id}`),h(t=>t.filter(t=>Number(t.id)!==Number(e.id)))):(await d.default.post("http://localhost:3001/ToCart",e),h(t=>[...t,e]))}catch(e){console.log(e)}};return(0,a.jsxs)(a.Fragment,{children:[a.jsx(s.Z,{onClickCartBtn:()=>n(!0)}),(0,a.jsxs)(f.Provider,{value:{user:t,cartItem:u,cards:p,setCartItem:h,onAddToCart:x,onDeleteInCart:e=>{d.default.delete(`http://localhost:3001/ToCart/${e}`),h(e=>e.filter(e=>{e.id}))},setCartItem:h,isItemAdd:e=>u.some(t=>Number(t.id)===Number(e))},children:[r&&a.jsx(c.d,{items:u,onCloseCartBtn:()=>n(!1)}),e]}),a.jsx("button",{className:"btnCart floatBtn",onClick:()=>n(!0),children:a.jsx(o.g6F,{})})]})};n()}catch(e){n(e)}})},7384:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{Z:()=>d});var a=r(997),l=r(6689),s=r(9558),i=r(9583),o=r(4990),c=e([o]);o=(c.then?(await c)():c)[0];let d=({id:e,name:t,image:r,cost:n})=>{let{onDeleteInCart:c}=(0,l.useContext)(o.w),[d,u]=(0,l.useState)(1);return(0,a.jsxs)("div",{className:"cardToCart",id:e,children:[a.jsx("img",{className:"cartImage",src:r||(0,s.c)(""),alt:""}),(0,a.jsxs)("div",{className:"cardInCart",children:[a.jsx("h3",{children:t}),(0,a.jsxs)("p",{children:["Цена:",n]}),(0,a.jsxs)("p",{children:["Общая стоймость:",n*d]}),(0,a.jsxs)("div",{className:"product-buttons",children:[a.jsx("button",{onClick:()=>{u(d-1)},disabled:1===d,children:"-"}),a.jsx("h3",{className:"product-count",children:d}),a.jsx("button",{className:"product-add",onClick:()=>{u(d+1)},children:"+"})]})]}),a.jsx("div",{className:"removeBtn",onClick:()=>c(e),children:a.jsx(i.aHS,{})})]})};n()}catch(e){n(e)}})},6706:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{d:()=>d});var a=r(997),l=r(6689),s=r(9583),i=r(7384),o=r(4990),c=e([i,o]);[i,o]=c.then?(await c)():c;let d=({onCloseCartBtn:e,items:t})=>{let{setCartItem:r,user:n}=(0,l.useContext)(o.w),[c,d]=(0,l.useState)(!1),u=()=>{d(!0),r([])};return a.jsx("div",{className:"drawerCartOut",children:(0,a.jsxs)("div",{className:"drawerCart",children:[(0,a.jsxs)("div",{className:"cartTop",children:[a.jsx("h3",{children:"Корзина"}),a.jsx("div",{className:"closeCartBtn",onClick:e,children:a.jsx(s.aHS,{})})]}),a.jsx("div",{children:t.map(e=>(0,l.createElement)(i.Z,{...e,key:e.id}))}),(0,a.jsxs)("div",{className:"cartBottom",children:[a.jsx("p",{className:"cartTotalCost",children:"Цена: 0руб."}),a.jsx("button",{className:"cartBtnOk",disabled:!n,onClick:()=>{u()},children:c?"Заказ оформлен":"Оформить заказ"})]})]})})};n()}catch(e){n(e)}})},3627:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(997),a=r(1664),l=r.n(a),s=r(6689),i=r(9583);let o=(e,t)=>{let r=r=>{t&&e.current&&!e.current.contains(r.target)&&t()};(0,s.useEffect)(()=>(document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}))};var c=r(5462);let d=()=>{let e=(0,s.useRef)(null),[t,r]=(0,s.useState)(!1);o(e,()=>{t&&r(!1)});let{user:a,onLogout:d}=(0,c.U)();return(0,n.jsxs)(n.Fragment,{children:[n.jsx("button",{className:"regBtn",onClick:r,disabled:!!t,children:n.jsx(i.m3W,{})}),n.jsx("nav",{className:`regMenu ${t?"active":""}`,ref:e,children:n.jsx("ul",{className:"regMenuList",children:a?n.jsx("li",{className:"regMenuItem",children:(0,n.jsxs)("button",{onClick:d,children:[n.jsx(i.kUi,{}),"Выход"]})}):(0,n.jsxs)(n.Fragment,{children:[n.jsx("li",{className:"regMenuItem",children:(0,n.jsxs)(l(),{href:"/RegPage",onClick:()=>r(!t),children:[n.jsx(i.jJN,{}),"Регистрация"]})}),n.jsx("li",{className:"regMenuItem",children:(0,n.jsxs)(l(),{href:"/AuthenticationPage",onClick:()=>r(!t),children:[n.jsx(i.jcU,{}),"Вход"]})})]})})})]})},u=({onClickCartBtn:e})=>(0,n.jsxs)("header",{children:[(0,n.jsxs)("div",{className:"headerTop",children:[n.jsx("div",{className:"logoContainer",children:n.jsx("img",{className:"logoIcon",src:"/image/b9fv_cb9z_221114.svg",alt:"Logo"})}),(0,n.jsxs)("div",{className:"infoContainer",children:[n.jsx("p",{children:"Время работы: Пн-Пт: 09:00-18:00"}),n.jsx("p",{children:"Тел: +7 (999)999-99-99"})]}),n.jsx("div",{children:n.jsx("button",{className:"btnCart",onClick:e,children:n.jsx(i.g6F,{})})}),n.jsx("div",{className:"authentication",children:n.jsx(d,{})})]}),n.jsx("div",{className:"navContainer",children:(0,n.jsxs)("ul",{className:"navCont",children:[n.jsx("li",{children:n.jsx(l(),{href:"/",children:"Home"})}),n.jsx("li",{children:n.jsx(l(),{href:"/Cake",children:"Торты"})}),n.jsx("li",{children:n.jsx(l(),{href:"/SmallCake",children:"Пирожные"})}),n.jsx("li",{children:n.jsx(l(),{href:"/Macaron",children:"Макаруны"})}),n.jsx("li",{children:n.jsx(l(),{href:"/AboutUs",children:"О нас"})})]})})]})},5462:(e,t,r)=>{"use strict";r.d(t,{T:()=>s,U:()=>i});var n=r(997),a=r(6689);let l=(0,a.createContext)(),s=({children:e})=>{let[t,r]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let e=localStorage.getItem("user");e&&r(JSON.parse(e))},[]),n.jsx(l.Provider,{value:{user:t,onLogin:e=>{r(e),localStorage.setItem("user",JSON.stringify(e))},onLogout:()=>{r(null),localStorage.removeItem("user")}},children:e})},i=()=>{let e=(0,a.useContext)(l);if(!e)throw Error("Ошибка");return e}},9558:(e,t,r)=>{"use strict";r.d(t,{c:()=>n});let n=({image:e})=>""===e||null==e?"/image/b9fv_cb9z_221114.svg":e},2257:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>o});var a=r(997);r(6689),r(3868);var l=r(4990),s=r(5462),i=e([l]);l=(i.then?(await i)():i)[0];let o=({Component:e,pageProps:t})=>a.jsx(s.T,{children:a.jsx(l.Z,{children:a.jsx(e,{...t})})});n()}catch(e){n(e)}})},3868:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},1988:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.HeadManagerContext},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},9648:e=>{"use strict";e.exports=import("axios")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[209,445,994],()=>r(5263));module.exports=n})();