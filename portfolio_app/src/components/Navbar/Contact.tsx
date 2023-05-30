import React from 'react'
import linkedinlogo from '../../images/linkedinlogo.png'
import '../../styles/Contact.scss'

const Contact = () => {
    return (
        <div className='container'>
            <div className="contact-box-one">
                <p style={{fontFamily: 'Permanent Marker', fontSize: "2em"}}>
                    This portfolio is still in progress. I am currently working on advancing my Java skills as well as learning Kotlin and other React Libraries such as react native
                </p>
                <p style={{fontFamily: 'Permanent Marker', fontSize: "2em"}}>you can reach me now at LinkedIn</p>
                <a href="https://www.linkedin.com/in/victor-gargurevich-103026155/" style={{textDecoration:"none"}}><img src={linkedinlogo} alt="" style={{height:"3em", width:"3em"}}/></a>
            </div>
        </div>
    )
}

export default Contact