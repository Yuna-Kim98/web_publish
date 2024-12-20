import React from 'react';
import Title from '../content/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer id="contact" class="section">
            <Title title="Let's talk" description="jeon.developer.judy@gmail.com" />
            <ul class="contact__links">
                <li>
                    <a class="contact__link" href="http://github.com"><FontAwesomeIcon icon={faGithub} /></a>
                </li>
                <li>
                    <a class="contact__link" href="http://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
                </li>
            </ul>
            <p>Dream Software Engineer Judy - All right reserved</p>
        </footer>
    );
}