const express = require("express");

const app = express();

app.use(express.json());
const users = [
    {
        id: 1,
        name: "Siri",
        email: "siri@gmail.com",
        age: 22
    },
    {
        id: 2,
        name: "Chandana",
        email: "chandana@gmail.com",
        age: 21
    }
];
app.get("/", (req, res) => {
    res.send("REST API is working");
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.get("/users/:id", (req, res) => {

    const userId = parseInt(req.params.id);

    const user = users.find(
    (user) => user.id === userId
    );

    if (!user) {
    return res.status(404).json({
        message: "User not found"
    });
    }

    res.json(user);

});

app.post("/users", (req, res) => {

    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    };

    users.push(newUser);

    res.json(newUser);

});
app.put("/users/:id", (req, res) => {

    const userId = parseInt(req.params.id);

    const user = users.find(
        (user) => user.id === userId
    );
    if (!user) {
    return res.status(404).json({
        message: "User not found"
    });
    } 

    user.name = req.body.name;
    user.email = req.body.email;
    user.age = req.body.age;

    res.json(user);

});

app.delete("/users/:id", (req, res) => {

    const userId = parseInt(req.params.id);

    const userIndex = users.findIndex(
        (user) => user.id === userId
    );
    if (userIndex === -1) {
    return res.status(404).json({
        message: "User not found"
    });
    }
    users.splice(userIndex, 1);

    res.json({
        message: "User deleted successfully"
    });

});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});