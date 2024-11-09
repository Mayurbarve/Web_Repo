const express = require("express");
const fs = require("fs")
const mongoose = require("mongoose")
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//Connection
mongoose
    .connect('mongodb://127.0.0.1:27017/project-1')
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MOngo Error", err));

//Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String
    }
});

const User = mongoose.model('user', userSchema);

//Middleware plugin
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    fs.appendFile("log.text", `\n ${Date.now()}: ${req.method}: ${req.path}`, (err, data) => { next() })
    //req.myUserName = "Mayur Dudhbarve"
    next();

})

app.use((req, res, next) => {
    console.log("Hello from middleware 2");
    //return res.end("request end")    
    next();
})



//routes
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `
    res.send(html)
})

//REST API
app.get("/api/users", (req, res) => {
    //console.log("My name is", req.myUserName);
    res.setHeader("X-MyName", "Mayur Dudhbarve") //custom header
    //Alwasy add X to custom headers
    return res.json(users)
})


app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user)
    })
    .patch((req, res) => {
        //TODO: Edit the user With ID
        return res.send({ status: "pending" })
    })
    .delete((req, res) => {
        //TODO: delete the user with ID
        return res.send({ status: "pending" })
    })

app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.send({ status: "Success", id: users.length })
    })

})


app.listen(PORT, () => console.log(`Server Started at Port No.${PORT}`));
