import React, { useEffect, useState } from 'react'
import logo from "../Images/logo.png"
import { Button, FormControl, FormLabel, Image, Input, Select, Textarea, useDisclosure } from '@chakra-ui/react'
import "../Styles/Price.css"

const Pricing = () => {
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

    const handlecreate = () => {

    }
    return (
        <>
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
                        <div>
                            <h3>Plans and Pricing</h3>
                        </div>
                        <div className='pricetag'>
                            <div><p>Monthly</p></div>
                            <div><p>Yearly</p></div>
                            <div><p>Monthly</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing