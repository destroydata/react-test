import { useState } from "react";
import { Alert, Input } from "reactstrap"

const Login = () => {
    const [name, setName] = useState("")
    const [isErr, setIsErr] = useState(false)
    const onSubmitHandler = (e) => {
        e.preventDefault();
        fetch("http://192.168.0.184:8080/api/v1/member", {
            method: "POST"
            , headers: { "Content-Type": "application/json" }
            , body: JSON.stringify({ name })
        }).then((res) => {
            console.log(res);
            return res.json()
        }).then((member) => {
            console.log(member)
        }).catch((err) => {
            console.log(err)
            setIsErr(true)
        })
    }
    return <>
        {isErr && <Alert color="danger">login fail</Alert>}
        <form onSubmit={onSubmitHandler}>
            <Input
                placeholder="name"
                onChange={(e) => setName(e.target.value)}></Input>
            <Input type="submit" ></Input>
        </form>
    </>
}
export default Login