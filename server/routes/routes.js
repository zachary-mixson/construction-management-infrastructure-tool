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

router.get('/deleteUser/:username/:password',(req,res) => {
    deleteUser(req.params.username,req.params.password)
        .then(() => {
            res.send("User deleted successfully");
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get("/updatePassword/:username/:currentPassword/:newPassword", (req, res) => {
    updatePassword(req.params.username, req.params.currentPassword, req.params.newPassword)
        .then(()=>{
            res.send("Password updated successfully.");

        })
        .catch((err)=>{
            console.error(err);
            res.status(500).send('Internal Server Error')
        });
});

router.get("/changeUsername/:currentUsername/:password/:newUsername", (req, res) => {
    changeUsername(req.params.currentUsername, req.params.password, req.params.newUsername)
        .then(()=>{
            res.send("Username changed successfully.");

        })
        .catch((err)=>{
            console.error(err);
            res.status(500).send('Internal Server Error')
        });
});

module.exports = router;