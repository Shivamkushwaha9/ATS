import { User } from "../models/user.model.js";
// import bcryptjs from "bcrypt"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            throw new Error("All fields required while signup");
        }
        const checkIfUserExists = await User.findOne({email});
        if (checkIfUserExists) {
            res.status(400).json({ success: false, message: "User Already Exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username: username,
            email,
            password: hashedPassword
        })

        await newUser.save();

        res.status(200).json({ success: true, message: "New User Created successfully" })


    } catch (error) {
        console.log(`Some Error Occured while Signup: ${error}`);
        res.status(400).json({ success: false, message: "Some Error Occured while Signup" });
    }
}


export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields required." });
        }
        let existingUser = await User.findOne({email});

        if (!existingUser) {
            return res.status(400).json({ success: false, message: "WRong Email or password, or pls signup first" });
        }

        const isPasswordMatch = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordMatch) {
            return res.status(401).json({ success: false, message: "Password does not match" });
        }

        const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            success: true,
            token,
            message: "Login Successful",
            user: { id: existingUser._id, email: existingUser.email }
        })

    } catch (error) {
        console.log(`Some Error Occured while loggin into the account: ${error}`);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
}


export const logout = (_, res) => {
    try {
        return res.cookie('token', '', { maxAge: 0 }).json({
            message: "User logged out succesfully",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
};

export const scorer =  () => {
    try {
        
    } catch (error) {
        console.log(`Some error occurred while scoring ${error}`)
    }
}