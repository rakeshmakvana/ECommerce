import { IoIosArrowForward } from 'react-icons/io'
import './ProductDetails.css'
import logo from './logo.svg'
import { TiStarFullOutline } from 'react-icons/ti'
import { BiSolidOffer } from 'react-icons/bi'
import { AiFillBank } from 'react-icons/ai'

const ProductDetails = () => {

    return (
        <>
            <div className='main-analytics'>
                <div className='w-100 p-4'>
                    <div className='w-100 main-a mb-2'>
                        <span>Products <IoIosArrowForward /> Product Details</span>
                    </div>
                    <div className='w-100 d-flex flex-wrap mt-4'>
                        <div className="col-5">
                            <div className='w-100 mb-3'>
                                <img src={logo} alt="logo" width={100} />
                            </div>
                            <div className='prdt-img text-center p-4 mb-4'>
                                <img src="https://www.jiomart.com//images/product/original/494260170/bharat-chana-dal-1-kg-product-images-o494260170-p606721409-0-202401271413.jpg?im=Resize=(310,310)" alt="pr" className='w-100' />
                            </div>
                            <div className='prdt-btn text-center'>
                                <button className='bg-success'>Edit Product</button>
                                <button className='bg-danger'>Delete Product</button>
                            </div>
                        </div>
                        <div className="col-6 pl-4">
                            <div className='w-100 prdt-txt pb-4 mt-2'>
                                <h4>
                                    Bharat
                                </h4>
                                <h3>
                                    Bharat Chana Dal 1 kg
                                </h3>
                                <h2 className='mb-2'>
                                    <TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><span><TiStarFullOutline /></span>
                                </h2>
                                <h5>
                                    M.R.P :- <span> ₹60.00</span> (12%)
                                </h5>
                            </div>
                            <div className='w-100 prdt-inf pb-3 mt-4'>
                                <h2>
                                    Product Information
                                </h2>
                                <h3 className='mt-3'>
                                    <span>Brand :- </span> Bharat
                                </h3>
                                <h3 className='mt-3'>
                                    <span>Categories :- </span> Groceries
                                </h3>
                                <h3 className='mt-3'>
                                    <span>Details :- </span> Best quality product, Sortex cleaned and superior quality, Packed with care.
                                </h3>
                                <h3 className='mt-3'>
                                    <span>Manufacturer :- </span> National Agricultural Cooperative Marketing Federation of India Limited, (NAFED)
                                </h3>
                                <h3 className='mt-3'>
                                    <span>Description :- </span> Nutrient-Rich: Bharat Chana Dal is a powerhouse of essential nutrients, including protein, fibre, iron, and essential vitamins. Incorporating this dal into your diet can contribute to a balanced and nutritious lifestyle. Unpolished: Does not have any artificial polish with water or oil. Chana Dal is a staple in the Indian diet has a rich flavour and aroma and provides protein. Hygienically Packed: A 1kg pack of Bharat Chana Dal is hygienically sealed to preserve its freshness, flavour, and nutritional value. So what are you waiting for? Go ahead and buy this product online today!
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductDetails