import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import Home from '../components/main/Home';
const MyRouters = () => {
    return <BrowserRouter>
        <Routes>
            <Route>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Route>
        </Routes>
    </BrowserRouter>
}

export default MyRouters;