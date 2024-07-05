import './Navbar.css'

const Navbar = () => {

    return (
        <>
            <div className='navbars'>
                <div className="container">
                    <div className="row">
                        <ul class="nav nav-underline">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Groceries</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Premium Fruits</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home & Kitchen Needs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Fashion</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Electronics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Jewellery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home improvement</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Wellness</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">All Categories</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Navbar