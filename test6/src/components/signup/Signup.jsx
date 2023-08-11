import { useState } from "react";

const Signup = () => {
    const users = [{ id: '1q2w3e' }, { id: '1234' }, { id: 'park' }]
    const [id, setId] = useState();
    const onChangeId = e => setId(e.target.value)
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
            onBlur={() => console.log('asda')}
        />
        <input name="password" type="password" placeholder="password"></input>
        <input name="repassword" type="password" placeholder="repassword"></input>
    </div>
}
export default Signup;