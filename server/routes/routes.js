const express = require('express');
const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dmit',
    password: 'password',
    port: 5432,
});

const {
    createUser,
    deleteUser,
    changeUsername,
    updatePassword
} = require("../userlogins");

const router = express.Router();

router.post('/createUser', (req, res) => {
    console.log('Received Post')
    const { username, password, phonenumber, email } = req.body;
    console.log(username)
    console.log(password)

    createUser(username, password, phonenumber, email)
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
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if email and password match in the database
        const query = 'SELECT * FROM public.userlogins WHERE email = $1 AND password = $2';
        const values = [email, password];
        const result = await pool.query(query, values);

        if (result.rowCount === 1) {
            // Login successful
            res.status(200).json({ message: 'Login successful' });
        } else {
            // Login failed
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
module.exports = router;
