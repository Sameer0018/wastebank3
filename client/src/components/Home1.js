import React from 'react';
import mid1 from '../images1/mid1.jpeg'
import img from '../images1/img.jpeg';
import im1 from '../images1/im1.jpeg';
import im2 from '../images1/im2.jpeg';
import im3 from '../images1/im3.jpeg';
import im4 from '../images1/im4.jpeg';
import bhoot from '../images/bhoot.png'
import home1 from '../images/home1.jpeg';
import firfr from '../images/firfr.jpg'
import { FaLeaf } from "react-icons/fa";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { NavLink } from 'react-router-dom';
import '../css/Home1.css'
import Particles from 'react-particles-js';
import reportWebVitals from '../reportWebVitals';
import fr1 from '../images/fr1.jpg'
import fr2 from '../images/fr2.jpg'


const Home1  = () => {

return (
<>
   
   
   <div className="heroimg">
       <img src={fr2}/>
       {/* <div className="imtxt"><h2>Flub Waste Bank</h2><p>Interesting and rewarding way to sell your scrap.<br/>Register Now!</p></div> */}
    </div>

    {/* <div className="parti">
      <Particles  
     params={{ 
	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 4
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} 
        height="70vh"
        
    />
     
    </div>   */}
 
    <div className="headngcont">
        <div className="headingbox" >
            <h1> Our <span>Mission</span></h1>
        </div>

    </div>
    {/* <!--leaf cards--> */}
    {/* <div className="banner">
        <div className="cov1">
            <div className="liatban" data-aos="slide-up">
                <div className="leafbox"><i className="fas fa-leaf"><FaLeaf/></i></div>
                <p><span>Reduce</span> </p>
            </div>
            <div className="liatban" data-aos="slide-up">
                <div className="leafbox"><i className="fas fa-leaf"><FaLeaf/></i></div>
                <p> <span>Reuse</span></p>
            </div>
        </div>
        <div className="cov1">
            <div className="liatban" data-aos="slide-up">
                <div className="leafbox"><i className="fas fa-leaf"><FaLeaf/></i></div>
                <p> <span>Recycle</span></p>
            </div>
            <div className="liatban" data-aos="slide-up">
                <div className="leafbox"><i className="fas fa-leaf"><FaLeaf/></i></div>
                <p> <span>Refurbish</span></p>
            </div>
        </div>
        
    </div> */}

          {/* <!--four refoms--> */}
 
          <section>
            <div className = "main-container">
                <article>
                    <div className = "img-container">
                       <img src={im3} alt=""/>
                    </div>
                    <div className = "info-container">
                        <h2>REFURBISH</h2>
                        <p>Renovate and redecorate,it is the distribution of products that have been previously returned to a manufacturer or vendor for various reasons.</p>
                    </div>
                </article>
                <article>
                    <div className = "img-container">
                       <img src={im2} alt=""/>
                    </div>

                    <div className = "info-container">
                        <h2>REDUCE</h2>
                        <p>Reducing- It helps sustain the environment for future generations. It Saves Energy. It reduces pollution and energy for the future.</p>
                    </div>
                </article>
                <article>
                    <div className = "img-container">
                        <img src={im1} alt=""/>
                    </div>

                    <div className = "info-container">
                        <h2>RECYCLE</h2>
                        <p>Recycling is the process of converting waste materials into new materials and objects. It is the recovery  of energy from waste materials.</p>
                    </div>
                </article>
                <article>
                    <div className = "img-container">
                        <img src={im4} alt=""/>
                    </div>

                    <div className = "info-container">
                        <h2>REUSE</h2>
                        <p>Reuse provides an excellent, environmentally-preferred alternative to waste management methods,as it reduces air, water and land pollution, limits the need for new natural.</p>
                    </div>
                </article>
            </div>
        </section> 

  
        {/* <!-- aboutus  --> */}
    <div className="about">
      
		<div className="inner-about">
			<h1 className="about-heading">Who are we?</h1>
			<p className="about-paragraph">"Waste Bank is a rewarding way of segregating and eradicating waste menace to the very root."</p>
		</div>
	</div>
    <div className="stepsbox">
        <div className="imgbox">
            <img src={bhoot} alt=""/>
        </div>
        <div className="stepstable" >
            <div className="foranimation" data-aos="fade-up">
                <div className="step">
                    <div className="iconcir">
                        <i className="fas fa-sign-in-alt"><ExitToAppIcon/></i>
                    </div>
                    <div className="iconcon">
                        <p>1. Click on Register. Create Your Account</p>
                    </div>
                </div>
                <div className="step">
                    <div className="iconcir">
                        <i className="fas fa-map-marker"><AddLocationIcon /></i>
                    </div>
                    <div className="iconcon">
                        <p>2. Select category, loaction and pickup time.</p>
                    </div>
                </div>
            </div>
            <div className="foranimation" data-aos="fade-up">
                <div className="step">
                    <div className="iconcir">
                        <i className="far fa-check-circle"><CheckCircleIcon/></i>
                    </div>
                    <div className="iconcon">
                        
                        <p>3. Confirm and get Coins to your account.</p>
                    </div>
                </div>
                <div className="step">
                    <div className="iconcir">
                        <i className="fas fa-coins"><AccountBalanceWalletIcon/></i>
                    </div>
                    <div className="iconcon">
                        <p>4.Withdraw Your Earned Coins</p>
                    </div>
                </div>
            </div>
        </div>
    </div>



    
 
 
     
         
   



    <div className="headngcont">
        <div className="headingbox" data-aos="fade-down">
            <h1><span>4</span> Reason's to <span>choose</span> us</h1>
        </div>

    </div>
    <div className="contbox" >
        <div className="cov0" data-aos="fade-up">
            <div className="circle">
                <div className="textinci">
                    <p>Cleans the Landscape</p>
                </div>
             </div>
             
             <div className="circle">
                <div className="textinci">
                    <p>Improves Community Health</p>
                </div>
             </div>
        </div>
        
        <div className="cov0" data-aos="fade-up">
            <div className="circle">
                <div className="textinci">
                    <p>Ensure Physical Safety</p>
                </div>
             </div>
    
             <div className="circle">
                <div className="textinci">
                    <p>Protects the Environment</p>
                </div>
             </div>
        </div>
        
    </div>
     {/* <!-- num cards --> */}
     <div className="container">
        <div className="row">
          <div className="card" data-aos="flip-left">
            <div className="card-header">
              <h1>1250</h1>
            </div>
            <div className="card-body">
              <p>Pick Up Points</p>
            </div>
          </div>
          <div className="card" data-aos="flip-left">
            <div className="card-header">
              <h1>3952</h1>
            </div>
            <div className="card-body">
              <p>Workers All Time</p>
            </div>
          </div>
          <div className="card" data-aos="flip-left">
            <div className="card-header">
              <h1>1350</h1>
            </div>
            <div className="card-body">
              <p>Garbage Collector</p>
            </div>
          </div>
          <div className="card" data-aos="flip-left">
            <div className="card-header">
              <h1>1580</h1>
            </div>
            <div className="card-body">
              <p>Registered Users</p>
            </div>
          </div>
        </div>
      </div>

    {/* <footer className="foot">
        <div className="foot0">
            <div className="foot1">
                <li>Home</li>
                <li>Category</li>
                <li>Log In</li>
                
            </div>
            <div className="foot1">
                <li>Company</li>
                
                <li><NavLink className="foot1inner" to="/team">Team</NavLink></li>
                <li>Legacy</li> */}
           
            {/* </div>
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
    </footer> */}

 </> 
)
   
}

export default Home1;
