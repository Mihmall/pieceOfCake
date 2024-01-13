exports.id=113,exports.ids=[113],exports.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,s){return s in t?t[s]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,s)):"function"==typeof t&&"default"===s?t:void 0}}})},4990:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>x,w:()=>u});var r=s(997),l=s(6689),c=s(3627),n=s(5462),i=s(9583),d=s(6706),o=s(9648),h=e([d,o]);[d,o]=h.then?(await h)():h;let u=(0,l.createContext)({}),x=({children:e})=>{let{user:t}=(0,n.U)(),[s,a]=(0,l.useState)(!1),[h,x]=(0,l.useState)([]),[j,m]=(0,l.useState)([]);(0,l.useEffect)(()=>{let e=async()=>{try{let e=await o.default.get("http://localhost:3001/catalogCard"),t=await o.default.get("http://localhost:3001/ToCart");x(t.data),m(e.data)}catch(e){console.error("Error fetching data:",e)}};e()},[]);let v=async e=>{try{h.find(t=>Number(t.id)===Number(e.id))?(await o.default.delete(`http://localhost:3001/ToCart/${e.id}`),x(t=>t.filter(t=>Number(t.id)!==Number(e.id)))):(await o.default.post("http://localhost:3001/ToCart",e),x(t=>[...t,e]))}catch(e){console.log(e)}};return(0,r.jsxs)(r.Fragment,{children:[r.jsx(c.Z,{onClickCartBtn:()=>a(!0)}),(0,r.jsxs)(u.Provider,{value:{user:t,cartItem:h,cards:j,setCartItem:x,onAddToCart:v,onDeleteInCart:e=>{o.default.delete(`http://localhost:3001/ToCart/${e}`),x(e=>e.filter(e=>{e.id}))},setCartItem:x,isItemAdd:e=>h.some(t=>Number(t.id)===Number(e))},children:[s&&r.jsx(d.d,{items:h,onCloseCartBtn:()=>a(!1)}),e]}),r.jsx("button",{className:"btnCart floatBtn",onClick:()=>a(!0),children:r.jsx(i.g6F,{})})]})};a()}catch(e){a(e)}})},7866:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>d});var r=s(997),l=s(6689),c=s(9558),n=s(4990),i=e([n]);n=(i.then?(await i)():i)[0];let d=({id:e,name:t,type:s,image:a,cost:i,specification:d,composition:o,clickToCard:h})=>{let{isItemAdd:u}=(0,l.useContext)(n.w);return(0,r.jsxs)("div",{className:"card",id:{id:e},children:[r.jsx("img",{className:"cardImg",alt:{name:t},src:(0,c.c)({image:a})}),(0,r.jsxs)("div",{className:"cardInfo",children:[r.jsx("h2",{children:t}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{className:"cardItem",children:[i," руб./шт."]}),r.jsx("li",{className:"cardItem",children:d}),r.jsx("li",{className:"cardItem",children:o})]})]}),r.jsx("button",{className:"toCart",onClick:()=>{h(e,t,s,a,i,d,o)},children:u(e)?"Удалить из корзины":"Добавить в корзину"})]})};a()}catch(e){a(e)}})},7384:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>o});var r=s(997),l=s(6689),c=s(9558),n=s(9583),i=s(4990),d=e([i]);i=(d.then?(await d)():d)[0];let o=({id:e,name:t,image:s,cost:a})=>{let{onDeleteInCart:d}=(0,l.useContext)(i.w),[o,h]=(0,l.useState)(1);return(0,r.jsxs)("div",{className:"cardToCart",id:e,children:[r.jsx("img",{className:"cartImage",src:s||(0,c.c)(""),alt:""}),(0,r.jsxs)("div",{className:"cardInCart",children:[r.jsx("h3",{children:t}),(0,r.jsxs)("p",{children:["Цена:",a]}),(0,r.jsxs)("p",{children:["Общая стоймость:",a*o]}),(0,r.jsxs)("div",{className:"product-buttons",children:[r.jsx("button",{onClick:()=>{h(o-1)},disabled:1===o,children:"-"}),r.jsx("h3",{className:"product-count",children:o}),r.jsx("button",{className:"product-add",onClick:()=>{h(o+1)},children:"+"})]})]}),r.jsx("div",{className:"removeBtn",onClick:()=>d(e),children:r.jsx(n.aHS,{})})]})};a()}catch(e){a(e)}})},6706:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{d:()=>o});var r=s(997),l=s(6689),c=s(9583),n=s(7384),i=s(4990),d=e([n,i]);[n,i]=d.then?(await d)():d;let o=({onCloseCartBtn:e,items:t})=>{let{setCartItem:s,user:a}=(0,l.useContext)(i.w),[d,o]=(0,l.useState)(!1),h=()=>{o(!0),s([])};return r.jsx("div",{className:"drawerCartOut",children:(0,r.jsxs)("div",{className:"drawerCart",children:[(0,r.jsxs)("div",{className:"cartTop",children:[r.jsx("h3",{children:"Корзина"}),r.jsx("div",{className:"closeCartBtn",onClick:e,children:r.jsx(c.aHS,{})})]}),r.jsx("div",{children:t.map(e=>(0,l.createElement)(n.Z,{...e,key:e.id}))}),(0,r.jsxs)("div",{className:"cartBottom",children:[r.jsx("p",{className:"cartTotalCost",children:"Цена: 0руб."}),r.jsx("button",{className:"cartBtnOk",disabled:!a,onClick:()=>{h()},children:d?"Заказ оформлен":"Оформить заказ"})]})]})})};a()}catch(e){a(e)}})},3627:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var a=s(997),r=s(1664),l=s.n(r),c=s(6689),n=s(9583);let i=(e,t)=>{let s=s=>{t&&e.current&&!e.current.contains(s.target)&&t()};(0,c.useEffect)(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}))};var d=s(5462);let o=()=>{let e=(0,c.useRef)(null),[t,s]=(0,c.useState)(!1);i(e,()=>{t&&s(!1)});let{user:r,onLogout:o}=(0,d.U)();return(0,a.jsxs)(a.Fragment,{children:[a.jsx("button",{className:"regBtn",onClick:s,disabled:!!t,children:a.jsx(n.m3W,{})}),a.jsx("nav",{className:`regMenu ${t?"active":""}`,ref:e,children:a.jsx("ul",{className:"regMenuList",children:r?a.jsx("li",{className:"regMenuItem",children:(0,a.jsxs)("button",{onClick:o,children:[a.jsx(n.kUi,{}),"Выход"]})}):(0,a.jsxs)(a.Fragment,{children:[a.jsx("li",{className:"regMenuItem",children:(0,a.jsxs)(l(),{href:"/RegPage",onClick:()=>s(!t),children:[a.jsx(n.jJN,{}),"Регистрация"]})}),a.jsx("li",{className:"regMenuItem",children:(0,a.jsxs)(l(),{href:"/AuthenticationPage",onClick:()=>s(!t),children:[a.jsx(n.jcU,{}),"Вход"]})})]})})})]})},h=({onClickCartBtn:e})=>(0,a.jsxs)("header",{children:[(0,a.jsxs)("div",{className:"headerTop",children:[a.jsx("div",{className:"logoContainer",children:a.jsx("img",{className:"logoIcon",src:"/image/b9fv_cb9z_221114.svg",alt:"Logo"})}),(0,a.jsxs)("div",{className:"infoContainer",children:[a.jsx("p",{children:"Время работы: Пн-Пт: 09:00-18:00"}),a.jsx("p",{children:"Тел: +7 (999)999-99-99"})]}),a.jsx("div",{children:a.jsx("button",{className:"btnCart",onClick:e,children:a.jsx(n.g6F,{})})}),a.jsx("div",{className:"authentication",children:a.jsx(o,{})})]}),a.jsx("div",{className:"navContainer",children:(0,a.jsxs)("ul",{className:"navCont",children:[a.jsx("li",{children:a.jsx(l(),{href:"/",children:"Home"})}),a.jsx("li",{children:a.jsx(l(),{href:"/Cake",children:"Торты"})}),a.jsx("li",{children:a.jsx(l(),{href:"/SmallCake",children:"Пирожные"})}),a.jsx("li",{children:a.jsx(l(),{href:"/Macaron",children:"Макаруны"})}),a.jsx("li",{children:a.jsx(l(),{href:"/AboutUs",children:"О нас"})})]})})]})},5462:(e,t,s)=>{"use strict";s.d(t,{T:()=>c,U:()=>n});var a=s(997),r=s(6689);let l=(0,r.createContext)(),c=({children:e})=>{let[t,s]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let e=localStorage.getItem("user");e&&s(JSON.parse(e))},[]),a.jsx(l.Provider,{value:{user:t,onLogin:e=>{s(e),localStorage.setItem("user",JSON.stringify(e))},onLogout:()=>{s(null),localStorage.removeItem("user")}},children:e})},n=()=>{let e=(0,r.useContext)(l);if(!e)throw Error("Ошибка");return e}},9558:(e,t,s)=>{"use strict";s.d(t,{c:()=>a});let a=({image:e})=>""===e||null==e?"/image/b9fv_cb9z_221114.svg":e},2257:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{default:()=>i});var r=s(997);s(6689),s(3868);var l=s(4990),c=s(5462),n=e([l]);l=(n.then?(await n)():n)[0];let i=({Component:e,pageProps:t})=>r.jsx(c.T,{children:r.jsx(l.Z,{children:r.jsx(e,{...t})})});a()}catch(e){a(e)}})},3868:()=>{},5244:(e,t)=>{"use strict";var s;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return s}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(s||(s={}))}};