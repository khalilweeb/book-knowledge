import React, {useState} from 'react';
import '../styles/navbar.css';
const Navbar = (props) => {
    const [showHide , setShowHide] = useState('menu');


    const toggleMenuHandler = () => {
      if(showHide === 'menu') {
        setShowHide('menu show')
      } else {
        setShowHide('menu')
      }
      console.log('hello')
     
    }
    return (
        <nav className='navbar'>
            <div className='logo'> Logo </div>
            <i onClick={toggleMenuHandler}>&#9776;</i>
            <div className={showHide}>
                <ul>
                    <li>  <a href='/'>Home</a> </li>
                    <li>  <a href='/'>Products</a> </li>
                    <li>  <a href='/'>About</a> </li>
                    <li>  <a href='/'>Contact</a> </li>
                </ul>
                    
            </div>
        </nav>
    );

}


export default Navbar;