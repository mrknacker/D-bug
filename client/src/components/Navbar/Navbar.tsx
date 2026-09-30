import { Link } from "react-router-dom"
import DarkLogo from "../../assets/DarkLogo.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to="/" >
            <img src={DarkLogo} alt="logo" className="logo"/>
        </Link>

        <Link to="/auth/sign-up" className="dashboard-btn">
            Sign up
        </Link>
    </div>
  )
}

export default Navbar