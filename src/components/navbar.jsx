import { Link } from 'react-router-dom';
import './navbar.css';

export default function NavBar() {
    return (
        <div className='nav-container'>
            <div className="navbar">
                <h2 className='my-name'>Aidan Dyer</h2>
                <div className='nav-items'>
                    <Link to='/'>Home</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/course-projects'>Course Projects</Link>
                    <Link to='/certifications'>Certifications</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
            <div className='mobile-menu'>
                <h2 className='my-name'>Aidan Dyer</h2>
                <p>Menu</p>
            </div>
        </div>
    )
}