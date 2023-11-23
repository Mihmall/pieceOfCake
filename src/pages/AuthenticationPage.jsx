import React, { useState } from "react";
import {useRouter} from "next/router";
import { useReg } from "@/components/Registration/Reg";

const AuthenticationPage=()=>{
const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const {onLogin}= useReg();
  const router = useRouter();
  const handleLogin = (event) => {
    event.preventDefault();

    if (userData.email && userData.password) {
      onLogin(userData);

      router.push("/RegPage");

      setUserData({  email: "", password: "" });
    } else {
      console.log("Please fill in all fields");
    }
  };
// отключить сохранение в память.
  return(<>
    <div className="regContainer">
        <form action="#" onSubmit={handleLogin}>
            <div className="inputCont">
                <label htmlFor="email">Email</label>
                <input type="email" className="regInput" placeholder="Введите Email" value={userData.email} onChange={(e)=>setUserData({...userData, email: e.target.value})}/>
            </div>
            <div className="inputCont">
                <label htmlFor="password">Пароль</label>
                <input type="password" className="regInput" placeholder="Введите пароль" value={userData.password} onChange={(e)=>setUserData({...userData, password: e.target.value})}/>
            </div>
            <div>
                <button type="submit" className="regSubmit" >Отправить</button>
            </div>
        </form>
    </div>
    </>)
};

export default AuthenticationPage;