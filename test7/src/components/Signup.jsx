import { useState } from "react";

const Signup = ({ users, setUsers }) => {

    const [user, setUser] = useState({
        id: "",
        password: "",
        name: ""
    })
    const addUser = (e) => {
        e.preventDefault();
        setUsers([...users, user])
    }
    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    console.log(users, user)
    return <div>
        <h1>Signup</h1>
        <form onSubmit={addUser}>
            <input name="id" onChange={onChangeHandler}></input>
            <input name="password" onChange={onChangeHandler}></input>
            <input name="name" onChange={onChangeHandler}></input>
            <input type="submit" value={"join"}></input>
        </form>
    </div>
}

export default Signup;