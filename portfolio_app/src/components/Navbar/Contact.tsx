import linkedinlogo from '../../images/linkedinlogo.png'
import '../../styles/Contact.scss'

// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';


const Contact = () => {
    // const form = useRef();

    // const sendEmail = (e: any) => {
    //     e.preventDefault();
    // }

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });


return (
    <div className='container'>
        <div className="contact-box-one">
            <p style={{ fontFamily: 'Permanent Marker', fontSize: "2em" }}>
                {/* This portfolio is still in progress. I am currently working on advancing my Java skills as well as learning Kotlin and other React Libraries such as react native */}
            </p>
            I am currently Working on a project designed for real estate funding. Utilizing Java, React, and Postgresql. This project is intended to help the realestate industry and challenge myself to push far into solving every problem I could possilby run into.
            So far I have created the frontend work for visualization and presentation along with JWT authentication (nightmare).
            <br />
            <br />
            <p>you can check out the rough version here</p>
            <h6><a href="https://gbeidevelopmentsolutions.netlify.app">G-BEI development Solutions</a></h6>
            <p style={{ fontFamily: 'Permanent Marker', fontSize: "2em" }}>you can reach me now at</p>
            <h3>victorGdeveloper@gmail.com</h3>
            <a href="https://www.linkedin.com/in/victor-gargurevich-103026155/" style={{ textDecoration: "none" }}><img src={linkedinlogo} alt="" style={{ height: "3em", width: "3em" }} /></a>
        </div>

        {/* <div className="box-contact">
            <h1>Contact</h1>
            <Form onSubmit={sendEmail}>
                <Form.Group className='input' controlId="Name">
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className='input' controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className='input' controlId="formGridPhone">
                        <Form.Control type="phone" placeholder="phone number" />
                    </Form.Group>
                    <Form.Group className='input' controlId="Title">
                        <Form.Control type="text" placeholder="Title" />
                    </Form.Group>
                    <Form.Group className='input' controlId="formGridMessage">
                        <Form.Control as="textarea" style={{ height: '10em', fontSize: "larger", margin: "1em", borderRadius: "1em" }} placeholder="How can we help you?" />
                    </Form.Group>

                <Button variant="primary" type="submit" style={{ fontSize: "1.5em" }}>
                    Submit
                </Button>
            </Form>
        </div> */}

    </div>
)
}

export default Contact
