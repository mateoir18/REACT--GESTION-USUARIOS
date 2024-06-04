import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserCreate } from "./componentes/UserCreate";
import { UserList } from "./componentes/UserList";
import { UserUpdate } from "./componentes/UserUpdate";
import { NavBar } from "./componentes/NavBar";




export const App = () => {
  
  

  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<UserList/>}></Route>
          <Route
            path="create"
            element={<UserCreate/>}
          ></Route>
          <Route path="/update/:id" element={<UserUpdate/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
