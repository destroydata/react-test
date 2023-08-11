import { useState } from "react";
import Signup from "./Signup";

// 1. 조건 만족시 회원가입
// 2. 전체 회원가입
const ListSignup = () => {
    const [users, setUsers] = useState([{ id: 0, isSuccess: false }])
    const addUser = () => {
        setUsers(
            (prev) => [...prev, {
                id: prev[prev.length - 1].id + 1
                , isSuccess: false
            }]
        )
    }
    const signupSuccess = (i) => {
        const u = users.map((el, index, arr) => el.id === i
            ? { ...el, isSuccess: true } : el)
        setUsers(u)
    }
    const removeUser = (i = users[users.length - 1].id) => {
        setUsers(
            (prev) => prev.filter((el, index) => el.id !== i))
    }
    return <>
        {users
            .filter(el => !el.isSuccess)
            .map((el, i) => <Signup
                key={el.id}
                cid={el.id}
                signupSuccess={signupSuccess}
                removeUser={removeUser}
            />)}
        <button onClick={addUser}>▼</button>
        <button onClick={() => removeUser()}>▲</button>
        <button>전체 회원가입</button>
    </>
}

export default ListSignup;