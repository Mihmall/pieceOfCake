(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[997],{6701:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/AuthenticationPage",function(){return a(8549)}])},8549:function(e,s,a){"use strict";a.r(s);var l=a(5893),n=a(7294),t=a(1163),i=a(5462);s.default=()=>{let[e,s]=(0,n.useState)({email:"",password:""}),{onLogin:a}=(0,i.U)(),r=(0,t.useRouter)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"regContainer",children:(0,l.jsxs)("form",{action:"#",onSubmit:l=>{l.preventDefault(),e.email&&e.password?(a(e),r.push("/RegPage"),s({email:"",password:""})):console.log("Please fill in all fields")},children:[(0,l.jsxs)("div",{className:"inputCont",children:[(0,l.jsx)("label",{htmlFor:"email",children:"Email"}),(0,l.jsx)("input",{type:"email",className:"regInput",placeholder:"Введите Email",value:e.email,onChange:a=>s({...e,email:a.target.value})})]}),(0,l.jsxs)("div",{className:"inputCont",children:[(0,l.jsx)("label",{htmlFor:"password",children:"Пароль"}),(0,l.jsx)("input",{type:"password",className:"regInput",placeholder:"Введите пароль",value:e.password,onChange:a=>s({...e,password:a.target.value})})]}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{type:"submit",className:"regSubmit",children:"Отправить"})})]})})})}},1163:function(e,s,a){e.exports=a(9974)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6701)}),_N_E=e.O()}]);