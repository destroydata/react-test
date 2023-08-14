// routes/MyRoutes.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { useState } from "react";
import Template from "./Template";
import User from "../components/User";

const MyRoutes = () => {
    const [users, setUsers] = useState([]);
    return <Routes>
        <Route element={<Template></Template>}>
            <Route
                path='/'
                element={<Signup
                    users={users}
                    setUsers={setUsers}></Signup>}></Route>
            <Route
                path='/login'
                element={<Login users={users}></Login>}></Route>
            <Route
                path="/user/:name"
                element={<User users={users} ></User>}></Route>
        </Route>
    </Routes>

}

export default MyRoutes;