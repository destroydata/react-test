import { useState } from "react";
import { api } from "../../network/api";
import Toast from "../tools/Toast";
import { useNavigate } from "react-router";

const Create = ({ setMe }) => {
    const [state, setState] = useState({
        content: "",
        isHidden: false
    })
    const [message, setMessage] = useState("");
    const nav = useNavigate()
    const onChangeHandler = (e) => {
        const { value } = e.target;
        setState((prev) => ({ ...prev, content: value }))
    }
    const onClickHandler = () => {
        setState((prev) => ({ ...prev, isHidden: !prev.isHidden }))
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setMessage("")

        try {
            await api("/api/v1/todos", "POST", state)
            setMe((prev) => ({ ...prev, money: prev.money - 100 }))
            nav("/")
        } catch (error) {
            setMessage(error.response.data)
        }

    }


    return <>
        {message && <Toast message={message} />}
        <form onSubmit={onSubmitHandler}>
            <input placeholder="content" onChange={onChangeHandler} />
            <input type="checkbox" onClick={onClickHandler} />
            <input type="submit" value={"등록"} />
        </form>
    </>
}
export default Create;