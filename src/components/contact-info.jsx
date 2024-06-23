import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faDownload, faFile } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './contact-form';
import './contact-info.scss';

export default function ContactInfo() {
    return (
        <div className='contact-container'>
            <div className="contact-info">
                <h1>Contact Info</h1>
                <div className='icon-container'>
                    <div className='icon-border'>
                        <FontAwesomeIcon 
                        icon={faPhone} 
                        className='icon'
                        fixedWidth/>
                    </div>
                    <a tabIndex={0} href='tel:401-390-9638'>401-390-9638</a>
                </div>
                <div className='icon-container'>
                    <div className='icon-border'>
                        <FontAwesomeIcon 
                        icon={faEnvelope} 
                        className='icon' 
                        fixedWidth/>
                    </div>
                    <a tabIndex={0} href='mailto:adyer4201@gmail.com'>ADyer4201@gmail.com</a>
                </div>
                <div className='icon-container'>
                    <div className='icon-border'>
                        <FontAwesomeIcon 
                        icon={faGithub}
                        className='icon'  
                        fixedWidth/>
                    </div>
                    <a tabIndex={0} href='https://github.com/ADAidan' 
                    target='_blank'>ADAidan</a>
                </div>
                <div className='icon-container'>
                    <div className='icon-border'>
                        <FontAwesomeIcon 
                        icon={faLinkedin} 
                        className='icon' 
                        fixedWidth/>
                    </div>
                    <a tabIndex={0} href='https://www.linkedin.com/in/aidan-dyer-017462224/' 
                    target='_blank'>Aidan Dyer</a>
                </div>
            </div>
            <div className='resume-contact-form-container'>
                <div className='resume-container'>
                    <h1>My Resume</h1>
                    <div className='resume-links-container'>
                        <div>
                            <FontAwesomeIcon icon={faFile} />
                            <a tabIndex={0} href="/aidan_dyer_resume.pdf" target="_blank" 
                            rel="noopener noreferrer">View Resume</a>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faDownload} />
                            <a tabIndex={0} href='/aidan_dyer_resume.pdf' 
                            download>Download Resume</a>
                        </div>
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