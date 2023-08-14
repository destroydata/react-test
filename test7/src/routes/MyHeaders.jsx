import { Link } from "react-router-dom"

const MyHeaders = () => {
    return <>
        <Link to='/login'>Login</Link>
        <Link to='/'>Signup</Link>
    </>
}
export default MyHeaders;