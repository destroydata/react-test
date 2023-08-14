import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Login = ({ members }) => {
    const [name, setName] = useState("");
    const nav = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault()
        const member = members.find(m => m.name === name)
        if (member) {
            localStorage.setItem("id", member.id)
            nav('/members')
        }
    }
    const onChangeHandler = (e) => {
        const { value } = e.target
        setName(value);
    }
    return <div>
        <form onSubmit={onSubmitHandler}>
            <input onChange={onChangeHandler} placeholder="name"></input>
            <input type="submit" value={"로그인"}></input>
        </form>
    </div>
}

export default Login