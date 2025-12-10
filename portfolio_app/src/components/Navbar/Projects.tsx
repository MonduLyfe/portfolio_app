import '../../styles/Projects.scss'
import starwars from '../../images/starwars.png'
import lae from '../../images/lae.png'
import shooterprofile from '../../images/shooterprofile.png'
import GBEI from '../../images/GDS.png'
import github from '../../images/github.png'
import hackerAlgo from '../../images/hackerhero_algo_track.png'
import GearUp from '../../images/GearUpWebDev.png'
import fistaxEcom from '../../images/fitstaxEcommerce.png'
import RAG from '../../images/RAG_ai.png'
import ChatHub from '../../images/ChatHub.png'
import SpaceZoomies from '../../images/spacezoomies.png'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <div>
            <div className='algo-box'>
                <h4>HackerHero Algo Completed</h4>
                <img src={hackerAlgo} alt="logo" />
            </div>
            <div className='projects-container' style={{ padding: "3em" }}>
                <h4>
                    <p>
                        🔥🔥🔥🔥
                        <a href="https://github.com/MonduLyfe" style={{ textDecoration: "none" }}><img src={github} alt="" style={{ height: "3em", width: "3em" }} /></a>
                        🔥🔥🔥🔥
                    </p>
                    <br />
                </h4>

                <h3>SpaceZoomies</h3>
                <div className="projects-box">
                    <img src={SpaceZoomies} alt="" style={{ borderRadius: "1.2vw" }} />
                    <ul>
                        <br />
                        <li><h4><Link to='https://mondulyfe.itch.io/space-zoomies' className=''>https://mondulyfe.itch.io/spacezoomies</Link></h4></li>
                        <h5>Learned how to utilize Unity Engine 6 to challenge myself and test my C# knowledge</h5>
                        <h6>After months of tutorials, practicings, and understanding the unity language, I have created my first 2D game and will someday move on to 3D. I created it to test my C# knowledge and to prove to myself I did it though I had much AI help. </h6>
                        <li>Assets are all imported through Itch.io except for the burst of air</li>
                        <li>Soundeffects, Audio, Music, all designed by myself utilizing Ableton DAW system.</li>
                    </ul>
                        <br />
                </div>
                <br />
                <br />
                <br />
                <h3>KaraChat</h3>
                <div className="projects-box">
                    <img src={ChatHub} alt="" style={{ borderRadius: "1.2vw" }} />
                    <ul>
                        <br />
                        <h5>ChatHub utilizing SignalR To Understand Websockets</h5>
                        <br />
                    </ul>
                </div>
                <br />
                <br />
                <br />
                    <h3>RAG AI</h3>
                <div className="projects-box">
                    <img src={RAG} alt="" style={{ borderRadius: "1.2vw" }} />
                    <ul>
                        <h5>Python AI Chatbox created to step into the realm of Artificial Intelligence and Machine Learning</h5>
                        <h6>AI ChatBox that is integrated with private data</h6>
                        <li>Utilizing Llama-index and Panda users will be able to use a Ai Chatbox to receive Query results and other specific information requests to the data.</li>
                        <br />
                        <br />
                    </ul>
                </div>
                <br />
                <br />
                <br />
                <h3>GBEI Development Solutions</h3>
                <div className="projects-box">
                    <img src={GBEI} alt="" style={{ borderRadius: "1.2vw" }} />
                    <ul>
                        <h5>Fullstack application to test, challenge, and exceed the limits to my understanding in Java, PostgreSQL and React/Typscript. </h5>
                        <h6>Users will be able to fund their real estate project while maintaining their asset portfolios.</h6>
                        <li>Implemented JSON Web Tokens authentication with Java and Postgres for users and secured account with password hashing </li>
                        <li>Utilized Spring Data JPA to interact with PostgreSQL database to store data for models </li>
                        <br />
                        <li>work in progress...</li>
                        <br />
                    </ul>
                </div>
                <br />
                <br />
                <br />

                <h3>Latinos Auto Electric</h3>

                <div className="projects-box">
                    <img src={lae} alt="" style={{ borderRadius: "1.2vw" }} />
                    <ul>
                        <h5>Full stack application to try adding a new techinque using MySql for M in MERN stack</h5>
                        <h6>Owner can easily communicate, set appointments, and inform users about company. </h6>
                        <li>Collaborated remotely and leveraged  GitHub, Zoom, and Discord with client and team. Exploited agile methodology and daily standups to plan, coordinate, and deliver a functional MVC.</li>
                        <li>Built end-to-end using Node.JS and React framework including leading collaborative discovery meetings with client, wireframing user journey, and creating a prototype that aligned with requirements and business needs.</li>
                        <li>Developed a robust scalable SQL database utilizing Sequelize that saved user data and enabled users to schedule appointments thereby streamlining administrative processes.</li>
                    </ul>
                </div>
                <br />
                <br />
                <br />

                <h3>FireArms Profile</h3>
                <div className="projects-box">
                    <img src={shooterprofile} alt="" style={{ borderRadius: "1.2vw" }} />
                    <ul>
                        <h5>App designed to test most advanced python techniques w/ multiple different libraries and learning VueJS</h5>
                        <h6>Users can build their own basic profile in what firearms they use with descriptions </h6>
                        <li>Built to utilize advance python techniques with Flask, WSGI, Marshmallow, PostgreSQL, and APIs </li>
                        <li>Using yarn, Pug, and VueJS Lifecycle to create a front-end to navigate through full stack application.</li>
                    </ul>
                </div>
                <br />
                <br />
                <br />

                <h3>FitStax</h3>
                <div className="projects-box">
                    <img src={fistaxEcom} alt="" style={{ borderRadius: "1.2vw" }} />
                    <ul>
                        <h5>Created an Ecommerce website for fitness merchandise and products</h5>
                        <h6>Users can Learn about fitness and purchase merchandise </h6>
                        <li>Built to understand the necessary components needed in an Ecommerce website</li>
                        <li>Used AI to generate images and understand prompts and how to use AI</li>
                        <li>Added MUX video player because of NextJS video player challenges.(later removed for production purposes)</li>
                    </ul>
                </div>
                <br />
                <br />
                <br />

                <h3>StarWars Profile</h3>
                <div className="projects-box">
                    <img src={starwars} alt="" style={{ borderRadius: "1.2vw" }} />
                    <ul>
                        <h5>Created to challenge my newly developed skills front-end to back-end MERN stack.</h5>
                        <h6>You can create your own padawan, choose your lightsaber, attributes, master, and which side of the force</h6>
                        <li>Built application Utilizing MERN implementing Star Wars API using AXIOS to visually display Star Wars characters and stats</li>
                        <li>Leveraged Mongo database designing all models and RESTful APIs to store user Characters</li>
                        <li>Designed front-end with CSS, Material UI and third-party framer library for animated effects.</li>
                    </ul>
                </div>
                <br />
                <br />
                <br />

                <h3>GearUp WebDev Solutions</h3>
                <div className="projects-box">
                    <img src={GearUp} alt="" style={{ borderRadius: "1.2vw" }} />
                    <ul>
                        <h5>Frontend application for freelance work. utiliizing the new Next.js 14, ReactEmail, and Resend</h5>
                        <h6>Clients will be able to contact me for any services for web design and software</h6>
                        <li>With create-react-app no longer in use. Updated my frontend knowledge with Next.js </li>
                        <li>utilized new email API for developers, React Email and Resend.</li>
                    </ul>
                </div>
                <br />
                <br />
                <br />

                <div className="bottom-box">
                    <h4>other projects are not designed for eye candy, more for functionality 😊</h4>
                    <ul style={{ alignContent: "center", listStyleType: "none" }}>
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
                            <a href="https://github.com/MonduLyfe" style={{ textDecoration: "none" }}><img src={github} alt="" style={{ height: "3em", width: "3em" }} /></a>
                            🔥🔥🔥🔥
                        </p>
                    </h4>
                </div>
            </div>





        </div>
    )
}

export default Projects