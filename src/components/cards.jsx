import { Link } from 'react-router-dom';
import './cards.css';

export const ProjectCard = (props) => {
    return (
        <div className='project-card'>
            <img src={props.image} alt='image'></img>
            <div className='project-info'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                { props.url && 
                <a className='card-button' 
                href={props.url} target='_blank'>
                    View on Github
                </a> }
            </div>
        </div>
    );
}

export const CertificationCard = (props) => {
    return (
        <div className='certification-card'>
            <img src={props.image} alt='image'></img>
            <div className='certification-info'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p>{props.completionTime}</p>
                <a className='card-button' 
                href={props.url} target='_blank'>
                    View Certificate
                </a>
            </div>
        </div>
    );
}