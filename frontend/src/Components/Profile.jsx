import React, { useEffect, useState } from 'react'
import logo from "../Images/logo.png"
import user from "../Images/user.png"
import { Button, FormControl, FormLabel, Image, Input, Select, Textarea, useDisclosure } from '@chakra-ui/react'
import "../Styles/Frofile.css"
import { Link, useNavigate } from 'react-router-dom'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
const Profile = () => {
    const navigate = useNavigate()
    const pro = JSON.parse(localStorage.getItem('user'));
    const name = pro.name
    const firstLetter = name.charAt(0).toUpperCase();
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

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/")
    }
    return (
        <>
            <div className='profilecont'>
                <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
                    <div>
                        <Link to="/"><Image src={logo} alt="logo"></Image></Link>
                    </div>
                    <div>
                        <div className='pages'>
                            <Link to="/" > Dashboard</Link>
                            {/* <p>About Us</p> */}
                            <Link > About Us</Link>
                            {/* <p>Pricing</p> */}
                            <Link to="/price" > Pricing</Link>
                            <p onClick={onOpen}>Create Script</p>
                            {/* <p>Blog</p> */}
                            {pro ? (
                                <Link to='/profile'>Profile</Link>
                            ) : (
                                <Link to='/login'>Login</Link>
                            )}
                        </div>
                    </div>
                </div>
                <div className='profile'>
                    <div>
                        <h1>User Info</h1>

                        <div id="proname"><h1>{firstLetter}</h1></div>
                        <h6>Full Name : <span>{pro.name}</span></h6>
                        <h6>Email : <span>{pro.email}</span></h6>
                        <h6>Subscription Plan : <span>{pro.sort} (<span id='plan'>change plan</span>)</span></h6>
                        <h6>Subscription Status : <span>Active</span></h6>
                        <Button onClick={logout}>Logout</Button>
                        <hr className='hrline'></hr>
                    </div>
                    <div>
                        <h1>Payment Methods</h1>
                        <div className='paymentstatus'>
                            <div className='paymentmode'>
                                <h4>Card</h4>
                                <h4>Last 4 Numbers</h4>
                                <h4>Expiration Date</h4>
                                <h4>Actions</h4>
                            </div>
                            <div><p>No Records found</p></div>
                        </div>
                        <hr className='hrline'></hr>
                    </div>
                    <div>
                        <h1>Billing History</h1>
                        <div className='paymentstatus'>
                            <div className='paymentmode'>
                                <h4>Amount</h4>
                                <h4>Status</h4>
                                <h4>Reason for failure</h4>
                                <h4>Description</h4>
                                <h4>Date</h4>
                                <h4>Receipt</h4>
                            </div>
                            <div><p>No Records found</p></div>
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
        </>
    )
}

export default Profile