// routes/MyRoutes.jsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { useState } from "react";
import Template from "./Template";

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
        </Route>
    </Routes>

}

export default MyRoutes;