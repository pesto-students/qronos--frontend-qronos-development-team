import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <ul className="flex items-center mr-10">
                <Link to="/"><li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">   Feature</li></Link>
                <Link to="/about"><li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">Solutions</li></Link>
                <Link to="/dashboard"><li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">Dashboard</li></Link>
                <Link to="/signup">  <li className="font-heading text-white hover:text-gray-200 text-lg">Pricing</li></Link>
            </ul>
        </header>
    )
}

export default Header