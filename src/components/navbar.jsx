import { Link } from 'react-router-dom';
import '../App.css';

export default function NavBar() {
    return (
        <div className="navbar">
            <h2>Aidan Dyer</h2>
            <div className='nav-items'>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/course-projects'>Course Projects</Link>
                <Link to='/certifications'>Certifications</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}