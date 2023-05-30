import React from 'react'
import '../../styles/Resume.scss'
import github from '../../images/github.png'
import linkedinlogo from '../../images/linkedinlogo.png'

const Resume = () => {
    return (
        <div className='resume-container'>
            <div className="resume-box-one"> <p style={{fontFamily:"Permanent Marker", fontSize:"3em"}}>resume</p>
            <a href="https://github.com/MeloVicG" style={{textDecoration:"none"}}><img src={github} alt="" style={{height:"3em", width:"3em"}}/></a>
            <a href="https://www.linkedin.com/in/victor-gargurevich-103026155/" style={{textDecoration:"none"}}><img src={linkedinlogo} alt="" style={{height:"3em", width:"3em"}}/></a>
                <div className="summary-box">
                    <p> 
                        <h3 style={{ fontFamily: 'Permanent Marker', marginRight: '1em', marginLeft: '1em' }}>Summary</h3>
                        Navy Veteran with 2 years of software engineer experience, proficient in programming languages such as Java, Python, and JavaScript. Strong problem-solving skills, communication, and ability to collaborate with others has aided in successful completion of an intensive 14-week coding bootcamp. I have enjoyed the challenges, leadership, and critical thinking involved adapting with a team to accomplish projects. Highly motivated and eager to contribute my skills to a dynamic software development team.
                    </p>
                </div>

                <div className="techstack-box" style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"1em"}}>
                    <h3 style={{ fontFamily: 'Permanent Marker', marginRight: '1em', marginLeft: '1em' }}>Techstack</h3>
                    <p>
                        <h5>Languages:</h5> 
                        Java, Python, JavaScript/TypeScript, HTML, CSS, SASS
                    </p>
                    <p>
                        <h5>Frameworks/Libraries:</h5> 
                        React, Vue, Django, Flask, Express, Node, Bootstrap, SQLAlchemy,
                        Marshmallow, PUG, Spring Boot, AWS S3
                    </p>
                    <p>
                        <h5>Database:</h5> 
                        MySQL, PostgreSQL, NOSQL, MongoDB,
                    </p>
                </div>

                <div className="exp-box" style={{textAlign:"left", paddingLeft:"2em", paddingBottom:"1em"}}>
                    <h3 style={{ fontFamily: 'Permanent Marker', marginLeft: '1em', paddingTop:"1em", textAlign:"center" }}>Work Experience</h3>
                    <h4 style={{textDecoration:"underline"}}>Oneil Digital Solutions</h4> 
                    <p>A leading IT consulting firm specializing in optimization of complex end-to-end business process systems for multitude of business verticals including Financial, Digital Media, Healthcare, and Transportation industries.</p>
                    <h5>Software Engineer</h5>
                    <ul>
                        <li>Developed solutions for clients using Company and Python libraries, resulting in increased efficiency and client satisfaction.</li>
                        <li>Maintained data structure processes as part of full stack implementations with OOP, SQLAlchemy, & Marshmallow.</li>
                        <li>Iterated front-end design for user experience to function with Flask APIs, VueJS, & Node.</li>
                        <li>Worked along teammates to build optimal solutions to create multiple releases for company efficiency.</li>
                        <li>Assisted in production support managing company and client’s software to maintain servers.</li>
                    </ul>

                    <h4 style={{textDecoration:"underline"}}>Seattle Promotional Management</h4>
                    <p>Campaign management Company that promotes client’s business and products to broader markets.</p>
                    <h5>Market Campaign Manager</h5>
                    <ul>
                        <li>Managed multiple campaigns with partnered companies following different strategies to promote products.</li>
                        <li>Launched successful initial campaigns building a relationship with new partners to ensure trust.</li>
                        <li>Visited client retail operations analyzing diverse demographics in several states to promote products and broaden sales.</li>
                    </ul>

                    <h4 style={{textDecoration:"underline"}}>US NAVY</h4>
                    <p>Naval force to empower and defend the interests of United States of America</p>
                    <h5>Culinary Specialist</h5>
                    <ul>
                        <li>Utilized effective communication, organization, and leadership to train, mentor, and coordinate 100+ Food Service Assistants in a high paced environment.</li>
                        <li>Established a 100% inventory status of 3 storerooms of approximately 250,000+ line items at sea and shore collaborating and maintaining proper stowage to ensure safety and sanitation.</li>
                        <li>Preserved a cycle of supplies to ensure food recipes have necessary ingredients for future operations.</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Resume