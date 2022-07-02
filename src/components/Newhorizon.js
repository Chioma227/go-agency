import React from 'react'
import Image from '../images/horizon2.jpeg'
// import { ScrollContainer, ScrollPage, Animator, Fade, batch } from 'react-scroll-motion/dist/ScrollContainer'



const Newhorizon = () => {
    return (
        <div>
            {/* <ScrollContainer>
                <ScrollPage props={0}>
                    <Animator animation={batch(Fade(1, 0))}> */}
                        <div className='section2'>
                            <div>
                                <img src={Image} alt="horizon" />
                            </div>
                            <div className='discover'>
                                <h2>
                                    Discover New Horizons
                                </h2>
                                <ul>
                                    <li>
                                        <a href="">ABOUT US</a>
                                    </li>
                                    <li>
                                        <a href="http://...">WHY CHOOSE US</a>
                                    </li>
                                    <li>
                                        <a href="http://...">OUR MISSION</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    {/* </Animator>
                </ScrollPage>
            </ScrollContainer> */}
        </div>
    )
}

export default Newhorizon
