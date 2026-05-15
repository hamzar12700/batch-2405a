import React from 'react'
import NavLinks from './NavLinks';
import Logo from './Logo';

const Navbar = (props) => {

    console.log(props.navLinks);
    
  return (
    <div className='navbar'>
     <Logo/>
        {/* <h2>{props.batch}</h2> */}
       <NavLinks navLinks={props.navLinks} />
    </div>
  )
}

export default Navbar