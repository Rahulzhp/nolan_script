import React, { useEffect, useState } from 'react'
import { Image } from '@chakra-ui/react'
import logo from "../Images/logo.png"
import "../Styles/Navbar.css"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='container'>
            <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
                <div>
                    <Image src={logo} alt="logo"></Image>
                </div>
                <div>
                    <div className='pages'>
                        <p>Dashboard</p>
                        <p>About Us</p>
                        <p>Pricing</p>
                        <p>Create Script</p>
                        <p>Blog</p>
                        <p>Profile</p>
                    </div>
                </div>
            </div>
            <div className='home'>
                <div>
                    <div className='homeLogo'>
                        <img src={logo} alt="logo"></img>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar