import React from 'react'
import Tour from '../images/tour.jpg'


const Carousel = () => {
    return (
        <div>

            <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
              
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <div class="view">
                            <img class="d-block w-100" src="https://thumbs.dreamstime.com/b/aerial-view-looking-down-welsh-beach-uk-taken-feet-air-directly-deep-blue-waves-105111305.jpg" alt="First slide" className ="carousel_img"/>
                            <div class="mask rgba-black-light"></div>
                        </div>
                        <div class="carousel-caption">
                            <h5 class="h3-responsive">ENJOY THE BEST DESTINATIONS WITH OUR TRAVEL AGENCY</h5>
                            <h1 className='h1-responsive'>Explore <b>The World</b></h1>
                            <button className='button-responsive'>Get in touch</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                       
                        <div class="view">
                            <img class="d-block w-100" src={Tour} alt="Second slide" className ="carousel_img"/>
                            <div class="mask rgba-black-strong"></div>
                        </div>
                        <div class="carousel-caption">
                            <h5 class="h3-responsive">A TEAM OF PROFESSIONAL TRAVEL EXPERTS</h5>
                            <h1 className='h1-responsive'>Trust <b>Our Experience</b></h1>
                            <button className='button-responsive'>Get in touch</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        
                        <div class="view">
                            <img class="d-block w-100" src="https://cdn.wallpapersafari.com/58/87/ec37NJ.jpg" alt="Third slide" className ="carousel_img"/>
                            <div class="mask rgba-black-slight"></div>
                        </div>
                        <div class="carousel-caption">
                        <h5 class="h3-responsive">BUIL YOUR NEXT HOLIDAY TRIP WITH US</h5>
                            <h1 className='h1-responsive'>Create <b>Your Tour</b></h1>
                            <button className='button-responsive'>Get in touch</button>
                        </div>
                    </div>
                </div>
                <ol class="carousel-indicators">
                    <li data-target="#carousel-example-2" data-slide-to="0" class="active">hg</li>
                    <li data-target="#carousel-example-2" data-slide-to="1">hg</li>
                    <li data-target="#carousel-example-2" data-slide-to="2">hg</li>
                </ol>

            </div>
           

        </div>
    )
}


export default Carousel
