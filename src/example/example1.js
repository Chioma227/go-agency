import React from 'react'
import { Animator, batch, Fade, FadeIn, Move, MoveOut, ScrollContainer, ScrollPage, Sticky, ZoomIn, } from 'react-scroll-motion'

export default function Example() {
    const Effect = batch(FadeIn(), ZoomIn())
    const EffectTwo = batch(Fade(), Move())
    return (
        <div>
            <ScrollContainer>
                <ScrollPage props={0}>
                    <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -600))}>
                        <h2>hello world</h2>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
            <ScrollContainer>
                <ScrollPage props={1}>
                    <Animator animation={Effect}>
                        <h2 style={tStyle}>i am the third page to animate</h2>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
            <ScrollContainer>
                <ScrollPage props={2}>
                    <Animator animation={EffectTwo}>
                        <h2>i am the second page to animate</h2>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
        </div>
    )
}

const tStyle = {
    textAlign: 'center'
}