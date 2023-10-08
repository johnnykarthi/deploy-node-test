const express = require('express');
const router= express.Router();
const user = require('../models/users');

router.post('/', async (req,res)=>{
    const {username,password,email,mobile} = req.body;
    try{
        const workout = await user.create({username,password,email,mobile});
        res.status(200).json(workout);
    }
    catch(err)
    {
        res.status(400).json({error:err.message});
    }
})
router.get('/',async(req,res)=>{
    const userres = await user.find({})
    if(!userres)
    {
        return res.status(404).json({msg:"No such user"});
    }
    res.status(200).json(userres);
})







module.exports = router;