import '../../styles/Home.scss'
import sscProfile from '../../images/ssc_profile_pic.png'
import spockhands from '../../images/spockhands.png'
import jsLogo from '../../images/logos/JavaScript-logo.png'
import tsLogo from '../../images/logos/Typescript_logo_2020.png'
import cssLogo from '../../images/logos/CSS3_logo.svg.png'
import htmlLogo from '../../images/logos/html5.webp'
import javaLogo from '../../images/logos/java-logo.png'
import nodeJSLogo from '../../images/logos/nodeJS-logo.png'
import pythonLogo from '../../images/logos/python-logo.png'
import reactLogo from '../../images/logos/React-logo.webp'
import vueJSLogo from '../../images/logos/vue-logo.png'
import mongoLogo from '../../images/logos/mongoDB-logo.png'
import postgresLogo from '../../images/logos/postgresql-logo.png'
import mysqlLogo from '../../images/logos/mysql-logo.png'
import githubLogo from '../../images/logos/github-logo.png'
import nextLogo from '../../images/logos/Nextjs-Logo.png'
import cSharp from '../../images/logos/CsharpLogo.jpg'
import awsLogo from '../../images/logos/aws-logo.png'
import unityLogo from '../../images/Unity-Logo.png'
import '../../styles/About.scss';


const About = () => {
    return (
        <div className='about-container'>
            <div className="box-one">
                <div className="text-bubble">
                    <p>
                        {/* lets make a jokes api in the text bubble */}
                        <img className="spockhands" src={spockhands} alt="logo" />
                        Greetings!
                        <br />
                        I'm a Software Developer
                    </p>
                </div>

                <section className="left-box">
                    <div className="profile_pic">
                        <img src={sscProfile} alt="library" />
                    </div>
                    <div className="profile_description">
                        <ul>
                            <h2>
                                Greetings !
                            </h2>
                            <li>I am an Korean American Navy Veteran and I am your guy when you want to talk about anything and everything. I started my coding journey with Standfords Code in Place program in 2020 and have loved it ever since. I love to know a little about a lot and deep dive to understand how something works. When something is broken I have to learn why, or I cannot feel at ease. I continue to advance my craft in order to be the best Software Developer I can be.</li>
                        </ul>
                    </div>
                </section>

                <section className="right-box">
                    <h3>TechStack</h3>
                    <ul>
                        <div className='techStack-box'>
                            <li>JavaScript</li>
                            <img src={jsLogo} alt="logo" style={{ marginTop: "10px" }} />
                        </div >
                        <div className='techStack-box' >
                            <li>TypeScript</li>
                            <img src={tsLogo} alt="logo" style={{ marginTop: "10px" }} />
                        </div>
                        <div className='techStack-box'>
                            <li>Java</li>
                            <img src={javaLogo} alt="logo" />
                        </div>
                        <div className='techStack-box'>
                            <li>C#</li>
                            <img src={cSharp} alt="logo" style={{ width: "60px", marginTop: "12px" }} />
                        </div>
                        <div className='techStack-box'>
                            <li>Python</li>
                            <img src={pythonLogo} alt="logo" style={{ marginTop: "12px" }} />
                        </div>
                        <div className='techStack-box'>
                            <li>HTML</li>
                            <img src={htmlLogo} alt="logo" style={{ width: "80px" }} />
                        </div>
                        <div className='techStack-box'>
                            <li>CSS/SASS</li>
                            <img src={cssLogo} alt="logo" style={{ marginTop: "5px" }} />
                        </div>
                    </ul>
                    <ul>
                        <div className='techStack-box'>
                            <li>React/Native</li>
                            <img src={reactLogo} alt="logo" style={{ marginTop: "10px" }} />
                        </div>
                        <div className='techStack-box'>
                            <li>VueJS</li>
                            <img src={vueJSLogo} alt="logo" style={{ marginTop: "10px" }} />
                        </div>
                        
                        <div className='techStack-box'>
                            <li>Node</li>
                            <img src={nodeJSLogo} alt="logo" style={{ width: "5em", marginTop: "7px" }} />
                        </div>
                        <div className='techStack-box' >
                            <li>Git Control</li>
                            <img src={githubLogo} alt="logo" style={{ width: "70px" }} />
                        </div>
                        <div className='techStack-box' >
                            <li>NextJS</li>
                            <img src={nextLogo} alt="logo" style={{ width: "70px"}} />
                        </div>
                        <div className='techStack-box' >
                            <li><h6> AWS Cloud Practitoner</h6></li>
                            <img src={awsLogo} alt="logo" style={{ width: "70px"}} />
                        </div>
                        <div className='techStack-box' >
                            <li><h6> Unity Engine</h6></li>
                            <img src={unityLogo} alt="logo" style={{ width: "70px", marginTop:"7px"}} />
                        </div>
                    </ul>

                    <ul>
                        <div className='techStack-box'>
                            <li>PostgreSQL</li>
                            <img src={postgresLogo} alt="logo" style={{ width: "7vw" }} />
                        </div>
                        <div className='techStack-box'>
                            <li>MySQL</li>
                            <img src={mysqlLogo} alt="logo" style={{ width: "70px", marginTop: "12px" }} />
                        </div>
                        <div className='techStack-box'>
                            <li>MongoDB</li>
                            <img src={mongoLogo} alt="logo" />
                        </div>
                    </ul>
                </section>

            </div>
            

        </div >
    )
}

export default About