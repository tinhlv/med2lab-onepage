import React from "react";
import { Navbar, Container, Image } from 'react-bootstrap'
import logo from '../../assets/images/logo.png'

function MainNavbar() {
    return (
        <header className="section header-container">
            <Navbar className="navbar navbar-default navbar-default-2" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <Image src={logo} fluid alt="logo" width={`141px`} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <ul className="nav navbar-nav navbar-right ml-auto">
                            <li className="nav-item">
                                <button className="btn btn_primary">
                                    Request Demo <span className="icon-arrow-right ml-2"></span>
                                </button>
                            </li>
                            <li className="nav-item ml-2">
                                <button className="btn btn_white">
                                    Login <span className="icon-arrow-right ml-2"></span>
                                </button>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default MainNavbar;