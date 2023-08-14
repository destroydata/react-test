import { useState } from "react";
import Signup from "./Signup";

// 1. 조건 만족시 회원가입
// 2. 전체 회원가입
// 3. 조건 만족 한 사람만 전체 회원가입
const ListSignup = () => {
    const [users, setUsers] = useState([{
        id: 0, isSuccess: false, isValid: false
    }])
    const addUser = () => {
        setUsers(
            (prev) => [...prev, {
                id: prev[prev.length - 1].id + 1
                , isSuccess: false, isValid: false
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
    const validSuccess = (i) => {
        const u = users.map((el) => el.id === i
            ? { ...el, isValid: true } : el)
        setUsers(u)
    }
    const allSuccess = () => {
        const u = users.map((el) => el.isValid
            ? { ...el, isSuccess: true } : el)
        setUsers(u)
    }

    return <>
        {users
            .filter(el => !el.isSuccess)
            .map((el, i) => <Signup
                key={el.id}
                cid={el.id}
                signupSuccess={signupSuccess}
                removeUser={removeUser}
                validSuccess={validSuccess}
            />)}
        <button onClick={addUser}>▼</button>
        <button onClick={() => removeUser()}>▲</button>
        <button onClick={allSuccess}>전체 회원가입</button>
    </>
}

export default ListSignup;