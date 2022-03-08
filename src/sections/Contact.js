import React from 'react';

function Contact() {
    return (
        <div id="contact-section" className="contact-wrapper">
            <h2 className="contact-header">Contact me!</h2>
            <div className="contact-links">
                <a href="https://github.com/Mollica-codes" target="_blank" className="contact-icons" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                <a href="https://codepen.io/MollicaCodes" target="_blank" className="contact-icons" rel="noreferrer"><i class="fa-brands fa-codepen"></i></a>
                <a href="https://www.linkedin.com/in/christophermollica/" target="_blank" className="contact-icons" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://www.freecodecamp.org/mollicacodes" target="_blank" className="contact-icons" rel="noreferrer"><i class="fa-brands fa-free-code-camp"></i></a>
            </div>
            <p>Email: Mollica.26@osu.edu</p>
        </div>
    );
}

export default Contact;