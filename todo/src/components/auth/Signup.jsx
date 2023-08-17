import { useState } from 'react';
import logo from '../../logo.svg';
import { apiNoToken } from '../../network/api';
import { useNavigate } from 'react-router';
const Signup = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        name: ""
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
            await apiNoToken('/api/v1/auth/register', 'POST', user)
            nav('/login')
        } catch (error) {
            setMessage(error.response.data);
        }

    }
    return <div className="App-header">
        <img className="App-logo" src={logo}></img>
        <p style={{ color: 'red' }}>{message}</p>
        <form onSubmit={onSubmitHandler}>
            <input
                required
                minLength={4}
                name="email"
                placeholder="email"
                onChange={onChangeHandler} />
            <input
                required
                minLength={4}
                name="password"
                placeholder="password"
                type="password"
                onChange={onChangeHandler} />
            <input
                required
                name="name"
                placeholder="name"
                onChange={onChangeHandler} />
            <input type="submit" value="회원가입" />
        </form>
    </div>
}

export default Signup;