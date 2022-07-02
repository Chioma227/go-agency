import React from 'react'
import Image1 from '../images/hot-air-balloon.jpeg'
import Image2 from '../images/mountain.jpg'
import Image3 from '../images/beach.jpg'

const ImgRow = () => {
    return (
        <div>
            <div className='card-bg'>
                <div className='cards'>
                    <div class="card text-white" style={cStyle}>
                        <div>
                            <img class="card-img" src={Image1} alt="CardImage" style={ImgStyle} />
                        </div>
                        <div class="card-img-overlay">
                            <h3 class="card-title">Ballon Flights</h3>
                        </div>
                    </div>
                    <div class="card text-white" style={cStyle}>
                        <img class="card-img" src={Image2} alt="CardImage" style={ImgStyle} />
                        <div class="card-img-overlay">
                            <h3 class="card-title">Mountain Holiday</h3>
                        </div>
                    </div>
                    <div class="card text-white" style={cStyle}>
                        <div>
                            <img class="card-img" src={Image3} alt="CardImage" style={ImgStyle} />
                        </div>
                        <div class="card-img-overlay">
                            <h3 class="card-title">Beach Holidays</h3>
                        </div>
                    </div>
                </div>
                <div className='tours'>
                    <a href="https://...">Other Tours <i className='fa fa-arrow-right'></i></a>
                </div>
            </div>
        </div>
    )
}

export default ImgRow
const ImgStyle = {
    width: '380px',
    height: '380px'

}
const cStyle = {
    width: 'fit-content'
}
