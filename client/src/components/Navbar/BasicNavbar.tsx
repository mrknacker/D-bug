import { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import DarkLogo from "../../assets/DarkLogo.png"
import { Moon, Sun } from 'lucide-react'

const BasicNavbar = () => {

    const [isDark, setIsDark] = useState(false)

  return (
    <div className="navbar">
        <Link to="/" >
            <img src={DarkLogo} alt="logo" className="logo"/>
        </Link>

        <button
        onClick={() => setIsDark(prev => !prev) }
        >
            {isDark 
            ? <Sun size={16} className='navbar-icon'/> 
            : <Moon size={16} className='navbar-icon'/> }
        </button>
    </div>
  )
}

export default BasicNavbar