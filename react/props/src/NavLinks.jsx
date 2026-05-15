import React from 'react'

const NavLinks = (props) => {
    console.log(props.navLinks);
    
  return (
   <ul className='nav-links'>
           {props.navLinks.map((ahad)=>{
            // console.log(ahad);
            return <li>{ahad}</li>
            
           })}
        </ul>
  )
}

export default NavLinks