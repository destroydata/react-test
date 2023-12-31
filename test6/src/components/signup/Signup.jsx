import { useState } from "react";
import PasswordDiv from "./PasswordDiv";

const Signup = ({ signupSuccess, cid, removeUser, validSuccess }) => {
    const users = [{ id: '1q2w3e' }, { id: '1234' }, { id: 'park' }]
    const [id, setId] = useState({ id: "", exist: false, isFirst: true });
    const onChangeId = e => setId((prev) =>
        ({ ...prev, id: e.target.value, isFirst: false }))
    const checkId = () => setId((prev) =>
        ({ ...prev, exist: users.find(u => u.id === prev.id) }))
    const [password, setPassword] = useState({
        password: "", repassword: "", isEqual: true
    })

    const onChangePassword = (e) => {
        const { name, value } = e.target
        setPassword((prev) => ({ ...prev, [name]: value }))
    }
    const passwordCheck = () => {
        setPassword((prev) => {
            if (prev.password === prev.repassword && !id.exist) validSuccess(cid)
            return {
                ...prev
                , isEqual: prev.password === prev.repassword
            }
        })
    }
    const checkSuccess = () => {
        if (password.isEqual && !id.exist)
            signupSuccess(cid)
    }

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid red',
        padding: 10
    }}>
        <h1>{cid}</h1>
        <input
            name="id"
            placeholder="id"
            onChange={onChangeId}
            onBlur={checkId}
        />
        {id.exist ?
            <p style={{ color: 'red' }}>있는 아이디입니다</p> :
            <PasswordDiv
                isEqual={password.isEqual}
                isFirst={id.isFirst}
                onChangePassword={onChangePassword}
                passwordCheck={passwordCheck}
            />
        }
        <button onClick={checkSuccess}>회원가입 </button>
        <button onClick={() => removeUser(cid)}>취소 </button>
    </div>
}
export default Signup;