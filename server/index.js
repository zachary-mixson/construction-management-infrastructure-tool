const express = require("express")
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/routes");


app.get("/api", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.use('/',routes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})
