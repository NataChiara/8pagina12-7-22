import './Header.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="logo" className='logo'/>
            <h2>Titulo de pagina 8</h2>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link> </li>
                    <li><Link to ='Science'>Science</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;