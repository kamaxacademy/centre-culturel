import bcrypt from 'bcryptjs';
// var sqlite3 = require('sqlite3').verbose()
import sqlite3 from 'sqlite3'

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            password text, 
            CONSTRAINT email_unique UNIQUE (email)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO users (name, email, password) VALUES (?,?,?)'
                db.run(insert, ["admin","admin@example.com",bcrypt.hashSync("admin123456")])
                db.run(insert, ["user","user@example.com",bcrypt.hashSync("user123456")])
            }
        });  
    }
});


// module.exports = db
export default db;