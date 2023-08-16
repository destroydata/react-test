import { Container, Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
const Template = () => {
    return <>
        <Navbar>
            <NavbarBrand ><Link to="/">Home</Link></NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink >
                        <Link to="/member">member</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink >
                        <Link to="/login">login</Link>
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
        <Container fluid="md">
            <Outlet></Outlet>
        </Container>
    </>
}
export default Template;