import React, { useEffect, useState } from 'react'
import { Button, Image } from '@chakra-ui/react'
import logo from "../Images/logo.png"
import largeLogo from "../Images/largeLogo.png"
import brain from "../Images/bran.png"
import offline from "../Images/offline.png"
import charity from "../Images/charity.png"
import secure from "../Images/secure.png"
import into from "../Images/intro.png"
import acent from "../Images/accent.png"
import "../Styles/Navbar.css"
import Features from './Features'

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
                <div className='contentItem'>
                    <div className='smlItem'>
                        <div className='brain'>
                            <img src={brain}></img>
                        </div>
                        <div className='heddiv'>
                            <h1>AI-Copilot</h1>
                            <p>Enhance your screenwriting experience with GPT-powered editing features and AI-generated imagery</p>
                        </div>
                    </div>
                    <div className='smlItem'>
                        <div className='brain'>
                            <img src={offline}></img>
                        </div>
                        <div className='heddiv'>
                            <h1>Offline-Capable</h1>
                            <p>Work on the go without having to rely on the cloud and an always-required internet connection</p>
                        </div>
                    </div>
                    <div className='smlItem'>
                        <div className='brain'>
                            <img src={charity}></img>
                        </div>
                        <div className='heddiv'>
                            <h1>Free</h1>
                            <p>Enjoy the NOLAN free version while also influencing the further development of the product.</p>
                        </div>
                    </div>
                    <div className='smlItem'>
                        <div className='brain'>
                            <img src={secure}></img>
                        </div>
                        <div className='heddiv'>
                            <h1>Secure</h1>
                            <p>Don’t worry, your screenplay is secure and encrypted with Nolan</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className='Slrvideo'>
                    <div>
                        <div className='Slrheading'>
                            <div>
                                <h2>What is NOLAN?</h2>
                                <h1>Lights, camera, action!</h1>
                            </div>
                            <div>
                                <p>NolanAI is the ultimate tool for any screenwriter looking to improve their craft. With its AI-powered features and user-friendly interface, it can help you bring your stories to life in the most efficient and effective way possible, while respecting your unique creative voice.</p>
                                <Button backgroundColor={"red.500"} padding={"31px"} color={"white"} borderRadius={"19px"}>Explore Our Premium PLan!</Button>
                            </div>
                        </div>
                        <div className='video'>
                            <iframe width="100%" loading='lazy' height="291px" src="https://www.youtube.com/embed/p6P4EDHqAV4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Features />
        </>
    )
}

export default Navbar