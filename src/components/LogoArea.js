import React from 'react'
import Navbar from './Navbar'

const LogoArea = () => {
    return (
        <div>
            <nav className='bg-white nav'>
                <article className='container'>
                    <div className='logo_area'>
                        <input type="checkbox" id='check' />
                        <label htmlFor="check" className='menu'>
                            <i className='fa fa-bars'></i>
                        </label>
                        <div className='main_logo'>
                            <img src={"https://livedemo00.template-help.com/wt_prod-22311/images/logo-default-140x41.png"} alt="logo" />
                        </div>

                        <section className='contact'>
                            <div>
                                <i className='fa fa-clock-o' style={iconStyle} />
                                <span className='span'> 09:00AM — 05:00PM</span>
                            </div>
                            <span className='vl'></span>
                            <div>
                                <span className='span'><i className='fa fa-phone' style={iconStyle} /></span>
                                <span className='span'><a href="tel:+ +1 323-913-4688" className='phone'>+1 323-913-4688</a></span>
                            </div>
                            <div>
                                <button class="btn-donate">
                                    Get a Free Quote
                                </button>
                            </div>
                        </section>

                    </div>
                </article>
            </nav>
            <Navbar />
        </div>
    )
}

export default LogoArea
const iconStyle = {
    color: "rgb(28,121,225)",
    fontSize: "22px"
}