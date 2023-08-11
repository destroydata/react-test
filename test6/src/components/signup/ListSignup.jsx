import { useState } from "react";
import Signup from "./Signup";

const ListSignup = () => {
    const [users, setUsers] = useState([{ id: 0, isSuccess: false }])
    const addUser = () => {
        setUsers(
            (prev) => [...prev, { id: prev.length, isSuccess: false }]
        )
    }
    const signupSuccess = (i) => {
        const u = users.map((el, index, arr) => index === i
            ? { ...el, isSuccess: true } : el)
        setUsers(u)
    }
    const removeUser = (i = users.length - 1) => {
        setUsers(
            (prev) => prev.filter((el, index) => index !== i))
    }
    return <>
        {users
            .filter(el => !el.isSuccess)
            .map((el, i) => <Signup
                key={el.id}
                cid={i}
                signupSuccess={signupSuccess}
                removeUser={removeUser}
            />)}
        <button onClick={addUser}>▼</button>
        <button onClick={() => removeUser()}>▲</button>
    </>
}

export default ListSignup;