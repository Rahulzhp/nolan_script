import React from 'react'
import "../Styles/Login.css"
import { Button, Text, FormControl, FormLabel, Image, Input, Select, Textarea, useDisclosure } from '@chakra-ui/react'
import logo from "../Images/logo.png"

const Login = () => {
    return (
        <div className='logn'>
            <div className='loginMain'>
                <div className='loginLogo'>
                    <img src={logo} alt={logo}></img>
                </div>
                <div className='loginHed'>
                    <div>
                        <h1>Log in</h1>
                        <p>Log in to unlock the full Nolan Experience.</p>
                    </div>
                </div>
                <div className='loginCont'>
                    <div>
                        <div className='loginBtn'>
                            <div><Button width={"205px"} backgroundColor={"#cc5e5e"} color={"white"} borderRadius={"19px"}>Continue with Email</Button></div>
                            <div><Button width={"205px"} backgroundColor={"#cc5e5e"} color={"white"} borderRadius={"19px"}>Continue with Google</Button></div>
                            <div><Button width={"205px"} backgroundColor={"#cc5e5e"} color={"white"} borderRadius={"19px"}>Continue with Facebook</Button></div>
                            <Text>Forgot Password?</Text>
                        </div>
                        <div className='policy'>
                            <p>By signing up, you agree to the <span style={{ color: "blue" }}> Terms of Service </span>and <span style={{ color: "blue" }}>Privacy Policy</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login