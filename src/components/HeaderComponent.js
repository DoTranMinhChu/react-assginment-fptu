import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarText, Modal } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const noRefCheck = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>

            <Navbar expand="md" color="light" light>
                <div>
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                </div>
                <NavbarText>
                    <span className="fa fa-shopping-cart fa-lg" onClick={noRefCheck}></span>
                </NavbarText>
            </Navbar>

            <Modal
                isOpen={isOpen}
                toggle={noRefCheck}
            >
                this function is building
            </Modal>
        </>
    );

}

