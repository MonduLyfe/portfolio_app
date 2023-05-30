import React from 'react'
import '../../styles/Projects.scss'
import starwars from '../../images/starwars.png'
import lae from '../../images/lae.png'
import shooterprofile from '../../images/shooterprofile.png'
import github from '../../images/github.png'

const Projects = () => {
    return (
        <div className='projects-container'>

            <h3>FireArms Profile</h3>
            <div className="projects-box">
                <ul>
                    <p>App designed to test most advanced python techniques w/ multiple different libraries and learning VueJS</p>
                    <p>Users can build their own basic profile in what firearms they use with descriptions </p>
                    <li>Built to utilize advance python techniques with Flask, WSGI, Marshmallow, PostgreSQL, and APIs </li>
                    <li>·	Using yarn, Pug, and VueJS Lifecycle to create a front-end to navigate through full stack application.</li>
                </ul>
                <img src={shooterprofile} alt=""/>
            </div>
            <br />
            <br />
            <h3>Latinos Auto Electric</h3>
            <div className="projects-box">
                <img src={lae} alt=""/>
                <ul>
                    <p>Full stack application to try adding a new techinque using MySql for M in MERN stack</p>
                    <p>Owner can easily communicate, set appointments, and inform users about company. </p>
                    <li>Collaborated remotely and leveraged  GitHub, Zoom, and Discord with client and team. Exploited agile methodology and daily standups to plan, coordinate, and deliver a functional MVC.</li>
                    <li>Built end-to-end using Node.JS and React framework including leading collaborative discovery meetings with client, wireframing user journey, and creating a prototype that aligned with requirements and business needs.</li>
                    <li>Developed a robust scalable SQL database utilizing Sequelize that saved user data and enabled users to schedule appointments thereby streamlining administrative processes.</li>
                </ul>
            </div>
            <br />
            <br />
            <h3>StarWars Profile</h3>
            <div className="projects-box">
                <ul>
                    <p>Created to challenge my newly developed skills front-end to back-end MERN stack.</p>
                    <p>You can create your own padawan, choose your lightsaber, attributes, master, and which side of the force</p>
                    <li>Built application Utilizing MERN implementing Star Wars API using AXIOS to visually display Star Wars characters and stats</li>
                    <li>Leveraged Mongo database designing all models and RESTful APIs to store user Characters</li>
                    <li>Designed front-end with CSS, Material UI and third-party framer library for animated effects.</li>
                </ul>
                <img src={starwars} alt=""/>
            </div>
            <br />
            <br />
            <h4>other projects are not designed for eye candy, more for functionality 😊</h4>
            <ul style={{alignContent:"center", listStyleType: "none"}}>
                <li>Book Authors - TypeScript/React, Java/SpringBoot</li>
                <li>ShoppingCart - TypeScript/React</li>
                <li>TodoList - Every language I know</li>
                <li>etc...</li>
            </ul>
            <br />
            <h4>
                check out my github
                <p>
                    🔥🔥🔥🔥
                    <a href="https://github.com/MeloVicG" style={{textDecoration:"none"}}><img src={github} alt="" style={{height:"3em", width:"3em"}}/></a>
                    🔥🔥🔥🔥
                </p>
            </h4>
        </div>
    )
}

export default Projects