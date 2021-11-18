import React , {useEffect, useState } from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../css/Contact1.css';
import instance from '../requests/instance';


const Contact = () => {
   

    const [userData, setUserData] = useState({name:"", email:"",phone:"",message:""});

    const userContact = async () => {
      try {
         
        const res = await fetch('http://localhost:5000/getdata', {
            method: "GET",
            headers: {
                // Accept: "application/json",
                "Content-type": "application/json"
                
            },
            credentials:"include"
        });
        

        const data = await res.json();
        console.log(data);
        setUserData({...userData, name:data.name, email:data.email, phone:data.phone});

        if(!res.status === 200) {
            const error = new Error(res.error);
            throw error;
        }
        
      }catch (err) {
         console.log(err);
         
      }
    }
    useEffect(() => {
        userContact();
    }, []);


    // we are storing data in states
    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({...userData, [name]: value })
    }

    // send the data to backend
    const ContactForm = async (e) => {
        e.preventDefault();

        const {name, email, phone, message} = userData;

        
            const res =  await instance.post("/contact", { name, email, phone, message  })
    
    
            const data =  res.data;
    
            if (!data) {
                console.log("messgae not send")
                window.alert("message not send")
            } else {
                window.alert("Message send");
                setUserData({...userData, message:""})
                
            }
    
           
        }
    


        
    return (
       
        



        <div className="contactcontainer">
                <div className="inboxcont">
                    <div className="contactinfobox">
                        <h3 className="title">Let's get in touch</h3>

                        <div className="info">
                            <div className="information">
                                <p> Dream Hatcher Incubation Center,
                                    Gwalior Smart City Office, Moti Mahal Gwalior - 474007, India</p>
                            </div>
                            <div className="information">
                                <p>dreamhatcher@gwaliorsmartcity.org</p>
                            </div>
                            <div className="information">
                                <p> +91 7512930224, +91 9993555559</p>
                            </div>
                        </div>

                        


                        <div className="social-media">
                            <p>Connect with us :</p>
                            <div className="social-icons">
                                <a href="#">
                                
                                    <FacebookOutlinedIcon  />
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"><TwitterIcon/></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram"><InstagramIcon/></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"><LinkedInIcon/></i>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="contactform">
                        <form action="POST" autocomplete="off">
                            <h3 className="title">Contact us</h3>
                            <div className="input-container">
                                <input type="text" name="name" className="input" placeholder="Username"  value={userData.name} onChange={handleInputs}/>
                                <label for=""></label>
                            </div>
                            <div className="input-container">
                                <input type="email" name="email" className="input" placeholder="Email"  value={userData.email} onChange={handleInputs}/>
                                <label for=""></label>
                            </div>
                            <div className="input-container">
                                <input type="tel" name="phone" className="input" placeholder="Phone" value={userData.phone} onChange={handleInputs}/>
                                <label for=""></label>
                            </div>
                            <div className="input-container textarea">
                                <textarea name="message" className="input" placeholder="Message" value={userData.message} onChange={handleInputs}></textarea>
                                <label for=""></label>
                            </div>
                            <input type="submit"  className="btn" onClick={ContactForm} />
                        </form>
                    </div>


                </div>

            </div>
    )
}

export default Contact

