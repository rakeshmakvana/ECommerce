import { Accordion } from 'react-bootstrap';
import './Sidebar.css';
import logo from './logo.svg';
import { IoHome } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaMoneyCheck } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { ImUser } from "react-icons/im";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { IoBag } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { AiOutlineAreaChart } from "react-icons/ai";
import { useState } from 'react';

const Sidebar = () => {

    const [activeLink, setActiveLink] = useState('analytics');
    const [navVisible, setNavVisible] = useState(true);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    return (
        <>
            <div className='sidebar'>
                <div className='sd-logo d-flex align-items-center justify-content-center'>
                    <button onClick={toggleNav} className='logo-button'>
                        <img src={logo} alt="logo" />
                    </button>
                </div>
                {navVisible && (
                    <div className='navbar p-4'>
                        <Accordion defaultActiveKey="0" flush className='w-100'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><IoHome className='mb-1 mr-1' /> Dashboard</Accordion.Header>
                                <Accordion.Body>
                                    <a href="#" className={activeLink === 'analytics' ? 'active-link' : ''} onClick={() => handleLinkClick('analytics')}>
                                        <AiOutlineAreaChart className='mb-1 mr-1' /> Analytics
                                    </a>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><MdSpaceDashboard className='mb-1 mr-1' /> Products</Accordion.Header>
                                <Accordion.Body>
                                    <a href="#" className={activeLink === 'add-product' ? 'active-link' : ''} onClick={() => handleLinkClick('add-product')}>
                                        <FaRegSquarePlus className='mb-1 mr-1' /> Add Product
                                    </a>
                                    <br />
                                    <br />
                                    <a href="#" className={activeLink === 'products-list' ? 'active-link' : ''} onClick={() => handleLinkClick('products-list')}>
                                        <FaRegListAlt className='mb-1 mr-1' /> Products List
                                    </a>
                                    <br />
                                    <br />
                                    <a href="#" className={activeLink === 'product-details' ? 'active-link' : ''} onClick={() => handleLinkClick('product-details')}>
                                        <FiBox className='mb-1 mr-1' /> Product Details
                                    </a>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><RiShoppingCart2Fill className='mb-1 mr-1' /> Orders</Accordion.Header>
                                <Accordion.Body>
                                    <a href="#" className={activeLink === 'orders-list' ? 'active-link' : ''} onClick={() => handleLinkClick('orders-list')}>
                                        <FaRegListAlt className='mb-1 mr-1' /> Orders List
                                    </a>
                                    <br />
                                    <br />
                                    <a href="#" className={activeLink === 'order-details' ? 'active-link' : ''} onClick={() => handleLinkClick('order-details')}>
                                        <IoBag className='mb-1 mr-1' /> Order Details
                                    </a>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><FaMoneyCheck className='mb-1 mr-1' /> Sales</Accordion.Header>
                                <Accordion.Body>
                                    <a href="#" className={activeLink === 'sales-list' ? 'active-link' : ''} onClick={() => handleLinkClick('sales-list')}>
                                        <FaRegListAlt className='mb-1 mr-1' /> Sales List
                                    </a>
                                    <br />
                                    <br />
                                    <a href="#" className={activeLink === 'sale-details' ? 'active-link' : ''} onClick={() => handleLinkClick('sale-details')}>
                                        <RiMoneyRupeeCircleLine className='mb-1 mr-1' /> Sale Details
                                    </a>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><ImUser className='mb-1 mr-1' /> Customers</Accordion.Header>
                                <Accordion.Body>
                                    <a href="#" className={activeLink === 'all-customers' ? 'active-link' : ''} onClick={() => handleLinkClick('all-customers')}>
                                        <LuUsers className='mb-1 mr-1' /> All Customers
                                    </a>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header><IoSettings className='mb-1 mr-1' /> Settings</Accordion.Header>
                                <Accordion.Body>
                                    <a href="#" className={activeLink === 'profile' ? 'active-link' : ''} onClick={() => handleLinkClick('profile')}>
                                        <FaRegUserCircle className='mb-1 mr-1' /> Profile
                                    </a>
                                    <br />
                                    <br />
                                    <a href="#" className={activeLink === 'logout' ? 'active-link' : ''} onClick={() => handleLinkClick('logout')}>
                                        <RiLogoutBoxLine className='mb-1 mr-1' /> Logout
                                    </a>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                )}
            </div>
        </>
    );
}

export default Sidebar;
