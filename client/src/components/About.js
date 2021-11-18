import React, { useEffect, useState } from 'react'
import instance from '../requests/instance';
import { useHistory } from "react-router";
import Cookies from 'js-cookie';
import '../css/About1.css'
import Profile from '../images1/profile2.png'





const About = () => {


    const history = useHistory();

    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try {

            const res = await fetch('http://localhost:5000/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",

                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            history.push('/login');
        }
    }
    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <>
          

            <div class="profilecontainer">
      <div class="profilecont">
        <div class="profileinfobox">
          <h3 class="profiletitle">Welcome </h3>

          <div class="profileinfo">
            <div class="profileinformation"><img src={Profile} class="pp"/></div>
            <div class="profileinformation">
              <p class="profilename">{userData.name}</p>
            </div>
          </div>
        </div>
        <div class="profileform">
          <form action="index.html" autocomplete="off">
            <h3 class="profiletitle proinfo">Information</h3>
            <div class="profile-container">
              <h4>Phone</h4>
              <p>(+91) {userData.phone}</p>
            </div>
            <div class="profile-container">
              <h4>Email</h4>
              <p>{userData.email}</p>
            </div>
            {/* <div class="profile-container">
              <h4>ID</h4>
              <p>00011kj5585658545454657979hn</p>
            </div> */}
            
            <div class="profile-container">
              <h4>Earned Coins</h4>
              <p>0</p>
            </div>

           
          </form>
        </div>
          

        </div>

      </div>

    

        
        </>
    )
}

export default About