import { Button, Container, Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { myAxios } from '../network/api'
const Template = () => {
    const logout = () => {
        // localStorage.clear()
        setMe()
    }
    const [me, setMe] = useState();
    const test = async () => {
        const name = localStorage.getItem("id")
        if (!name) return
        const response = await myAxios("/api/v1/member", "POST", { name })
        setMe(response.body)
    }
    useEffect(() => {
        test()
    }, [])
    const [timer, setTimer] = useState()
    useEffect(() => {
        const now = new Date().getTime()
        const interval = setInterval(() => {
            setTimer(now - new Date().getTime())
        }, 1000)
        return clearInterval(interval)
    }, [me])

    return <>

        <Navbar>
            <Link to="/" className='navbar-brand'>Home</Link>
            <Nav>
                <NavItem>
                    <Link to="/member">member</Link>
                </NavItem>
                {me ?
                    <NavItem>
                        <img src={me.image} width={25}></img>
                        <p>{me.name}</p>
                        <Button onClick={logout}>logout</Button>
                    </NavItem> :
                    <NavItem>
                        <Link to="/login">login</Link>
                    </NavItem>
                }

            </Nav>
        </Navbar>
        <Container fluid="md">
            {timer}
            <Outlet></Outlet>
        </Container>
    </>
}
export default Template;