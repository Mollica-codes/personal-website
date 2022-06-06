import React from 'react';
import calculator from '../images/calculator.png';
import clock from '../images/25-clock.png';
import quote from '../images/quote.png';
import ecommerceSite from '../images/ecommerce-site.png';
import shooterGame from '../images/Space-shooter-photo.png';
import promptAI from '../images/prompt-project1.png';


function Projects() {
    return (
        <div id="project-section" className="projects-page">
            <h1 className="project-page-header">Recent Projects!</h1>
            <div className="project-wrapper">
                <a href="https://mollica-codes.github.io/online-product-site" target="_blank" rel="noreferrer">
                    <img className="project-img" src={ecommerceSite} alt="online product site"/>
                    Ecommerce Site</a>
                <a href="https://codepen.io/MollicaCodes/full/Jjrxopq" target="_blank" rel="noreferrer">
                    <img className="project-img" src={calculator} alt="calculator project"/>
                    JS Calculator</a>
                <a href="https://codepen.io/MollicaCodes/pen/qBPgEKe" target="_blank" rel="noreferrer">
                    <img className="project-img" src={clock} alt="25 + 5 clock project"/>
                    25 + 5 Clock</a>
                <a href="https://codepen.io/MollicaCodes/pen/oNGmvMW" target="_blank" rel="noreferrer">
                    <img className="project-img" src={quote} alt="random quote generator project"/>
                    Quote Generator</a>
                <a href="https://codepen.io/MollicaCodes/full/abEoQEv" target="_blank" rel="noreferrer">
                    <img className="project-img" src={shooterGame} alt="space shooter game"/>
                    Space Shooter</a>
                <a href="https://chris-prompt-ai.netlify.app/" target="_blank" rel="noreferrer">
                    <img className="project-img" style={{objectFit: 'fill'}} src={promptAI} alt="prompt ai project"/>
                    Prompt Generator</a>
            </div>
        </div>
    )
}

export default Projects;