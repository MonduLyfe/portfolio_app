import '../../styles/Home.scss'

import 'bootstrap/dist/css/bootstrap.min.css'; //
import { useEffect, useState } from 'react';


const Home = () => {
    const [intro] = useState<string[]>(['HELLO!', 'YOU ARE ENTERING']); // Text for each line
    const [typedLines, setTypedLines] = useState<string[]>([]); // Lines that have been typed out
    const [fadeInComplete] = useState<boolean>(false);

    useEffect(() => {
        const typingDelay = 2500; // Delay between typing of each line (milliseconds)
        let timeout = 0;

        intro.forEach((line, index) => {
            timeout += typingDelay; // Increment delay for each line
            setTimeout(() => {
                setTypedLines(prevLines => [...prevLines, line]); // Add the line to typedLines
            }, timeout);
        });
    }, [intro]); // Empty dependency array to run only once

    return (
        <div className="home-container">

            <section className={`intro-box ${fadeInComplete ? 'fade-out' : ''}`}>
                {typedLines.map((line, index) => (
                    <p key={index}>{line}</p> // Render each typed line
                ))}
            </section>
            <div className="title">
                Victors Portfolio
            </div>

        </div>
    )
}

export default Home