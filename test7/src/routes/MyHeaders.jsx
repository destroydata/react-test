import { Link } from "react-router-dom"

const MyHeaders = () => {
    return <>
        <Link to='/login'>Login</Link>
        <Link to='/'>Signup</Link>
        <Link to='/user/park'>park</Link>
        <Link to='/user/111'>111</Link>
    </>
}
export default MyHeaders;