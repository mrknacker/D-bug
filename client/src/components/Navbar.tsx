import { Link } from "react-router-dom"
import DarkLogo from "../assets/DarkLogo.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to="/" >
            <img src={DarkLogo} alt="logo" className="logo"/>
        </Link>

        <Link to="/dashboard" className="dashboard-btn">
            Dashboard
        </Link>
    </div>
  )
}

export default Navbar