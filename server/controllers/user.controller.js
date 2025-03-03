// backend/controllers/user.controller.js
import { User } from "../models/user.model.js";

// Get user by email (for Google Auth)
export const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.query;
    // console.log("Email brah",email)
    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }
    
    const user = await User.findOne({ email });
    // console.log("Yahi h na bruhhhh",user);
    

    
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


export const createOrUpdateUser = async (req, res) => {
  try {
    const { email, name, image, googleId } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    let user = await User.findOne({ email });

    if (!user) {
      // Create new user
      user = new User({
        email,
        name,
        username: name, // Using name as username (optional)
        profilePicture: image,
        googleId,
        isVerified: true,
      });
    } else {
      // Check if user has a different auth provider
      if (user.googleId && user.googleId !== googleId) {
        return res.status(403).json({ success: false, message: "This email is already linked to another account." });
      }

      // Update existing user with Google info
      user.name = name || user.name;
      user.profilePicture = image || user.profilePicture;
      user.googleId = googleId || user.googleId;
      user.isVerified = true;
    }

    await user.save();

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error creating/updating user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


// // Create or update user (for Google Auth)
// export const createOrUpdateUser = async (req, res) => {
//   try {
//     const { email, name, image, googleId } = req.body;
    
//     if (!email) {
//       return res.status(400).json({ success: false, message: "Email is required" });
//     }
    
//     // Find user by email or create a new one
//     let user = await User.findOne({ email });
    
//     if (!user) {
//       user = new User({
//         email,
//         name,
//         username: name,
//         profilePicture: image,
//         image,
//         googleId,
//         isVerified: true
//       });
//     } else {
//       // Update existing user with Google info
//       user.name = name || user.name;
//       user.image = image || user.image;
//       user.profilePicture = image || user.profilePicture;
//       user.googleId = googleId || user.googleId;
//       user.isVerified = true;
//     }
    
//     await user.save();
    
//     res.status(200).json({ success: true, user });
//   } catch (error) {
//     console.error("Error creating/updating user:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };



// import { User } from "../models/user.model.js";
// // import bcryptjs from "bcrypt"
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// export const signup = async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//         if (!username || !email || !password) {
    //             throw new Error("All fields required while signup");
//         }
//         const checkIfUserExists = await User.findOne({ email });
//         if (checkIfUserExists) {
    //             res.status(400).json({ success: false, message: "User Already Exists" });
//         }

//         const newUser = new User({
    //             username: username,
//             email,
//             password: hashedPassword
//         })

//         await newUser.save();

//         res.status(200).json({ success: true, message: "New User Created successfully" })


//     } catch (error) {
    //         console.log(`Some Error Occured while Signup: ${error}`);
//         res.status(400).json({ success: false, message: "Some Error Occured while Signup" });
//     }
// }


// export const login = async (req, res) => {
    //     const { email, password } = req.body;
    //     try {
        //         if (!email || !password) {
//             return res.status(400).json({ success: false, message: "All fields required." });
//         }
//         let existingUser = await User.findOne({ email });

//         if (!existingUser) {
    //             return res.status(400).json({ success: false, message: "WRong Email or password, or pls signup first" });
//         }

//         const isPasswordMatch = await bcrypt.compare(password, existingUser.password);

//         if (!isPasswordMatch) {
    //             return res.status(401).json({ success: false, message: "Password does not match" });
    //         }
    
    //         const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    
    //         res.cookie('token', token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production',
//             sameSite: 'Strict',
//             maxAge: 24 * 60 * 60 * 1000,
//         });

//         res.status(200).json({
    //             success: true,
//             token,
//             message: "Login Successful",
//             user: { id: existingUser._id, email: existingUser.email }
//         })

//     } catch (error) {
    //         console.log(`Some Error Occured while loggin into the account: ${error}`);
    //         res.status(500).json({ success: false, message: "Internal server error." });
    //     }
    // }
    
    
    // export const logout = (_, res) => {
//     try {
    //         return res.cookie('token', '', { maxAge: 0 }).json({
//             message: "User logged out succesfully",
//             success: true
//         })
//     } catch (error) {
//         console.log(error);
//     }
// };


// controllers/user.controller.js
export const scorer = async (req, res) => {
    console.log('Scorer endpoint hit')
    try {
        console.log('Request file:', req.file)
        console.log('Request body:', req.body)

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            });
        }

        // File information is available in req.file
        const fileInfo = {
            filename: req.file.filename,
            path: req.file.path,
            mimetype: req.file.mimetype
        };

        console.log('File info:', fileInfo)

        res.status(200).json({
            success: true,
            message: "File uploaded successfully",
            fileInfo
        });

    } catch (error) {
        console.error(`Some error occurred while scoring:`, error);
        res.status(500).json({
            success: false,
            message: "Error processing file"
        });
    }
};


//         const hashedPassword = await bcrypt.hash(password, 10);