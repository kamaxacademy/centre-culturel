import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';
// var db = require("../database.js")
import db from '../database.js'

let users = [];


//Get all Users in Database

export const getAllUsers = (req, res, next)=>{
    console.log(`Users in the database: ${users}`);

    const sql = "select * from users";
    const params = []
    db.all(sql, params, (err, rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            'message': "success",
            "data": rows
        })
    })

    // res.send(users);
}

export const createUser = (req, res) => { 
    const user = req.body;

    const errors = [];
    if (!req.body.password){
        errors.push("No password specified");
    }
    if (!req.body.email){
        errors.push("No email specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        name: req.body.name,
        email: req.body.email,
        password : bcrypt.hashSync(req.body.password)
    }

    var sql ='INSERT INTO users (name, email, password) VALUES (?,?,?)'
    var params =[data.name, data.email, data.password]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
   
    // users.push({...user, id: uuid()});
    
    // res.send(`User [${user.username}] added to the database.`);
}

export const getUser = (req, res) => {
    const sql = "select * from users where id = ?"
    const params = req.params.id
    db.get(sql, params, (err, row)=>{
        if(err){
            res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        }) 
        console.log(row)
    })

   
    //res.send(req.params.id)
};


export const deleteUser = (req, res) => { 
    
    db.run(
        'DELETE FROM user WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
   
    // res.send(`user with id ${req.params.id} has been deleted`);
    
    // users = users.filter((user) => user.id !== req.params.id);
};

export const updateUser =  (req,res) => {

    var data = {
        name: req.body.name,
        email: req.body.email,
        password : req.body.password ? bcrypt.hashSync(req.body.password) : null
    }

    db.run(
        `UPDATE users set 
           name = COALESCE(?,name), 
           email = COALESCE(?,email), 
           password = COALESCE(?,password) 
           WHERE id = ?`,
        [data.name, data.email, data.password, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });

    // const user = users.find((user) => user.id === req.params.id);
    
    // user.username = req.body.username;
    // user.age = req.body.age;

    // res.send(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};