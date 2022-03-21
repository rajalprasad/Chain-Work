import { Link } from 'react-router-dom'
import "./navbar.css";

export function NavBar() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Chain-Work</Link>
                </li>
                <li>
                    <Link to="/Jobs">Jobs</Link>
                </li>
                <li>
                    <Link to="/PostJob">Post Job</Link>
                </li>
            </ul>
        </>
    )
}