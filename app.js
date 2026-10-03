const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from Elevate Labs Jenkins CI/CD Pipeline!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        service: "jenkins-demo-app"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});