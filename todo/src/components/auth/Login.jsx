import { useNavigate } from 'react-router';
import logo from '../../logo.svg';
import { useState } from 'react';
import { apiNoToken } from '../../network/api';
const Login = ({ setMe }) => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [message, setMessage] = useState("");
    const nav = useNavigate()
    const onChangeHandler = (e) => {
        const { value, name } = e.target
        setUser({ ...user, [name]: value })
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setMessage("");
        try {
            const data = await apiNoToken('/api/v1/auth/login', 'POST', user)
            localStorage.setItem('token', data.token)
            setMe(data)
            nav("/")
        } catch (error) {
            setMessage(error.response.data);
        }
    }
    const goToSignup = () => {
        nav('/signup')
    }
    return <div className="App-header">
        <img className="App-logo" src={logo}></img>
        <p style={{ color: 'red' }}>{message}</p>
        <form onSubmit={onSubmitHandler}>
            <input name="email" placeholder="email" onChange={onChangeHandler} />
            <input name="password" placeholder="password" type="password" onChange={onChangeHandler} />
            <input type="submit" value="로그인" />
        </form>
        <button onClick={goToSignup}>회원 가입</button>
    </div>
}

export default Login;