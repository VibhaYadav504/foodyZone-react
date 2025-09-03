import{Router} from "express"
import userModel from "../models/user.model.js";
const userRoutes=Router();


userRoutes.post("/register" ,async(req, res)=>{

    try{
        const{username,email,password}=req.body;

        if (!username||!email ||!password){
            return res.json({
                message:"please provite username email and password",
                error:true,
                success:false

            });
        }
        const user= await userModel.findOne({email:email})
        if (user){
            return res.end("user alerdy exists with this email");


        }
        const newUser= new userModel({
            username ,
            email,
            password
             
        })
        await newUser.save();
        res.json({
            message:"user registered successfully",
            error: false,
            success: true, 
        });
        console.log(user,"this is user")
    }catch(error){
        res. json({
            message: error. message||error,
            error: true,
            success:false

        });
    }
});
userRouter.post ("/login",async(req,res)=>{})
export default userRoutes;

