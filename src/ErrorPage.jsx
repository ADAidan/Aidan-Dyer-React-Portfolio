import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div>
            <h1>Oops! Looks like this page does not exist.</h1>
            <Link to="/">Return Home</Link>
        </div>
    )
}