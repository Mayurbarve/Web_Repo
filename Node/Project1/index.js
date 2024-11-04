const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//routes
app.get("/users", (req ,res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `
    res.send(html)
})

app.route("/api/users").get((req, res) =>{
    return res.json(users)
})
.post((req, res) =>{
    //TODO: Create New User
    return res.send({status: "pending"})
})

app.route("/api/users/:id").get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user)
}) 
.put((req, res) => {})
.patch((req, res) =>{
    //TODO: Edit the user With ID
    return res.send({status: "pending"})
})
.delete((req, res) =>{
    //TODO: delete the user with ID
    return res.send({status: "pending"})
})




app.listen(PORT, () => console.log(`Server Started at Port No.${PORT}`));