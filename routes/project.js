const mongoose=require('mongoose')
const express=require('express')
const User=require('../models/User')
const jwt=require('jsonwebtoken')
const Project = require('../models/Project')
const router=new express.Router()
const verifyToken=require('../middleware/auth')




//view users
router.get('/api/projects',async (req,res)=>{
    res.send("HELLO")
})

//create user
router.post('/api/projects',verifyToken, async (req,res)=>{
    const project=new Project({...req.body,owner:req.user._id})
    try{
        await project.save()
        res.status(201).send({project}) 
    }catch{                   
        res.status(400).send('false')
    }
})

module.exports=router

