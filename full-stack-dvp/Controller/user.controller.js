const express = require('express')
const userModel = require('../Model/userModel')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const getAlluserController = (req, res) => {
    res.send('User Route')
}

// ########## Registration ########
const RegisterController = (req, res) => {
    const { firstName,lastName, email, password } = req.body
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                res.status(500).send({ message: err })
            }
            else {
                const user = new userModel({ firstName,lastName, email, password: hash })
                await user.save()
                res.status(200).json({ message: 'data Add succesfully' })
            }
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// ########## Login ########

const LoginController = async (req, res) => {
    const { email, password } = req.body
    try {
        const matchdata = await userModel.findOne({ email })
        if (!matchdata) return res.status(400).json({ message: "User not found" });
        const hashpassword = matchdata.password

        bcrypt.compare(password, hashpassword).then((match) => {
            if (match) {
                const token = jwt.sign({ userData: matchdata }, "zxcvbn")
                res.status(200).json({ message: 'Login Succesfully', user: matchdata, token })
            }
            else {
                res.status(400).json({ message: 'Invalid Email or Password' })
            }
        })
    } catch (error) {
        res.status(400).json({ message: error })
    }
  
}

const PrivateController = (req,res,next)=>{
    const {token} = req.headers
    if (!token) return res.status(401).json({ message: "Access denied" });
    jwt.verify(token,"zxcvbn",async function(err,decode){
        if(err){
            res.status(400).json({message:"Invalid Token"})
            }
            else{
                res.status(200).json({message:"Private Route",userData:decode})
                next();
                }
    })
}

module.exports = { getAlluserController, RegisterController, LoginController,PrivateController}