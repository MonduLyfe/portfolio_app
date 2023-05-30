import '../../styles/Home.scss'
import citypic from '../../images/city_profile_pic.png'
import spockhands from '../../images/spockhands.png'
import alaskaice from '../../images/alaskaice.jpg'
import halloween_knights from '../../images/halloween_knights.jpg'
import the_boys from '../../images/the_boys.jpg'
import volleyball from '../../images/volleyball.png'
import steampose from '../../images/steampose.jpg'

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; //


const Home = () => {
    return (
        <div className="home-container">
            <div className="box-one">
                <ul>
                    <h4>
                        Greetings
                        <img className="spockhands"src={spockhands} alt="" />
                    </h4>
                    <li>I am an Korean American and I am your guy when you want to talk about anything and everything. I love to know a little about a lot and in most cases, doing a deep dive to understand how something works. When something is broken I have to learn why, or I cannot feel at ease. </li>
                    <br />
                    <li>I have been a fitness person ever since I joined the football team. I use to be the small scrawny kid who gets bullied everyday and after studying how to properly conduct myself while exercising, I became much more confident in my everyday actions and loved it so much I decided to help others be more confident in themselves.</li>
                    <br />
                    <li>If anybody has information about anything I enjoy listening and soaking in the data. I enjoy listen to many podcasts, my favorite being on the topic of economic market trends, it is an easy way to understand why the stock market works the way that it does. </li>
                    <br />
                    <li>Im a big football person, we can go back and forth all day specially when it comes to fantasy</li>
                    <br />
                    <li>I started my tech Journey since 2020. Ive always had an interest for code but never thought I had it in me to pursue it. I have many friends in the industry and decided to shoot for the sky and now I feel like I can let my imagination go wild. </li>
                    <br />
                    <li>I am interested in having all kinds of conversations, I find it a pleasure people are willing to share what they know with me. Get to know me and I look forward to having a conversation with you</li>

                </ul>


                <div className="img-background">
                    <img src={citypic} alt="seattle rooftop" />
                </div>
                {/* <img className="coolines-one" src={coollines} alt="" /> */}
                {/* <img className="coolines-two" src={coollines} alt="" /> */}
                
            </div>

            <div className="box-two">
                <div className="achievements-background">
                    <div className='achievements'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="80" fill="currentColor" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
                        </svg>
                        <h4>Top Sales</h4>
                        <p>Achieved top numbers in weekly sales for multiple products. Engaging with hundreds of customers throughout the day, creating and testing new ideas to successfully attract, present, and sale the product.</p>
                    </div>
                </div>
                <div className="achievements-background">
                    <div className='achievements'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="80" fill="currentColor" className="bi bi-boxes" viewBox="0 0 16 16">
                            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
                        </svg>
                        <h4>100% Inventory</h4>
                        <p>Managed multiple store rooms between dry, chill, and frozen food items. Organizing expiration dates, Stacking first in first out (FIFO) method, upkeep storeroom temperature, underway replenishments, and keeping inventory count of items in storage at all times during long deployments at sea.</p>
                    </div>
                </div>
                <div className="achievements-background">
                    <div className='achievements'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="80" fill="currentColor" className="bi bi-dribbble" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z" />
                        </svg>
                        <h4>Volleyball Champion MVP</h4>
                        <p>Three days weekly training after school, followed by personal trainer work. Leading to a college volleyball intramural championship and chosen as the MVP by teammates. (also scored the winning game point in a tie game) </p>
                    </div>
                </div>
            </div>

            <div className="box-three">
                <div className="img-background">
                    <Carousel fade>
                        <Carousel.Item interval={2000}>
                            <img src={alaskaice} alt="" />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src={halloween_knights} alt="" />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src={the_boys} alt="" />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src={steampose} alt="" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

        </div>
    )
}

export default Home