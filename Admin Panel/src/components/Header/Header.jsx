import { Button, Form, Nav } from 'react-bootstrap'
import './Header.css'
import { FaCircleUser } from 'react-icons/fa6'
import { IoMdNotifications } from "react-icons/io";
import { BiWorld } from "react-icons/bi";

const Header = () => {

    return (
        <>
            <div className="header d-flex flex-wrap align-items-center">
                <div className='hd-inp col-6'>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="🔍 Search JioMart" className="header-src me-2 p-3" />
                    </Form>
                </div>
                <div className='hd-btn col-6 d-flex flex-wrap justify-content-end'>
                    <Button className="header-btn"><span className="header-sp"><BiWorld /></span></Button>
                    <Button className="header-btn"><span className="header-sp"><IoMdNotifications /></span></Button>
                    <Button className="header-btn"><span className="header-sp"><FaCircleUser /></span> Sign In</Button>
                </div>
            </div>
        </>
    )

}

export default Header