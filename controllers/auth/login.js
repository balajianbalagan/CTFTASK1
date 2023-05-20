const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
const User = require("../../models").User;
const { Op } = require("sequelize");
/**
 * Export Inventory table
 * 
 * @param {typedefs.Req} req Express request object
 * @param {typedefs.Res} res Express response object
 */

const login = async(req,res,next)=>{
    const user = await User.findOne({ where : {email : req.body.email, password:req.body.password }});
    if(user){
        
           token = jwt.sign({ "id" : user.id,"email" : user.email,"name":user.name },process.env.SECRET);
           res.status(200).json({ token : token });
       
     
     }else{
       res.status(404).json({ error : "User does not exist" });
     }
     
     }
module.exports = {
    login
}