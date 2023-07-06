import React, { useEffect, useState } from 'react'
import logo from "../Images/logo.png"
import { Button, FormControl, FormLabel, Image, Input, Select, Textarea, useDisclosure } from '@chakra-ui/react'
import "../Styles/Price.css"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import tick from "../Images/tick.png"
import cross from "../Images/cross.png"
import { Link } from 'react-router-dom'

const Pricing = () => {
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

    const handlecreate = () => {

    }
    return (
        <>
            <div className='priceback'>
                <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
                    <div>
                        <Link to="/"><Image src={logo} alt="logo"></Image></Link>
                    </div>
                    <div>
                        <div className='pages'>
                            <Link to="/" > Dashboard</Link>
                            {/* <p>About Us</p> */}
                            <Link  > About Us</Link>
                            {/* <p>Pricing</p> */}
                            <Link to="/price" > Pricing</Link>
                            <p onClick={onOpen}>Create Script</p>
                            {/* <p>Blog</p> */}
                            <Link to="/login" >Login</Link>
                            {/* <p>Profile</p> */}
                            <Link to="/profile" >Profile</Link>
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
                <div className='pricememo'>
                    <div>
                        <div>
                            <h1>Free Forever</h1>
                            <hr></hr>
                        </div>
                        <div>
                            <p>Get started with our free plan and enjoy essential features without any cost. Perfect for individuals</p>
                        </div>
                        <div>
                            <h5>$0</h5>
                            <Button>Subscribe</Button>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>Unlimited Screenplays</h6>
                                <p>Create as many screenplays as you want without limitation</p>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>Automatic Cloud sync and Backup</h6>

                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>History</h6>
                                <p>CAccess previous versions of your scripts.</p>
                                <h5>Last 3 days</h5>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>PDF and Final Draft export</h6>

                                <h5>Watermarked</h5>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>Brainstorming</h6>
                                <p>Brainstorm with Nolan: Ask Questions on Screenplay Writing.</p>
                                <h5>100 request per month</h5>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>Co Pilot/AI requests</h6>
                                <p>Ask AI change accent, continue dialogue, change ton of text</p>
                                <h5>30 request per month</h5>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>AI Image Generations</h6>
                                <p>Draw Scenes and Characters</p>
                                <h5>5 request per month</h5>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={cross}></img>
                            </div>
                            <div className='tickText'>
                                <h4>Screenplay Title Generations</h4>

                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={cross}></img>
                            </div>
                            <div className='tickText'>
                                <h4>Script Smart</h4>
                                <h3>Automatically format text into a screenplay format</h3>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={cross}></img>
                            </div>
                            <div className='tickText'>
                                <h4>Break Smart</h4>
                                <h3>Screenplay Breakdown</h3>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={cross}></img>
                            </div>
                            <div className='tickText'>
                                <h4>Writers Room</h4>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={cross}></img>
                            </div>
                            <div className='tickText'>
                                <h4>Plot Hole Detection</h4>
                            </div>
                        </div>
                        <div>
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                    {/* Basic Div start */}
                    <div id='basicprice'>
                        <div>
                            <h1>Basic</h1>
                            <hr></hr>
                        </div>
                        <div>
                            <p>Upgrade to our Basic plan for a budget-friendly option that unlocks additional functionalities.</p>
                        </div>
                        <div>
                            <h5>$17.99</h5>
                            <h1>$20.97</h1>
                            <Button>Subscribe</Button>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>Unlimited Screenplays</h6>
                                <p>Create as many screenplays as you want without limitation</p>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>Automatic Cloud sync and Backup</h6>

                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>History</h6>
                                <p>CAccess previous versions of your scripts.</p>
                                <h5>Last 3 days</h5>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>PDF and Final Draft export</h6>

                                <h5>Watermarked</h5>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>Brainstorming</h6>
                                <p>Brainstorm with Nolan: Ask Questions on Screenplay Writing.</p>
                                <h5>100 request per month</h5>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>Co Pilot/AI requests</h6>
                                <p>Ask AI change accent, continue dialogue, change ton of text</p>
                                <h5>30 request per month</h5>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>AI Image Generations</h6>
                                <p>Draw Scenes and Characters</p>
                                <h5>5 request per month</h5>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h4>Screenplay Title Generations</h4>

                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h4>Script Smart</h4>
                                <h3>Automatically format text into a screenplay format</h3>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h4>Break Smart</h4>
                                <h3>Screenplay Breakdown</h3>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={cross}></img>
                            </div>
                            <div className='tickText'>
                                <h4>Writers Room</h4>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={cross}></img>
                            </div>
                            <div className='tickText'>
                                <h4>Plot Hole Detection</h4>
                            </div>
                        </div>
                        <div>
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                    {/* Pro Div start */}

                    <div id='prodiv'>
                        <div>
                            <h1>Pro</h1>
                            <hr></hr>
                        </div>
                        <div>
                            <p>Experience the unlimited power and versatility of our Pro plan. Gain access to advanced features and priority support,</p>
                        </div>
                        <div>

                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>Unlimited Screenplays</h6>
                                <p>Create as many screenplays as you want without limitation</p>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>Automatic Cloud sync and Backup</h6>

                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>History</h6>
                                <p>CAccess previous versions of your scripts.</p>
                                <h5>Last 3 days</h5>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>PDF and Final Draft export</h6>

                                <h5>Watermarked</h5>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>Brainstorming</h6>
                                <p>Brainstorm with Nolan: Ask Questions on Screenplay Writing.</p>
                                <h5>100 request per month</h5>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>Co Pilot/AI requests</h6>
                                <p>Ask AI change accent, continue dialogue, change ton of text</p>
                                <h5>30 request per month</h5>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h6>AI Image Generations</h6>
                                <p>Draw Scenes and Characters</p>
                                <h5>5 request per month</h5>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h4>Screenplay Title Generations</h4>

                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h4>Script Smart</h4>
                                <h3>Automatically format text into a screenplay format</h3>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={tick}></img>
                            </div>
                            <div className='tickText'>
                                <h4>Break Smart</h4>
                                <h3>Screenplay Breakdown</h3>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={cross}></img>
                            </div>
                            <div className='tickText'>
                                <h4>Writers Room</h4>
                            </div>
                        </div>
                        <div className='priceUn'>
                            <div className='tick'>
                                <img src={cross}></img>
                            </div>
                            <div className='tickText'>
                                <h4>Plot Hole Detection</h4>
                            </div>
                        </div>
                        <div>
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                    {/* Enterprise */}
                    <div>
                        <div>
                            <h1>Enterprise</h1>
                            <hr></hr>
                        </div>
                        <div>
                            <p>All features unlimited in Pro plan and custom solutions</p>
                        </div>
                        <div>
                            <Button>Contact Us</Button>
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
            <div className='pricelist'>
            </div>
        </>
    )
}

export default Pricing