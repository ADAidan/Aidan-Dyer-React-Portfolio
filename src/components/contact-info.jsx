import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faDownload, faFile } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './contact-form';
import './contact-info.css';

export default function ContactInfo() {
    return (
        <div className='contact-container'>
            <div className="contact-info">
                <h1>Contact Info</h1>
                <p><FontAwesomeIcon icon={faPhone} /><a>401-390-9638</a></p>
                <p><FontAwesomeIcon icon={faEnvelope} /><a>ADyer4201@gmail.com</a></p>
                <p><FontAwesomeIcon icon={faGithub} /><a href='https://github.com/ADAidan' target='_blank'>ADAidan</a></p>
                <p><FontAwesomeIcon icon={faLinkedin} /><a href='https://www.linkedin.com/in/aidan-dyer-017462224/' target='_blank'>Aidan Dyer</a></p>
            </div>
            <div className='resume-contact-form-container'>
                <div className='resume-container'>
                    <h1>My Resume</h1>
                    <div className='resume-links-container'>
                        <p><FontAwesomeIcon icon={faFile} /><a href="/aidan_dyer_resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a></p>
                        <p><FontAwesomeIcon icon={faDownload} /><a href='/aidan_dyer_resume.pdf' download>Download Resume</a></p>
                    </div>
                </div>
                <div className='contactform-container'>
                    <h1>Send Me a Message</h1>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}