import User from '../models/user.model.js'


//Middleware to check if user is authenticated

export const protect = async (req , res , next) => {
    const { userId } = req.auth();
    console.log(userId)
    try {
        if(!userId){
            res.json({success: false , message: "Not authenticated"})
        }else{
            const user = await User.findById(userId)
            console.log(user)
            if (!user) {
              return res.json({ success: false, message: "User not found in DB" });
            }
            //console.log(user)
            req.user = user
            next()
        }
    } catch (error) {
        console.error("Auth middleware error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}


