import React from 'react'

export default function Header() {
    return (
        <div className="navbar">
            <nav>
                <div className="logo">
                    <h1>My Todo List</h1>
                </div>
                <div className="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Help</li>
                </ul>
            </nav>
        </div>
    )
}
