import React from 'react'
import "../Styles/Footer.css"
import insta from "../Images/instagram.png"
import twit from "../Images/twitter.png";
import youtube from "../Images/youtube.png"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerItem'>
                <div className='footerL'>
                    <h6>© Nolan 2023</h6>
                    <p>Privacy Policy|Terms of Service</p>
                </div>
                <div className='footerM'>
                    <div>
                        <h6>Follow Us:</h6>
                    </div>
                    <div className='footerMimg'>
                        <div>
                            <img src={insta}></img>
                            <img src={twit}></img>
                            <img src={youtube}></img>
                        </div>
                    </div>
                </div>
                <div className='footerR'>
                    <h6>hello@nolanai.app</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer