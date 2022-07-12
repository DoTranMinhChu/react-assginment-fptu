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
                    <NavItem>
                        Lighting
                    </NavItem>
                    <NavItem>
                        Bedding
                    </NavItem>
                    <NavItem>
                        Bath & Shower
                    </NavItem>
                </Nav>

            </Collapse>
        </Navbar>
    )
}