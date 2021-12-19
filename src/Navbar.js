import React from 'react'
import './Navbar.css'
import NavItem from './component/navItem'

const list=['World','Politics','Health','Business','Environment','Sports','Food','Travel','Magazine']

const Navbar = () => {
    return (
        <nav className='navbar'>
            {
                list.map((item)=>{
                     return <NavItem name={item}/>
                })
            }
        </nav>
    )
}

export default Navbar
