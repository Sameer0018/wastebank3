import React from 'react';
import '../css/Team.css';
import Aditi from '../TeamImages/Aditi_Tomar.jpeg';
import Alpit from '../TeamImages/Alpit_Namdev.jpeg';
import Diksha from '../TeamImages/Diksha_Sharma.jpeg';
import Harsha from '../TeamImages/Harsha_Sharma.jpeg'
import Rashika from '../TeamImages/Rashika_Sharma.jpeg';
import Sammer from '../TeamImages/Sameer_Hussain.jpeg';
import Shubham from '../TeamImages/Shubham_Khandelwal.jpeg';
import Suraj from '../TeamImages/Suraj_Sharma.jpeg';

const Team = () => {

  return (
    <>

      <div className="team-area">

        <div className="section-title">
          <h2>Our Team</h2>
          <p>Meet Our telented Team Members</p>
        </div>

        <h2><b>Founder/Creator - </b></h2>
        <div className="single-team">
          <div className="team-img">
            <img src={Shubham} alt="" />
          </div>
          <div className="team-content">
            <div className="team-info">
              <h3>Shubham Khandelwal</h3>
              <p>Project Manager</p>
            </div>
            <p className="team-text">A reverse engineering enthusiast, nature lover. Creator of flub waste bank.</p>
          </div>
        </div>

        <br/>

          <h2><b>Interns - </b></h2>
          <div className="protea">
          <div className="single-team float">
            <div className="team-img">
              <img src={Aditi} alt="" className="img-responsive" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Aditi Tomar</h3>
                <p>Intern</p>
              </div>
              <p className="team-text">Passionate about technology and love to network with like minded professionals. The key projects which I worked on during my internship included usage of languages like HTML, CSS, Javascript, NodeJs and Express Js. I also started getting interested more in Web development and basics of Python language. I also know C and C++.</p>
            </div>
          </div>


          <div className="single-team float">
            <div className="team-img">
              <img src={Alpit} alt="" className="img-responsive" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Alpit Namdev</h3>
                <p>Intern</p>
              </div>
              <p className="team-text">I am Mern Stack developer and also working on Python. I love my work and passionate about it. </p>
            </div>
          </div>

          <div className="single-team float">
            <div className="team-img">
              <img src={Diksha} alt="" className="img-responsive" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Diksha Sharma</h3>
                <p>Intern</p>
              </div>
              <p className="team-text">Worked on several projects as frontend developer. Comfortable in working with React JS,Javascript,HTML and CSS. I also have exposure to NodeJS, ExpressJS and MongoDB. I also have a good knowledge of C/C++.</p>
            </div>
          </div>

          <div className="single-team float ">
            <div className="team-img">
              <img src={Harsha} alt="" className="img-responsive" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Harsha Sharma</h3>
                <p>Intern</p>
              </div>
              <p className="team-text">A passionate developer specializing mostly in PHP and javascript. Fluent in HTML,CSS and Bootstrap. Skilled in various programming languages such as C,C++ and also have a good knowledge of data structures. Have managed to work on quite a few development projects. </p>
            </div>
          </div>

          <br/>
            <div className="single-team float">
              <div className="team-img">
                <img src={Rashika} alt="" />
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3>Rashika Sharma</h3>
                  <p>Intern</p>
                </div>
                <p className="team-text">A computer science enthusiast. I recently completed my python, Django & IOT training.</p>
              </div>
            </div>


            <div className="single-team float">
              <div className="team-img">
                <img src={Sammer} alt="" className="img-responsive" />
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3>Sameer Hussain</h3>
                  <p>Intern</p>
                </div>
                <p className="team-text">A level-headed person, organizing everything to work efficiently and achieving the goals that I set.I am calm and think quickly in stressful situations,I want to change the world but God won't give me the source code.</p>
              </div>
            </div>


            <div className="single-team float">
              <div className="team-img">
                <img src={Suraj} alt="" className="img-responsive" />
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3>Suraj Sharma</h3>
                  <p>Intern</p>
                </div>
                <p className="team-text">I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best.</p>
              </div>
            </div>

            </div>
          </div>





        </>
        );
  }

        export default Team;