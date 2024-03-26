import { User } from "../models/user.js";

export const getAllUsers = async(req,res) => {
    const users = await User.find({});

    const keyword = req.query.keyword;
    console.log(keyword);

    console.log(req.query);
    res.json({
        success:true,
        users,
    });
}


export const register = async (req,res) => {
    const {name, email, password} = req.body;

    await User.create({
        name,
        email,
        password,
    });

    res.status(201).cookie("tempi","lol").json({
        success:true,
        message:"Signed up Successfully",
    });
}


export const special = (req,res) => {
    res.json({
        success:true,
        message:"Just Joking",
    })
}



export const getUserById = async (req,res) => {
    const {id} = req.params;
    const user = await User.findById(id); 
    console.log(req.params);
    res.json({
        success:true,
        user,
    })
}

export const updateUser = async (req,res) => {
    const {id} = req.params;
    const user = await User.findById(id); 
    console.log(req.params);
    res.json({
        success:true,
        message:"Updated",
    })
}

export const deleteUser = async (req,res) => {
    const {id} = req.params;
    const user = await User.findById(id); 

    res.json({
        success:true,
        message:"User Deleted",
    })
}