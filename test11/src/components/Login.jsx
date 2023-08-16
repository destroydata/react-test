import { useState } from "react";
import { Alert, Input, Spinner } from "reactstrap"
import { api, myAxios } from "../network/api";

const Login = () => {
    const [name, setName] = useState("")
    const [status, setStatus] = useState("idle")
    // idle || error || loading || success
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setStatus("loading")
        const response = await myAxios("/api/v1/member", "POST", { name })
        setStatus(response.status)
        console.log(response)
    }
    return <>
        {status === "loading" && <Spinner />}
        {status === "success" && <Alert>성공</Alert>}
        {status === "error" && <Alert color="danger">실패</Alert>}
        <form onSubmit={onSubmitHandler}>
            <Input
                placeholder="name"
                onChange={(e) => setName(e.target.value)}></Input>
            <Input type="submit" ></Input>
        </form>
    </>
}
export default Login