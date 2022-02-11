const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');



require("../db/conn");
const Registration = require("../modal/registrationSchema");
const UserCategory = require("../modal/UserCategory");
const { request } = require('express');


router.get('/api', (req, res) => {
    res.send(`hello world from the server router.js`);
})




router.post('/register', async (req, res) => {
    // console.log(req.body)
    const { name, email, phone, password, Cpassword } = req.body;

    if (!name || !email || !phone || !password || !Cpassword) {
        return res.status(422).json({ error: "Plz filled the field properly" })
    }

    try {

        const userExist = await Registration.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        } else if (password != Cpassword) {
            return res.status(422).json({ error: "password are not matching" });
        } else {
            const registration = new Registration({ name, email, phone, password, cpassword: Cpassword, coins:0});

            await registration.save();

            res.status(201).json({ message: "user registered successfully" });
        }


    } catch (err) {
        console.log(err);
    }



})

//login route
router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Plz filled the data" })
        }

        const userLogin = await Registration.findOne({ email: email });

        // console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            if(!isMatch){
                  res.status(400).json({error: "passowrd is incorrect"})
            }
            else {
                token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            res.header('Content-Type', 'application/json;charset=UTF-8')
            res.header('Access-Control-Allow-Credentials', true)
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            )
            res.json({ message: "user Signin Successfully" });
            }
            
          
        } else {
            res.status(400).json({ error: "Invalid Credentials" });
        }




    } catch (err) {
        console.log(err);
    }
})

//about us page
router.get('/about', authenticate, (req, res) => {
    console.log("Hello, my about");
    res.send(req.rootUser);
})

// // categories page
router.get('/categories', authenticate, (req, res) => {
    console.log("Hello, my about");
    // res.send(`Hello cateogires page`);
    res.send(req.rootUser);
})




//get user data for contact us and home page
router.get('/getdata', authenticate, (req, res) => {
    console.log("Hello, my contact");
    res.send(req.rootUser);
})

// Contact page
router.post('/contact', authenticate, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        if (!name || !email || !phone || !message) {
            console.log("error in contact form");
            return res.json({ error: "plzz filled the contact form" });
        }

        const userContact = await Registration.findOne({ _id: req.userID });

        if (userContact) {
            const userMessage = await userContact.addMessage(name, email, phone, message);

            await userContact.save();

            res.status(201).json({ message: "user contact succcessfully" })
        }
    } catch (error) {

    }
})

//categories page
router.post('/categories', authenticate, async (req, res) => {
    try {
        const { name, email, phone, address, waste, material, quantity, pickupdate, pickuptime } = req.body;
        console.log(req.body
        )
        if (!name || !email || !phone || !address || !waste || !material || !quantity || !pickupdate || !pickuptime) {
            console.log("error in categories form");
            return res.json({ error: "plzz filled the categories form" });
        }
        
        const userCategories = await Registration.updateOne({ _id: req.userID },
            {
                $push: {
                    categories: { name, email, phone, address, waste, material, quantity, pickupdate, pickuptime }
                }
            }
        );
        console.log(req.body.address)
        UserCategory.create({ 
            user:req.userID,
            address: req.body.address,
            waste: req.body.waste,
            material: req.body.material,
            quantity: req.body.quantity,
            pickupdate: req.body.pickupdate,
            pickuptime:req.body.pickuptime,
            status: "na",
            verifyotp: 2126,
            custverifystatus: false
        }) 

        
        console.log(userCategories, 'catergoures')
        if(userCategories) {
        //     const userCategories = await userCategories.addCategories(name,email,phone,address,waste, material, quantity, pickupdate, pickuptime);

            // await userCategories.save();

            res.status(201).json({message: "user data send  succcessfully"})
        }
    } catch (error) {
        console.log(error)
    }
})


//Logout ka Page
router.get('/logout', (req, res) => {
    console.log("Hello, my LogoutPage");
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send('USer logout');
})

module.exports = router;
