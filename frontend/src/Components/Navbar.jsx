import React, { useEffect, useState } from 'react'
import { Button, Image } from '@chakra-ui/react'
import logo from "../Images/logo.png"
import largeLogo from "../Images/largeLogo.png"
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
                        <img src={largeLogo} alt="logo"></img>
                    </div>
                    <div>
                        <h3>Free Script Writing Software</h3>
                        <p>Unleash creativity with AI Copilot - craft compelling <br></br> screenplays</p>
                    </div>
                    <div>
                        <Button backgroundColor={"red.500"} padding={"35px"} color={"white"} borderRadius={"21px"}>Go To Dashboard</Button>
                    </div>
                </div>
            </div>
            <div className='content'>
                <div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar