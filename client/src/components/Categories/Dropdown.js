import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Select from "react-select";
import data from './data.json';
import instance from "../../requests/instance";
import './category.css'
import './Contact.css'


function Dropdown() {
  const history = useHistory();

  const callCategoriesPage = async () => {
    try {

      const res = await fetch('http://localhost:5000/categories', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",

        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);
      //   setUserData(data);

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
    callCategoriesPage();
  }, []);

  const [userData, setUserData] = useState({ name: "", email: "", phone: "", address: "", quantity: "", pickupdate: "", pickuptime: "" });

  const userCategorie = async () => {
    try {

      const res = await fetch('http://localhost:5000/getdata', {
        method: "GET",
        headers: {
          // Accept: "application/json",
          "Content-type": "application/json"

        },
        credentials: "include"
      });


      const data = await res.json();
      console.log(data);
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);

    }
  }
  useEffect(() => {
    userCategorie();
  }, []);


  // we are storing data in states
  const handleInputs = (e) => {
    console.log(e)
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value })
  }


  const [country, setCountry] = useState(null);
  const [lang, setLang] = useState(null);
  const [langList, setLangList] = useState([]);
  // const [link, setLink] = useState("");

  // handle change event of the country dropdown
  const handleCountryChange = (obj) => {
    console.log(obj, 'country ')
    setCountry(obj);
    setLangList(obj.languages);
    setLang(null);
  };

  // handle change event of the language dropdown
  const handleLanguageChange = (obj) => {
    console.log(obj, 'lan ')
    setLang(obj);
  };

 

  //post the data
  const CategoriesForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, address, waste, material, quantity, pickupdate, pickuptime } = userData;


  const res = await instance.post("/categories", { name, email, phone, address, waste: country.name, material: lang.name, quantity, pickupdate, pickuptime })

   console.log(res)
    const data = res.data;
    if (!data) {
      console.log("messgae not send")
    } else {
      window.alert("Request send");
      setUserData({ ...userData, address: "", waste: "", material: "", quantity: "", pickupdate: "", pickuptime: "" })

    }

  

  }


  return (
   
    <>
      <div className="abtcat">
        <div className="abtcatinner-section">
          <h1>Solid waste</h1>
          <p className="cattext">
            Refers to both recyclable and non-recyclable materials. Solid waste includes items such as bottles, cans, plastic, wood, glass, paper, etc. Categories of Solid waste disscused below.
          </p>
        </div>
      </div>

      <div className="dispcatcontainer">
        <div className="dispcatheading">
          <h1>Waste Categories </h1>
        </div>
        <div className="dispcatrow">
          <div className="dispcatcard">
            <div className="dispcatcard-header">
              <h1>Paper</h1>
            </div>
            <div className="dispcatcard-body">
              <p>
                <ul>
                  <li>Carton</li>
                  <li>Newspaper</li>
                  <li>Copy</li>
                  <li>Books</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="dispcatcard">
            <div className="dispcatcard-header">
              <h1 className="metal">Metal</h1>
            </div>
            <div className="dispcatcard-body">
              <p>
                <ul>
                  <li>Utensils</li>
                  <li>Iron<br /></li>
                  <li>Steel</li>
                  <li>Aluminium </li>
                  <li>Copper</li>
                  <li>Brass</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="dispcatcard">
            <div className="dispcatcard-header">
              <h1>Plastic</h1>
            </div>
            <div className="dispcatcard-body">
              <p>
                <ul>
                  <li>Plastic bottle</li>
                  <li>Mix Plastic</li>
                  <li>Packaging Plastic</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="dispcatcard">
            <div className="dispcatcard-header">
              <h1>E-waste</h1>
            </div>
            <div className="dispcatcard-body">
              <p>
                <ul>
                  <li>Old Gadgets</li>
                  <li>Cell</li>
                  <li>Battery</li>
                  <li>Wires</li>
                  <li>CFL lights (tubelights, bulb )</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>







          <div className="catbody">
        <div className="catformcont">
            <form action="">
                <div className="catuser">
                   
                    <div className="catinputformbox">
                        <span className="catuserdetails">Name</span>
                        <input type="text" name="name" placeholder="Enter full-name" required value={userData.name} onChange={handleInputs}/>
                    </div>

                    <div className="catinputformbox">
                        <span className="catuserdetails">E-Mail</span>
                        <input type="text" name="email" placeholder="Enter E-Mail" required value={userData.email} onChange={handleInputs}/>
                    </div>
                    <div className="catinputformbox">
                        <span className="catuserdetails">Phone No.</span>
                        <input type="text" name="phone" placeholder="Enter Phone No." required  value={userData.phone} onChange={handleInputs} />
                    </div>
                    <div className="catinputformbox">
                        <span className="catuserdetails">Address</span>
                        <input type="text" name="address" placeholder="Enter Address" required value={userData.address} onChange={handleInputs}/>
                    </div>
                
                    <div className="catinputformbox">
                        <span className="catuserdetails">Waste Category</span>
                          <Select
                  placeholder="Select Waste"
                  name="country"
                  value={country}
                  options={data}
                  onChange={handleCountryChange}
                  getOptionLabel={x => x.name}
                  getOptionValue={x => x.country_code}
                />
                        
                       
                    </div>
                    <div className="catinputformbox">
                        <span className="catuserdetails">Material Waste</span>
                        
                     
                        <Select
                  placeholder="Select Material"
                  name="language"
                  value={lang}
                  options={langList}
                  onChange={handleLanguageChange}
                  getOptionLabel={x => x.name}
                  getOptionValue={x => x.code}
                />
                    </div>
                    <div className="catinputformbox">
                        <span className="catuserdetails">Quantity (Approx)</span>
                        
                        <select name="quantity" id="" value={userData.quantity} onChange={handleInputs}>
                            
                            <option value="1">less than 1 kg</option>
                            <option value="2">less than 2 kg</option>
                            <option value="5">less than 5 kg</option>
                            <option value="10">less than 10 kg</option>
                        </select>
                    </div>
                    <div className="catinputformbox">
                        <span className="catuserdetails">Date</span>
                        <input type="date" name="pickupdate" placeholder="dd-mm-yyyy" required value={userData.pickupdate} onChange={handleInputs}/>
                    </div>
                    <div className="catinputformbox">
                        <span className="catuserdetails">Time-Slots</span>
                        
                        <select name="pickuptime" id=""  value={userData.pickuptime} onChange={handleInputs}>
                            <option value="9.12">9:00 - 12:00</option>
                            <option value="12.3">12:00 - 15:00</option>
                            <option value="3.6">15:00 - 18:00</option>
                            <option value="6.9">18:00 - 21:00</option>
                        </select>
                    </div>



                </div>
                <div className="catformbtn">
                    <input type="submit" value="Submit" onClick={CategoriesForm} />
                </div>
            </form>
        </div>
    </div>
    



          

     
    </>
  );
}

export default Dropdown;