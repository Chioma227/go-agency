import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='main_nav'>
                <ul>
                    <li>
                        <a href="https://...">Home</a>
                    </li>
                    <li>
                        <a href="https://...">About.</a>
                    </li>
                    <li>
                        <a href="https://...">Our Tours</a>
                    </li>
                    <li>
                        <a href="https://...">Testimonials</a>
                    </li>
                    <li>
                        <a href="https://...">Blog</a>
                    </li>
                    <li>
                        <a href="https://...">Contacts</a>
                    </li>
                </ul>
                <div className='icons'>
                    <a href="https://..."> <i className='fa fa-facebook'></i></a>
                    <a href="https://..."> <i className='fa fa-twitter'></i></a>
                    <a href="https://..."><i className='fa fa-google-plus'></i></a>
                    <a href="https://..."><i className='fa fa-instagram'></i></a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
