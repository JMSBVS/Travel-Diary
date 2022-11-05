import { useState } from 'react'
import world from '../images/world.png'

export default function Header(props) {

    const handleClick = () => {
        props.SetModalIsActive(true)
    }
    return (
        <nav className='nav'>
            <span></span>
            <div className='heading-container'>
                <img src={world} alt="" />
                <h1 className='heading'>my travel journal.</h1>
            </div>
            <h2 className='add' onClick={handleClick} >+</h2>
        </nav>
    )
}