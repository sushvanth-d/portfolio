import { useState } from 'react';
import './NavBar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function NavBar(){

    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const toggleMenu = () => {
        if (isOpen) {
          setIsClosing(true);
          setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
          }, 400); // matches CSS transition time
        } else {
          setIsOpen(true);
        }
      };

      const closeMenu = () => {
        setIsClosing(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsClosing(false);
        }, 400);
      };

    return(
        <div className="navbar-div">
            <div className="my-sign">
                <h3>&lt; Sushvanth Dudgundi /&gt;</h3>
            </div>
            <div className="navigation-loc">
            <ul className={`${isOpen ? "open" : ""} ${isClosing ? "closing" : ""}`}>
                <li><a href="#about" onClick={closeMenu}><p>About</p></a></li>
                <li><a href='#skills' onClick={closeMenu}><p>Skills</p></a> </li>
                <li><a href='#education' onClick={closeMenu}><p>Education</p></a></li> 
                <li><a href='#projects' onClick={closeMenu}><p>Projects</p></a> </li>
                <li><a href='#certificates' onClick={closeMenu}><p>Certificates</p></a></li> 
                <li><a href='#contact' onClick={closeMenu}><p>Contact</p> </a></li>
                </ul>
                {isOpen ? <IoMdClose className='NavInHam' onClick={toggleMenu} /> :  <GiHamburgerMenu className='NavInHam' onClick={toggleMenu} /> }
                         
            </div>
        </div>
    )
};

export default NavBar