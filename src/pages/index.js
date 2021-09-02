import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar/';
import Cards from '../components/Cards';
import Footer from '../components/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <Cards />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Footer />
        </>
    );
};

export default Home;
