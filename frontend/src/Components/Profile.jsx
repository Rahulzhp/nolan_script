import React, { useEffect, useState } from 'react'
import logo from "../Images/logo.png"
import { Button, FormControl, FormLabel, Image, Input, Select, Textarea, useDisclosure } from '@chakra-ui/react'
import "../Styles/Frofile.css"
const Profile = () => {
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
            <div className='profilecont'>
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
                <div className='profile'>
                    <div>
                        <h1>User Info</h1>
                        <img src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'></img>
                        <h6>Full Name : <span>Rahul Das</span></h6>
                        <h6>Email : <span>Rahul Das</span></h6>
                        <h6>Subscription Plan : <span>Rahul Das (change plan)</span></h6>
                        <h6>Subscription Status : <span>Active</span></h6>
                        <Button>Logout</Button>
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
                            <div></div>
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
                            <div></div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile