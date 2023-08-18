import { Link, useNavigate } from "react-router-dom";
import { api } from "../../network/api";
import { useEffect } from "react";
import { setMe, test } from "../../feature/me/meSlice";
import { useDispatch, useSelector } from 'react-redux'
const MyHeader = () => {
    const nav = useNavigate();
    const dispatch = useDispatch()
    const me = useSelector(state => state.me)
    const logout = () => {
        localStorage.clear()
        dispatch(setMe({
            id: "",
            money: 0,
            name: "",
            token: ""
        }));
        nav('/login')
    }
    const getMe = async () => {
        try {
            const data = await api('/api/v1/users/me', 'GET')
            dispatch(setMe(data))
            localStorage.setItem("token", data.token)
        } catch (error) {
            nav('/login')
        }
    }
    const setTest = () => dispatch(test())

    useEffect(() => {
        getMe()
    }, [])

    return <header>
        <Link to="/"><h1>Home</h1></Link>
        <p>{me.name}</p>
        <p>잔고 : {me.money}</p>
        <Link to='/todo/create'>+</Link>
        <button onClick={logout}>로그아웃</button>
        <button onClick={setTest}>test</button>
    </header>
}

export default MyHeader;