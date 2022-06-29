import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='bg-white nav shadow'>
                <article className='container'>
                    <div className='logo_section'>
                        <div>
                            <img src={"https://livedemo00.template-help.com/wt_prod-22311/images/logo-default-140x41.png"} alt="logo" />
                        </div>
                        <div>
                            <i className='fa fa-clock-o' style={iconStyle} />
                            <span>09:00AM — 05:00PM</span>
                            <span><i className='fa fa-phone' style={iconStyle} /></span>
                            <span>+1 323-913-4688</span>
                            <button class="btn-donate">
                                Get a Free Quote
                            </button>
                        </div>
                    </div>
                </article>
            </nav>
        </div>
    )
}

export default Navbar
const iconStyle = {
    color: "rgb(28,121,225)",
    fontSize: "25px"
}