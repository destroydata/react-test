import { useState } from "react";

const Login = ({ users }) => {
    const [user, setUser] = useState({
        id: "",
        password: ""
    })
    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const login = (e) => {
        e.preventDefault();
        const me = users.find(u =>
            u.id === user.id && u.password === user.password)
        if (me) alert(me.name)
    }
    return <div>
        <h1>Login</h1>
        <form onSubmit={login}>
            <input name="id" onChange={onChangeHandler}></input>
            <input name="password" onChange={onChangeHandler}></input>
            <input type="submit" value={"login"}></input>
        </form>
    </div>
}

export default Login;