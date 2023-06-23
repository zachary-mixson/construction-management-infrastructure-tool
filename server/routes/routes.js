const express = require('express');

const {
    createUser,
    deleteUser,
    changeUsername,
    updatePassword
} = require("../userlogins");

const router = express.Router();

router.post('/createUser', (req, res) => {
    console.log('Received Post')
    const { username, password, phonenumber } = req.body;
    console.log(username)
    console.log(password)

    createUser(username, password,phonenumber)
        .then(() => {
            res.json({ message: "User created successfully" });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

router.post('/deleteUser', (req, res) => {
    const { username, password } = req.body;

    deleteUser(username, password)
        .then(() => {
            res.json({ message: "User deleted successfully" });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

router.post("/updatePassword", (req, res) => {
    const { username, currentPassword, newPassword } = req.body;

    updatePassword(username, currentPassword, newPassword)
        .then(() => {
            res.json({ message: "Password updated successfully" });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

router.post("/changeUsername", (req, res) => {
    const { currentUsername, password, newUsername } = req.body;

    changeUsername(currentUsername, password, newUsername)
        .then(() => {
            res.json({ message: "Username changed successfully" });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

module.exports = router;
