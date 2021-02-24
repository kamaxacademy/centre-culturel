// Import express
import express from "express"

// Import users-controller
import {getAllUsers} from '../controllers/userController.js'

// Create router
const router = express.Router()

// Add route for GET request to retrieve all users
// In server.js, users route is specified as '/users'
// this means that '/all' translates to '/users/all'
router.get('/all', getAllUsers)


export default router;