import { useState } from "react";
import Signup from "./Signup";

const ListSignup = () => {
    const [users, setUsers] = useState([{ id: 0, isSuccess: false }])
    const addUser = () => setUsers(
        (prev) => [...prev, { id: prev.length, isSuccess: false }]
    )
    const signupSuccess = (id) => {
        const u = users.map(el => el.id === id
            ? { ...el, isSuccess: true } : el)
        setUsers(u)
    }
    const removeUser = () => {

    }
    return <>
        {users
            .filter(el => !el.isSuccess)
            .map((el) => <Signup
                key={el.id}
                cid={el.id}
                signupSuccess={signupSuccess} />)}
        <button onClick={addUser}>▼</button>
        <button onClick={removeUser}>▲</button>
    </>
}

export default ListSignup;