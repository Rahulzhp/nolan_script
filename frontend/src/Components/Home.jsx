import React from 'react'
import { Image } from '@chakra-ui/react'
import logo from "../Images/logo.png"
import "../Styles/Home.css"

const Home = () => {
    return (
        <div className='contain'>
            <div className='home'>
                <div>
                    <Image src={logo} alt="logo"></Image>
                </div>
            </div>
        </div>
    )
}

export default Home