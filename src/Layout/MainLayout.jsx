import React from "react";
import  Navigation  from "../components/Navigation/Navigation";
import { useReg } from "@/components/Registration/Reg";

const MainLayout = ({ children }) => {
    const { user } = useReg();
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default MainLayout;
