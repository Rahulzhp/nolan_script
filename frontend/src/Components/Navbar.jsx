import React, { useEffect, useState } from 'react'
import { Button, FormControl, FormLabel, Image, Input, Select, Textarea, useDisclosure } from '@chakra-ui/react'
import logo from "../Images/logo.png"
import largeLogo from "../Images/largeLogo.png"
import brain from "../Images/bran.png"
import offline from "../Images/offline.png"
import charity from "../Images/charity.png"
import secure from "../Images/secure.png"
import "../Styles/Navbar.css"
import Features from './Features'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

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
                        <Link to="/"><Image src={logo} alt="logo"></Image></Link>

                    </div>
                    <div>
                        <div className='pages'>
                            {/* <p>Dashboard</p> */}
                            <Link to="/" > Dashboard</Link>
                            {/* <p>About Us</p> */}
                            <Link > About Us</Link>
                            {/* <p>Pricing</p> */}
                            <Link to="/price" > Pricing</Link>
                            {/* <p onClick={onOpen}>Create Script</p> */}
                            <Link onClick={onOpen}>Create Script</Link>
                            {/* <p>Blog</p> */}
                            <Link to="/login" >Login</Link>
                            {/* <p>Profile</p> */}
                            <Link to="/profile" >Profile</Link>
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
                <>
                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Create Script</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                < FormControl isRequired>
                                    <FormLabel>Title</FormLabel>
                                    <Input ref={initialRef} borderRadius={"21px"} placeholder='Enter Title' />
                                </FormControl>
                                <FormControl mt={5}>
                                    <FormLabel>Plot</FormLabel>
                                    <Textarea borderRadius={"19px"} placeholder='Sci-fi adventure across multiverse' ></Textarea>
                                </FormControl>
                                <FormControl isRequired mt={5}>
                                    <FormLabel>Genre</FormLabel>
                                    <Select borderRadius={"19px"} placeholder='Select option'>
                                        <option value='option1'>Action</option>
                                        <option value='option2'>Adventure</option>
                                        <option value='option3'>Comedy</option>
                                    </Select>
                                </FormControl>
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme='blue' mr={3}>
                                    Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>
            </div>
            <Features />
        </>
    )
}

export default Navbar