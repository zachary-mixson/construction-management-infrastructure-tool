const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/routes");
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ message: "DMIT" });
});

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
