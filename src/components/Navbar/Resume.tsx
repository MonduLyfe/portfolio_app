import '../../styles/Resume.scss'
import github from '../../images/github.png'
import linkedinlogo from '../../images/linkedinlogo.png'

const Resume = () => {
    return (
        <div>
            <div className='resume-container'>
                <div className="resume-box-one">
                    <h4 style={{ fontFamily: "Permanent Marker", fontSize: "3em", WebkitTextStroke: "1px #33FF33" }}>resume</h4>
                    <a href="https://github.com/MonduLyfe" style={{ textDecoration: "none" }}><img src={github} alt="" style={{ height: "3em", width: "3em" }} /></a>
                    <a href="https://www.linkedin.com/in/victor-gargurevich-103026155/" style={{ textDecoration: "none" }}><img src={linkedinlogo} alt="" style={{ height: "3em", width: "3em" }} /></a>
                    <div className="summary-box">
                        <p style={{ padding: "2em" }}>
                            <h3 style={{ fontFamily: 'Permanent Marker', marginRight: '1em', marginLeft: '1em' }}>Summary</h3>
                            Navy veteran and software developer with a proven track record of leadership, discipline, and problem-solving. 
                            Leveraging a diverse skillset attained through military service and education, brings a strong foundation in 
                            technical expertise, analytical thinking, and troubleshooting capabilities. Experienced in maintaining complex 
                            systems has guided me with the ability to approach tasks efficiently. Seeking to apply my talents to detail and 
                            commitment to excellence in a successful environment.
                        </p>
                    </div>

                    <div className="techstack-box">
                        <h3 style={{ fontFamily: 'Permanent Marker', marginRight: '1em', marginLeft: '1em' }}>Techstack</h3>
                        <p>
                            <h5>Languages:</h5>
                            Java, Python, JavaScript/TypeScript, HTML, CSS, SASS
                        </p>
                        <p>
                            <h5>Frameworks/Libraries:</h5>
                            React, React-Native, Vue, Django, Flask, Express, Node, Bootstrap, SQLAlchemy,
                            Marshmallow, PUG, Spring Boot, AWS
                        </p>
                        <p>
                            <h5>Database:</h5>
                            MySQL, PostgreSQL, NOSQL, MongoDB,
                        </p>
                    </div>

                    <div className="exp-box">
                        <h3 style={{ fontFamily: 'Permanent Marker', marginLeft: '1em', paddingTop: "1em", textAlign: "center" }}>Work Experience</h3>
                        <br />
                        <h4 style={{ textDecoration: "underline" }}>Oneil Digital Solutions</h4>
                        <p>A leading IT consulting firm specializing in optimization of complex end-to-end business process systems for multitude of business verticals including Financial, Digital Media, Healthcare, and Transportation industries.</p>
                        <h5>Software Engineer</h5>
                        <ul>
                            <li>Debugged errors and built optimal solutions to create multiple releases for company efficiency and consistency increasing production maintaining with Git version control. </li>
                            <li>Integrated end-to-end user data designs with OOP, Python, SQLAlchemy</li>
                            <li>Implemented front-end design for user experience to function with Flask APIs, VueJS, & Node.</li>
                            <li>Worked along teammates coordindating with slack, zoom & git control to build optimal solutions creating multiple releases for company efficiency.</li>
                            <li>Assisted in production support, managing client’s server utilizing Bash, Docker/Kubernetes & other Linux based shells.</li>
                        </ul>

                        <br />
                        <br />
                        <h4 style={{ textDecoration: "underline" }}>Seattle Promotional Management</h4>
                        <p>Campaign management Company that promotes client’s business and products to broader markets.</p>
                        <h5>Market Campaign Manager</h5>
                        <ul>
                            <li>Managed multiple campaigns with partnered companies following different strategies to promote products.</li>
                            <li>Launched successful initial campaigns building a relationship with new partners to ensure trust.</li>
                            <li>Visited client retail operations analyzing diverse demographics in several states to promote products and broaden sales.</li>
                        </ul>

                        <br />
                        <br />
                        <h4 style={{ textDecoration: "underline" }}>LA Fitness</h4>
                        <p>Chain of Health Fitness Clubs providing a wide range of programs and utilities</p>
                        <h5>Personal Triainer</h5>
                        <ul>
                            <li>Assisted clients to perform better than their capacity both physically and mentally to achieve desired fitness objectives.</li>
                            <li>Implemented personalized training programs tailored to individual fitness levels, goals, and preferences.</li>
                            <li>Provided, guided, and improved client’s knowledge to prevent injury and achieve a healthier life.</li>
                            <li>Maintained and organized a structured schedule for multiple clients to be able to attend appointments.</li>
                        </ul>



                        <br />
                        <br />
                        <h4 style={{ textDecoration: "underline" }}>US NAVY</h4>
                        <p>Naval force to empower and defend the interests of United States of America</p>
                        <h5>Culinary Specialist</h5>
                        <ul>
                            <li>Utilized effective communication, organization, and leadership to train, mentor, and coordinate 100+ Food Service Assistants in a high paced environment.</li>
                            <li>Established a 100% inventory status of 3 storerooms of approximately 250,000+ line items at sea and shore collaborating and maintaining proper stowage to ensure safety and sanitation.</li>
                            <li>Preserved a cycle of supplies to ensure food recipes have necessary ingredients for future operations.</li>
                            <ul>
                                <li> Deck Team
                                    <ul>
                                        <li>Dismantled old decks, recycled material, and prepped surfaces for new installation. </li>
                                        <li>Installed stratica flooring around pipes for safer surfaces throughout the ship</li>
                                        <li>Operated various hand power tools and chemical mixtures for solid walking decks.</li>
                                        <li>Assisted in the training of new deck team members, ensuring a safe and efficient work environment.</li>
                                    </ul>
                                </li>
                                <li> Flight Team
                                    <ul>
                                        <li>Responded in calls with team to coordinate cadence to ensure safe flight operations. </li>
                                        <li>Utilized, inspected, and stowed multiple flight equipment for future emergency operations.</li>
                                        <li>Prepared flight deck for safe landing for helicopter operations. </li>
                                    </ul>
                                </li>
                                <li> Lagging Team
                                    <ul>
                                        <li>Installed fiber material for bulkhead insulation using precision cutting and measuring techniques.</li>
                                        <li>Managed, stowed, and disposed of hazardous materials according to strict safety regulations, ensuring compliance with safety standards</li>
                                        <li>Applied coating for interior design purposes, creating a clean and professional appearance.</li>
                                    </ul>
                                </li>
                                <li>Pulper
                                    <ul>
                                        <li>Processed ship waste according to strict sanitary regulations, ensuring a clean and safe environment.</li>
                                        <li>Operated and maintained specialized equipment used in waste management, including compactors.</li>
                                        <li>Complied with all waste management procedures were followed accurately and efficiently, maintaining a high standard of cleanliness and safety on board the ship</li>
                                    </ul>
                                </li>
                            </ul>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="box-two">
                <div className="achievements-background">
                    <div className='achievements'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="80" fill="currentColor" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
                        </svg>
                        <br />
                        <h4>Top Sales</h4>
                        <br />
                        <p>Achieved top numbers in weekly sales for multiple products. Engaging with hundreds of customers throughout the day, creating and testing new ideas to successfully attract, present, and sale the product.</p>
                    </div>
                </div>
                <div className="achievements-background">
                    <div className='achievements'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="80" fill="currentColor" className="bi bi-boxes" viewBox="0 0 16 16">
                            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
                        </svg>
                        <br />
                        <h4>100% Inventory</h4>
                        <br />
                        <p>Managed multiple store rooms between dry, chill, and frozen food items. Organizing expiration dates, Stacking first in first out (FIFO) method, upkeep storeroom temperature, underway replenishments, and keeping inventory count of items in storage at all times during long deployments at sea.</p>
                    </div>
                </div>
                <div className="achievements-background">
                    <div className='achievements'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="80" fill="currentColor" className="bi bi-dribbble" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z" />
                        </svg>
                        <br />
                        <h4>Volleyball Champion MIP</h4>
                        <br />
                        <p>Three days weekly training after school, followed by personal trainer work. Leading to a college volleyball intramural championship and chosen as the MIP by teammates. </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Resume
