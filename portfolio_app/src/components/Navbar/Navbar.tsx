import React from 'react'
import '../../styles/Navbar.scss'
import { Link } from 'react-router-dom'
import cubepic from '../../images/cube.png'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className="mainbar">

                <ul>
                    <ol><Link to='' className='link'>Home</Link></ol>
                    {/* <ol><Link to='about' className='link'>About</Link></ol> */}
                    <ol><Link to='projects' className='link'>Projects</Link></ol>
                    <ol><Link to='resume' className='link'>Resume</Link></ol>
                    <ol><Link to='contact' className='link'>Contact</Link></ol>
                    {/* <ol>Contact</ol> */}
                </ul>
            </div>
        </div>
    )
}

export default Navbar