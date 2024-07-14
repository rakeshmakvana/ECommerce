import { IoIosArrowForward } from 'react-icons/io'
import './AddProduct.css'
import { PiFileJpgBold } from "react-icons/pi";
import { RiProductHuntLine } from "react-icons/ri";
import { TbBrandBeats } from "react-icons/tb";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { CiDiscount1 } from "react-icons/ci";
import { FaBoxes } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdOutlineHomeWork } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { BiDetail } from "react-icons/bi";

const AddProduct = () => {

    return (
        <>
            <div className='main-analytics'>
                <div className='w-100 p-4'>
                    <div className='w-100 main-a mb-2'>
                        <span>Products <IoIosArrowForward /> Add Product</span>
                    </div>
                    <div className='mt-4 form-box p-5 m-4'>
                        <form className='d-flex flex-wrap'>
                            <div class="col-12 mb-4">
                                <label for="inputEmail4" class="form-label"><PiFileJpgBold className='mb-1' /> Product Url</label>
                                <input type="text" class="form-control" placeholder='https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-product-images-o494260170-p606721409-0-202401271413.jpg?im=Resize=(240,240)' />
                            </div>
                            <div class="col-8 mb-4">
                                <label for="inputPassword4" class="form-label"><RiProductHuntLine className='mb-1' /> Product Name</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="col-4 mb-4">
                                <label for="inputPassword4" class="form-label"><TbBrandBeats className='mb-1' /> Product Brand</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="input-group mb-4 col-4">
                                <label for="inputPassword4" class="form-label w-100"><HiOutlineCurrencyRupee className='mb-1' /> Product Price</label>
                                <span class="input-group-text">₹</span>
                                <input type="number" class="form-control" />
                                <span class="input-group-text">.00</span>
                            </div>
                            <div class="input-group mb-4 col-4">
                                <label for="inputPassword4" class="form-label w-100"><CiDiscount1 className='mb-1' /> Product Discount</label>
                                <input type="number" class="form-control" />
                                <span class="input-group-text">%</span>
                            </div>
                            <div class="input-group mb-4 col-4">
                                <label for="inputPassword4" class="form-label w-100"><FaBoxes className='mb-1' /> Product Stock</label>
                                <input type="number" class="form-control" />
                            </div>
                            <div class="input-group mb-4 col-6">
                                <label for="inputPassword4" class="form-label w-100"><MdCategory className='mb-1' /> Product Category</label>
                                <select class="form-select w-100 p-2" aria-label="Default select example">
                                    <option selected>Chooes Category</option>
                                    <option value="1">Groceries</option>
                                    <option value="2">Premium Fruits</option>
                                    <option value="3">Home & Kitchen Needs</option>
                                    <option value="4">Fashion</option>
                                    <option value="5">Electronics</option>
                                    <option value="6">Jewellery</option>
                                    <option value="7">Home improvement</option>
                                    <option value="8">Wellness</option>
                                </select>
                            </div>
                            <div class="input-group mb-4 col-6">
                                <label for="inputPassword4" class="form-label w-100"><BiSolidCategoryAlt className='mb-1' /> Product Sub Category</label>
                                <select class="form-select w-100 p-2" aria-label="Default select example">
                                    <option selected>Chooes Sub Category</option>
                                    <option value="1">Mobile</option>
                                    <option value="2">Clothe</option>
                                    <option value="3">Health</option>
                                    <option value="4">Food</option>
                                    <option value="5">Cooking</option>
                                    <option value="6">Computer</option>
                                    <option value="7">Homemade</option>
                                    <option value="8">Vegetables</option>
                                    <option value="9">Beauty</option>
                                    <option value="10">Book</option>
                                    <option value="11">Games</option>
                                    <option value="12">Fitness</option>
                                </select>
                            </div>
                            <div class="input-group mb-4 col-12">
                                <label for="inputPassword4" class="form-label w-100"><MdOutlineHomeWork className='mb-1' /> Product Manufacturer</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="input-group mb-4 col-12">
                                <label for="inputPassword4" class="form-label w-100"><TbListDetails className='mb-1' /> Product Details</label>
                                <textarea class="form-control" type='text' rows="3"></textarea>
                            </div>
                            <div class="input-group mb-4 col-12">
                                <label for="inputPassword4" class="form-label w-100"><BiDetail className='mb-1' /> Product Description</label>
                                <textarea class="form-control" type='text' rows="5"></textarea>
                            </div>
                            <div class="form-check col-12 pl-4 ml-3 mb-4">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    I Accepted all Cokie and Conform to Lounch Product.
                                </label>
                            </div>
                            <div className='col-12'>
                                <button type='submit'>
                                    Lounch Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AddProduct