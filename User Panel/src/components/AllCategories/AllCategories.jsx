import './AllCategories.css'
import './../Groceries/Groceries.css'
import logo from './../Groceries/logo.svg'
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const AllCategories = () => {

    return (
        <>
            <div className="container my-5 w-100">
                <div className="row">
                    <div className='w-100 gr-a mb-2'>
                        <Link to='/'>Home</Link> <span><IoIosArrowForward /> All Categories</span>
                    </div>
                    <div className='w-100 d-flex flex-wrap gr-pr p-0 mb-4'>
                        <div className="col-3 mt-4 p-0">
                            <div className='cat-box p-3'>
                                <h1 className='mb-4'>
                                    Filters
                                </h1>
                                <h2 className='mb-3'>
                                    Categories
                                </h2>
                                <button className='text-left mb-3'>Groceries</button>
                                <button className='text-left mb-3'>Fruits</button>
                                <button className='text-left mb-3'>Kitchen Needs</button>
                                <button className='text-left mb-3'>Fashion</button>
                                <button className='text-left mb-3'>Electronics</button>
                                <button className='text-left mb-3'>Jewellery</button>
                                <button className='text-left mb-3'>Home improvement</button>
                                <button className='text-left mb-4'>Wellness</button>
                                <h2 className='mb-3'>
                                    Sub Categories
                                </h2>
                                <button className='text-left mb-3'>Mobile</button>
                                <button className='text-left mb-3'>Laptop</button>
                                <button className='text-left mb-3'>Men's Clothes</button>
                                <button className='text-left mb-3'>Baby Care</button>
                                <button className='text-left mb-3'>Medicins</button>
                                <button className='text-left mb-4'>Necklesh</button>
                                <h2 className='mb-3'>
                                    Price
                                </h2>
                                <button className='text-left mb-4'>Low to High</button>
                                <h2 className='mb-3'>
                                    Discount
                                </h2>
                                <button className='text-left mb-4'>Top Offers</button>
                            </div>
                        </div>
                        <div className="col-9 d-flex flex-wrap">
                            <div className="col-4 mt-4">
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
                            <div className="col-4 mt-4">
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
                            <div className="col-4 mt-4">
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
                            <div className="col-4 mt-4">
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
                            <div className="col-4 mt-4">
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
                            <div className="col-4 mt-4">
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
                            <div className="col-4 mt-4">
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
                            <div className="col-4 mt-4">
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
                            <div className="col-4 mt-4">
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
                            <div className="col-4 mt-4">
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
                            <div className="col-4 mt-4">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AllCategories