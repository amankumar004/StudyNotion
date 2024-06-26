const mongoose = require("mongoose");
const mailSender = require("../utilis/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");

const OTPschema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires: 7*60, // The document will be automatically deleted after 7 minutes of its creation time
    }
});


// a function -> to send verification email
async function sendVerificationEmail(email, otp){
    try{

        const mailResponse = await mailSender(email, 
            emailTemplate(otp),
            "Verification Email from StudyNotion");
        
        console.log("Mail sent successfully", mailResponse.response);

    } catch(error){
        console.log("Error occured while sending verification Email ", error );
        throw error;
    }
}


// pre middleware -> pre hooke
OTPschema.pre("save", async function (next) {
	console.log("New document saved to database");

	// Only send an email when a new document is created
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
	next();
});


module.exports = mongoose.model("OTP", OTPschema);
