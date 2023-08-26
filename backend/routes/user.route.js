const express = require("express");
const { createUser, getUserById, updateUser, deleteUser } = require("../controllers/userControllers");
const router = express.Router;
const userRoute = router();

userRoute.post('/', createUser);
userRoute.get('/:id', getUserById);
userRoute.put('/:id', updateUser);
userRoute.delete('/:id', deleteUser);

module.exports = userRoute;