import { Link } from 'react-router-dom';
import clasaes from './MainNavigation.module.css';
function MainNavigation() {
    return (
        <header className={clasaes.header}>
            <div className={clasaes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetup</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">All Meetup</Link>
                    </li>
                    <li>
                        <Link to="/favorites">All Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
