import React from 'react'
import '../../styles/Footer.scss'
import { Button } from 'react-bootstrap'
import resume from '../../Victor_Gargurevich-Main_Code_Resume_3.0.pdf'

const Footer: React.FC = () => {
    return (
        <div className='footer-container'>
            <a href={resume} download="Victor_Gargurevich_Code_Resume.pdf">
                <Button>Download Resume</Button>
            </a>
            <p>
                Created using typescript/react
            </p>
        </div>
    )
}

export default Footer