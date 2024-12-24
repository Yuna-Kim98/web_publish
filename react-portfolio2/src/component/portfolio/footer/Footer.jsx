import React from 'react';
import Title from '../content/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const list = [
        { "href": "http://github.com", "icon": faGithub },
        { "href": "http://linkedin.com", "icon": faLinkedin }
    ];

    return (
        <footer id="contact" class="section">
            <Title title="Let's talk" description="jeon.developer.judy@gmail.com" />
            <ul class="contact__links">
                { list && list.map((item) =>
                    <li>
                        <a className="contact__link" href={item.href}><FontAwesomeIcon icon={item.icon} /></a>
                    </li>
                )}
            </ul>
            <p>Dream Software Engineer Judy - All right reserved</p>
        </footer>
    );
}