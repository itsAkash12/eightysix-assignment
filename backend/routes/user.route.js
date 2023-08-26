const express = require("express");
const { createUser, getUserById, updateUser, deleteUser, getAllUsers } = require("../controllers/userControllers");
const router = express.Router;
const userRoute = router();

userRoute.post('/', createUser);
userRoute.get('/', getAllUsers);
userRoute.get('/:id', getUserById);
userRoute.put('/:id', updateUser);
userRoute.delete('/:id', deleteUser);

module.exports = userRoute;