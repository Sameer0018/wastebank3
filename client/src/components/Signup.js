import React, { useState } from "react";
import { useHistory } from "react-router";
import '../css/Signup.css';
import instance from '../requests/instance';
import Validation  from "./Validation";

const Signup = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", password: "", Cpassword: ""
    });

    const [errors, setErrors] = useState({});

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();
        

        const { name, email, phone, password, Cpassword } = user;
        try {
            const res = await instance.post("/register", { name, email, phone, password, Cpassword })


            const data = res.data;

            if (res.status === 422 || !data) {
                
                window.alert("Invalid Registration");
                console.log("Invalid Registration");
            } else {
                window.alert("Registration Successful");
                console.log("Registration Successfull");

                history.push("/login");
            }
            // setErrors(Validation(value))
            console.log(res);
        } catch (error) {
            if (error.response.status = 422) {
                alert('invaild detail')
            } else {
                alert('server error')
            }
        }
        // const res = await fetch("/register", {
        //     method: "POST",
        //     //   headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' },
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         name, email, phone, password, Cpassword
        //     })
        // });

        // const data = await res.json();
        if(errors)
        setErrors(Validation)
        
    }

    return (
        
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create Account</h2>
                </div>
                <form method="POST" className="form-wrapper">
                    <div className="name">
                        <label className="label">Full Name</label>
                        <input className="input" type="text" name="name" value={user.name} onChange={handleInputs} />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div className="email">
                        <label className="label">Email</label>
                        <input className="input" type="email" name="email" value={user.email} onChange={handleInputs} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="name">
                        <label className="label">Number</label>
                        <input className="input" type="number" name="phone" value={user.phone} onChange={handleInputs} />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>

                    <div className="password">
                        <label className="label">Password</label>
                        <input className="input" type="password" name="password" value={user.password} onChange={handleInputs} />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>

                    <div className="password">
                        <label className="label">Confirm Password</label>
                        <input className="input" type="password" name="Cpassword" value={user.Cpassword} onChange={handleInputs} />
                        {errors.Cpassword && <p className="error">{errors.Cpassword}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={PostData}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default Signup;