// Import express
import express from "express"
import expressAsyncHandler from 'express-async-handler';

// Import users-controller
import {getAllUsers, createUser, getUser, deleteUser, updateUser} from '../controllers/userController.js'

// Create router
const router = express.Router()



// Add route for GET request to retrieve all users
// In server.js, users route is specified as '/users'
// this means that '/all' translates to '/users/all'
router.get('/', getAllUsers)


router.post('/', createUser)


router.get('/:id',getUser)


router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;