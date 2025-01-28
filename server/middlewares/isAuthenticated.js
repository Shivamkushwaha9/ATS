import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(400).json({success:false, message:"THe user is not loggedin or authenticated"});
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user= decode;
        console.log(`isAuthenticated wale me se aa raha BROV: ${decode}`);
        next();
    } catch (error) {
        console.log(`Some Error Occured while trying to authenticate the user, In isAuthenticated: ${error}`)
    }
}

export default isAuthenticated;