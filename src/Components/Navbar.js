
import '../styles/navbar.css';
const navbar = () => {

    return (
        <nav className='navbar'>
            <a href="/" className="logo">Logo</a>
            <div className="navMenu">
                <ul>
                    <li> <a href="/">Home</a>  </li>
                    <li> <a href="/">About</a>  </li>
                    <li> <a href="/">Contact</a>  </li>
                </ul>
            </div>
        </nav>
    );

}


export default navbar;