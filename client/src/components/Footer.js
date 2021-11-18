import  React from 'react'
import '../css/Home1.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <footer className="foot">
        <div className="foot0">
            <div className="foot1">
                <li><NavLink className="foot1inner" to="/">Home</NavLink></li>
                <li><NavLink className="foot1inner" to="/categories"> Category </NavLink></li>
                {/* <li><NavLink className="foot1inner" to="/AdminLogin"> Admin </NavLink></li> */}
                <li>Login</li>
                
            </div>
            <div className="foot1">
                <li>Company</li>
                {/* <li>Team</li>   */}
                <li><NavLink className="foot1inner" to="/team">Team</NavLink></li>
                <li>Legacy</li>
           
            </div>
            <div className="foot1">
                <li>Support</li>
                <li>Locations</li>
                <li>Benefits</li>
               
            </div>
        </div>
        <div className="foot00">
            <div className="icon"><FacebookOutlinedIcon/></div>
            <div className="icon"><i className="fab fa-twitter"></i><TwitterIcon/></div>
            <div className="icon"><i className="fab fa-instagram"></i><InstagramIcon/></div>
            <div className="icon"><i className="fab fa-snapchat-ghost"></i><LinkedInIcon/></div>
        </div>
    </footer>
        </>
    )
}

export default Footer;
