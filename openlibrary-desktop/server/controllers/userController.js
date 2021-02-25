import { v4 as uuid } from 'uuid';

let users = [];


//Get all Users in Database

export const getAllUsers = (req, res)=>{
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => { 
    const user = req.body;

    users.push({...user, id: uuid()});
    
    res.send(`User [${user.username}] added to the database.`);
}

export const getUser = (req, res) => {
    res.send(req.params.id)
};


export const deleteUser = (req, res) => { 
    res.send(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
};

export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.username = req.body.username;
    user.age = req.body.age;

    res.send(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};