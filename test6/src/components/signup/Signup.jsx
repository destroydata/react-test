import { useState } from "react";

const Signup = () => {
    const users = [{ id: '1q2w3e' }, { id: '1234' }, { id: 'park' }]
    const [id, setId] = useState({ id: "", exist: false });
    const onChangeId = e => setId((prev) =>
        ({ ...prev, id: e.target.value }))
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
        setPassword((prev) => ({
            ...prev
            , isEqual: prev.password === prev.repassword
        }))
    }


    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <input
            name="id"
            placeholder="id"
            onChange={onChangeId}
            onBlur={checkId}
        />
        {id.exist &&
            <p style={{ color: 'red' }}>있는 아이디입니다</p>}
        <input name="password"
            type="password"
            placeholder="password"
            onChange={onChangePassword}
        />
        <input name="repassword"
            type="password"
            placeholder="repassword"
            onChange={onChangePassword}
            onBlur={passwordCheck}
        />
        {password.isEqual || <p style={{ color: 'red' }}>
            비밀번호가 다릅니다.</p>}
    </div>
}
export default Signup;