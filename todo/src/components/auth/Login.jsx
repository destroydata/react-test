import { useNavigate } from 'react-router';
import logo from '../../logo.svg';
const Login = () => {
    const nav = useNavigate();
    const goToSignup = () => {
        nav('/signup')
    }
    return <div className="App-header">
        <img className="App-logo" src={logo}></img>
        <form>
            <input name="email" placeholder="email" />
            <input name="password" placeholder="password" type="password" />
            <input type="submit" value="로그인" />
        </form>
        <button onClick={goToSignup}>회원 가입</button>
    </div>
}

export default Login;