import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import Home from '../components/main/Home';
import Template from '../components/template/Template';
import { useState } from 'react';
import Create from '../components/todo/Create';
const MyRouters = () => {
    const [me, setMe] = useState({
        id: "",
        money: 0,
        name: "",
        token: ""
    })
    return <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login setMe={setMe} />} />
            <Route path='/signup' element={<Signup />} />
            <Route element={<Template me={me} setMe={setMe}></Template>}>
                <Route path='/' element={<Home />}></Route>
                <Route path='/todo/create' element={<Create />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
}

export default MyRouters;