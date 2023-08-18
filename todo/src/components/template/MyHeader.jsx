import { Link, useNavigate } from "react-router-dom";
import { api } from "../../network/api";
import { useEffect } from "react";

const MyHeader = ({ me, setMe }) => {
    const nav = useNavigate();
    const logout = () => {
        localStorage.clear()
        setMe({
            id: "",
            money: 0,
            name: "",
            token: ""
        });
        nav('/login')
    }
    const getMe = async () => {
        try {
            const data = await api('/api/v1/users/me', 'GET')
            setMe(data)
            localStorage.setItem("token", data.token)
        } catch (error) {
            nav('/login')
        }
    }

    useEffect(() => {
        getMe()
    }, [])

    return <header>
        <Link to="/"><h1>Home</h1></Link>
        <p>{me.name}</p>
        <p>잔고 : {me.money}</p>
        <Link to='/todo/create'>+</Link>
        <button onClick={logout}>로그아웃</button>
    </header>
}

export default MyHeader;