import React from 'react'
import { HeroContainer, HeroBg, VideoBg } from './HeroElements'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
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
                    <Button to="signup">
                        Visit my Github {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
