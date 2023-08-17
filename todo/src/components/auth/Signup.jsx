import logo from '../../logo.svg';
const Signup = () => {
    return <div className="App-header">
        <img className="App-logo" src={logo}></img>
        <form>
            <input name="email" placeholder="email" />
            <input name="password" placeholder="password" type="password" />
            <input name="name" placeholder="name" />
            <input type="submit" value="회원가입" />
        </form>
    </div>
}

export default Signup;