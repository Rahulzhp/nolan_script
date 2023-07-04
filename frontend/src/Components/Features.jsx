import React from 'react'
import into from "../Images/intro.png"
import acent from "../Images/accent.png"
import suggestion from "../Images/suggestion.png"
import histr from "../Images/histry.png"
import script from "../Images/script_smart.png"

import "../Styles/Features.css"

const Features = () => {
    return (
        <div>
            <div className='Features'>
                <div>
                    <h1>Features</h1>
                    <div className='featurediv'>
                        <div className='featureImg'>
                            <img src={into} alt={into}></img>
                        </div>
                        <div className='featureTitle'>
                            <h1>THE INDUSTRY STANDARD SCRIPT WRITING SOFTWARE</h1>
                            <p>Nolan provides a user-friendly interface, advanced formatting options, and helpful features such as character and scene breakdowns, revision tracking, and collaboration tools. With its powerful tools and intuitive design.</p>
                        </div>
                    </div>
                    <div className='acent'>
                        <div className='acentTitle'>
                            <h1>TRACK EVERY EDIT WITH EASE</h1>
                            <p>A per-row script history list is a feature in scriptwriting software that allows writers to track changes made to their scripts on a row-by-row basis. With this feature, writers can see a complete history of edits made to each line of dialogue, stage direction, or action in their script. This makes it easy to compare different versions of a script and to identify where changes have been made. The per-row script history list is an essential tool for writers who want to keep track of their progress and ensure that their scripts are always up-to-date.</p>
                        </div>
                        <div className='acentImg'>
                            <img src={histr} alt={into}></img>
                        </div>
                    </div>
                    <div className='featurediv'>
                        <div className='featureImg'>
                            <img src={suggestion} alt={into}></img>
                        </div>
                        <div className='featureTitle'>
                            <h1>ASK NOLAN FOR SUGGESTION</h1>
                            <p>To help you create high-quality story, Nolan offers a powerful editing feature. With "Ask Nolan", you can easily enhance the quality of your text by highlighting the selected text, correcting any spelling and grammar errors, and adjusting the tone of the paragraph as necessary. This feature provides you with the flexibility to customize your text and make it more engaging and effective.</p>
                        </div>
                    </div>
                    <div className='acent'>
                        <div className='acentTitle'>
                            <h1>CHANGE YOUR CHARACTER ACCENT</h1>
                            <p>Personalize your character and make it truly unique. "Change Accent" allows you to change your character's accent, making it sound more distinct and authentic. Whether you want to add a touch of personality to your character or create a character that stands out, this feature provides you with the flexibility to customize your character's accent to match your preferences. With this feature, you can create a character that truly represents you and brings your story to life.</p>
                        </div>
                        <div className='acentImg'>
                            <img src={acent} alt={into}></img>
                        </div>
                    </div>
                    <div className='featurediv'>
                        <div className='featureImg'>
                            <img src={script} alt={into}></img>
                        </div>
                        <div className='featureTitle'>
                            <h1>SCRIPT SMART</h1>
                            <p>
                                SCRIPT SMART
                                Script Smart uses advanced algorithms to automatically format your text into a screenplay format. With Script Smart, you can save time and focus on writing by letting the software handle the formatting for you. This feature also provides suggestions and corrections to help ensure that your screenplay adheres to industry standards and is formatted correctly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features