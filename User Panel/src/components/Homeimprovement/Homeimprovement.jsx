import './../Groceries/Groceries.css'
import logo from './../Groceries/logo.svg'
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Homeimprovement = () => {

    return (
        <>
            <div className="container my-5 w-100">
                <div className="row">
                    <div className='w-100 gr-a mb-2'>
                        <Link to='/'>Home</Link> <span><IoIosArrowForward /> Home Improvement</span>
                    </div>
                    <div className='w-100 d-flex flex-wrap gr-pr p-0 mb-4'>
                        <div className="col-3 mt-4">
                            <button className='gr-btn p-3 text-left'>
                                <img src="https://www.jiomart.com//images/product/original/494260170/bharat-chana-dal-1-kg-product-images-o494260170-p606721409-0-202401271413.jpg?im=Resize=(310,310)" alt="img" className='mb-3 gr-img' />
                                <img src={logo} alt="logo" width={100} className='pl-2 mb-2' />
                                <h4 className='mb-3 pl-2'>Bharat Chana Dal 1 kg</h4>
                                <h3 className='mb-3 pl-2'>
                                    $60.00
                                </h3>
                                <button>Add&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaPlus className='mb-1 ml-5' /></button>
                            </button>
                        </div>
                        <div className="col-3 mt-4">
                            <button className='gr-btn p-3 text-left'>
                                <img src="https://www.jiomart.com//images/product/original/494260170/bharat-chana-dal-1-kg-product-images-o494260170-p606721409-0-202401271413.jpg?im=Resize=(310,310)" alt="img" className='mb-3 gr-img' />
                                <img src={logo} alt="logo" width={100} className='pl-2 mb-2' />
                                <h4 className='mb-3 pl-2'>Bharat Chana Dal 1 kg hhhhh ooooooo pppppppp bbbbb llllllll</h4>
                                <h3 className='mb-3 pl-2'>
                                    $60.00
                                </h3>
                                <button>Add&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaPlus className='mb-1 ml-5' /></button>
                            </button>
                        </div>
                        <div className="col-3 mt-4">
                            <button className='gr-btn p-3 text-left'>
                                <img src="https://www.jiomart.com//images/product/original/494260170/bharat-chana-dal-1-kg-product-images-o494260170-p606721409-0-202401271413.jpg?im=Resize=(310,310)" alt="img" className='mb-3 gr-img' />
                                <img src={logo} alt="logo" width={100} className='pl-2 mb-2' />
                                <h4 className='mb-3 pl-2'>Bharat Chana Dal 1 kg</h4>
                                <h3 className='mb-3 pl-2'>
                                    $60.00
                                </h3>
                                <button>Add&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaPlus className='mb-1 ml-5' /></button>
                            </button>
                        </div>
                        <div className="col-3 mt-4">
                            <button className='gr-btn p-3 text-left'>
                                <img src="https://www.jiomart.com//images/product/original/494260170/bharat-chana-dal-1-kg-product-images-o494260170-p606721409-0-202401271413.jpg?im=Resize=(310,310)" alt="img" className='mb-3 gr-img' />
                                <img src={logo} alt="logo" width={100} className='pl-2 mb-2' />
                                <h4 className='mb-3 pl-2'>Bharat Chana Dal 1 kg hhhhh ooooooo pppppppp bbbbb llllllll</h4>
                                <h3 className='mb-3 pl-2'>
                                    $60.00
                                </h3>
                                <button>Add&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaPlus className='mb-1 ml-5' /></button>
                            </button>
                        </div>
                        <div className="col-3 mt-4">
                            <button className='gr-btn p-3 text-left'>
                                <img src="https://www.jiomart.com//images/product/original/494260170/bharat-chana-dal-1-kg-product-images-o494260170-p606721409-0-202401271413.jpg?im=Resize=(310,310)" alt="img" className='mb-3 gr-img' />
                                <img src={logo} alt="logo" width={100} className='pl-2 mb-2' />
                                <h4 className='mb-3 pl-2'>Bharat Chana Dal 1 kg</h4>
                                <h3 className='mb-3 pl-2'>
                                    $60.00
                                </h3>
                                <button>Add&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaPlus className='mb-1 ml-5' /></button>
                            </button>
                        </div>
                        <div className="col-3 mt-4">
                            <button className='gr-btn p-3 text-left'>
                                <img src="https://www.jiomart.com//images/product/original/494260170/bharat-chana-dal-1-kg-product-images-o494260170-p606721409-0-202401271413.jpg?im=Resize=(310,310)" alt="img" className='mb-3 gr-img' />
                                <img src={logo} alt="logo" width={100} className='pl-2 mb-2' />
                                <h4 className='mb-3 pl-2'>Bharat Chana Dal 1 kg hhhhh ooooooo pppppppp bbbbb llllllll</h4>
                                <h3 className='mb-3 pl-2'>
                                    $60.00
                                </h3>
                                <button>Add&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaPlus className='mb-1 ml-5' /></button>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Homeimprovement