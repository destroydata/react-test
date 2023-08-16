import { useState } from "react"
import { useNavigate } from "react-router"

const ImgUpdate = ({ members, setMembers }) => {
    const id = Number(localStorage.getItem("id"))
    const member = members.find(m => m.id === id)
    const [img, setImage] = useState(member.image)
    const onChangeHandler = (e) => setImage(e.target.value)
    const nav = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault()
        setMembers((prev) =>
            prev.map(m =>
                m.id === id ?
                    { ...m, image: img } : m))
        nav('/members')
    }
    return <div>
        <form onSubmit={onSubmitHandler}>
            <input value={img} onChange={onChangeHandler}></input>
            <input type="submit" value={"update"}></input>
        </form>
    </div>
}
export default ImgUpdate;