import { Button, Container, Form, Nav, Navbar, Row } from "react-bootstrap"
import { FaLocationDot } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import logo from './logo.svg'
import './Header.css'

const Header = () => {

    return (
        <>
            <Navbar expand="lg" className="header py-3">
                <Container>
                    <Row className="w-100">
                        <Navbar.Brand href="#" className="col-2 m-0">
                            <img src={logo} alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="d-flex flex-wrap col-10 p-0">
                            <Nav className="my-2 my-lg-0 col-4 p-0">
                                <Button className="header-btn"><FaLocationDot /> Deliver to Mumbai 400020</Button>
                            </Nav>
                            <Form className="d-flex col-6">
                                <Form.Control type="search" placeholder="🔍 Search JioMart" className="header-src me-2 p-3" />
                            </Form>
                            <Nav className="my-2 my-lg-0 col-2 p-0">
                                <Button className="header-btn"><span className="header-sp"><FaCartShopping /></span></Button>
                                <Button className="header-btn"><span className="header-sp"><FaCircleUser /></span> Sign In</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Row>
                </Container>
            </Navbar>
        </>
    )

}

export default Header