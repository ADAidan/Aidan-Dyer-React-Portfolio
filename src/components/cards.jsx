import './cards.scss';

export const ProjectCard = (props) => {
    return (
        <div className='project-card'>
            <img src={props.image} alt='image'></img>
            <div className='project-info'>
                <h2 className='card-title'>{props.title}</h2>
                <p>{props.description}</p>
                { props.completionDate &&
                    <p className='completion-date'>Completed {props.completionDate}</p>
                }
                <div className='card-button-container'>
                    { props.url && 
                    <a className='card-button-solid' 
                    href={props.url} target='_blank'>
                        View on Github
                    </a> }
                    { props.demoUrl &&
                    <a className='card-button-outline'
                    href={props.demoUrl} target='_blank'>
                        Visit Website
                    </a> }
                </div>
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