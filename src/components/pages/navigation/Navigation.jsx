import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import logo from '../../../assets/YingCG.svg'
import './navigation.style.scss'

export default function Navigation() {
    return (
        <>
            <div className='navigation'>
                <div className='logo-container'>
                    <Link to='/'> <img src={logo} className='logo-ying' alt='logo'/> </Link>                
                </div>
                <div className='links-container'>
                    <Link className='nav-link' to='/shop'> Shop </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}
