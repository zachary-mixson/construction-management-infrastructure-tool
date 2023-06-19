const express = require('express');

const{
    createUser,
    deleteUser,
    changeUsername,
    updatePassword
} = require("../userlogins");

const router = express.Router();

router.get('/createUser/:username/:password',(req,res) => {
    createUser(req.params.username,req.params.password)
        .then(() => {
            res.send("User created successfully");
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});
