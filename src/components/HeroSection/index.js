import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1,
    HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../ButtonElement'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi! I'm Jennie</HeroH1>
                <HeroP>
                    Welcome to my Website
                </HeroP>
                <HeroBtnWrapper>
                    <Button onClick={() => {
                        window.open('https://github.com/Diasdra', '_blank')}}
                     onMouseEnter={onHover}
                     onMouseLeave={onHover}
                     primary='true'
                     dark='true'> 
                        Visit my Github {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
