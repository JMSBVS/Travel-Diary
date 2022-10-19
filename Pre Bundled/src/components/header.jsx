import React from 'react'
import world from '../images/world.png'

export default function Header() {
    return (
        <nav className='nav'>
            <img src={world} alt="" />
            <h1 className='heading'>my travel journal.</h1>
        </nav>
    )
}