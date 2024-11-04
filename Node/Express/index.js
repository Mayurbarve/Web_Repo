const express = require("express")

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello, From Server!")
});

app.get("/about", (req, res) => {
    return res.send("I am Universe!")
});

app.listen(8000, () => console.log("Server Started!"))