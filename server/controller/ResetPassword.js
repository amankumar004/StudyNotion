const User = require("../models/User");
const mailSender = require("../utilis/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

// reset Password Token
exports.resetPasswordToken = async (req, res) => {
    try{
        // get email from req body
        const email = req.body.email;
        // check user for this email, email validation
        const user = await User.findOne({email: email});
        if(!user){
            return res.json({
                success:false,
                message:`This Email: ${email} is not Registered with us Enter a valid email`,
            })
        }
        // generate token
        const token = crypto.randomBytes(20).toString("hex"); 
        // update user by adding token and expiration time
        const updatedDetails = await User.findOneAndUpdate(
            {email:email}, 
            {
                token:token,
                resetPasswordExpires: Date.now() + 3600000,
            },
            {new:true}
        );
        console.log("Details", updatedDetails);
        // create url
        const url = `http://localhost:3000/update-password/${token}`
        // send mail containing url
        await mailSender(email, 
            `Your Link for email verification is ${url}. Please click this URL to reset your password`, "Password Reset Link",);
        // return response
        return res.json({
            success:true,
            message:"email sent successfully, please check email and change password",
        })
    }
    catch(error){
        console.log(error);
        return res.status(500),json({
            success:false,
            message:"Something went wrong while reset password token",
        })
    }
}



// reset password
exports.resetPassword = async (req, res) => {
    try{
        // data fetch
        const {password, confirmPassword, token} = req.body
        // validation
        if(password !== confirmPassword){
            return res.json({
                success:false,
                message:"Password do not match",
            });
        }
        // get userdetails from DB using token
        const userDetails = await User.findOne({token:token});
        // if no entry - invalid token
        if(!userDetails){
            return res.json({
                success:false,
                message:"Token is invalid",
            });
        }
        // token time check
        if (!(userDetails.resetPasswordExpires > Date.now())) {
			return res.status(403).json({
				success: false,
				message: `Token is Expired, Please Regenerate Your Token`,
			});
		}
        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // password update
        await User.findOneAndUpdate(
            {token:token},
            {password:hashedPassword},
            {new:true},
        );
        // return response
        return res.status(200).json({
            success:true,
            message:"Password reset successfully",
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong while reset password",
        })
    }
}