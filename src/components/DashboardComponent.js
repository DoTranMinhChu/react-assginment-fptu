import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

export default function DashBoard() {
    return (
        <Navbar
            color="light"
            expand="md"
            light
        >
            <NavbarBrand href="/">
                CATEGORIES
            </NavbarBrand>
            <Collapse isOpen={true} navbar>
                <Nav
                    className="me-auto"
                    navbar
                >
                    <NavItem className='ml-1'>
                        Lighting
                    </NavItem>
                    <NavItem className='ml-1'>
                        Bedding
                    </NavItem >
                    <NavItem className='ml-1'>
                        Bath & Shower
                    </NavItem>
                </Nav>

            </Collapse>
        </Navbar>
    )
}