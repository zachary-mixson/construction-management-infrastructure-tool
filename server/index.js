const express = require("express")
const {createUser,deleteUser,changeUsername,updatePassword} = require("./userlogins")
const PORT = process.env.PORT || 3001;
const app = express();


app.get("/api", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.get("/createUser/:username/:password", (req, res) => {
    createUser(req.params.username, req.params.password);
    res.send("User created successfully.");
});

app.get("/deleteUser/:username/:password", (req, res) => {
    deleteUser(req.params.username, req.params.password);
    res.send("User deleted successfully.");
});

app.get("/updatePassword/:username/:currentPassword/:newPassword", (req, res) => {
    updatePassword(req.params.username, req.params.currentPassword, req.params.newPassword);
    res.send("Password updated successfully.");
});

app.get("/changeUsername/:currentUsername/:password/:newUsername", (req, res) => {
    changeUsername(req.params.currentUsername, req.params.password, req.params.newUsername);
    res.send("Username changed successfully.");
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})
