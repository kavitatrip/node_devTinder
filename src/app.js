const express = require('express');

//server creation
const app =express();

app.use("/hello", (req, res) => {
res.send('Hello from the very first server')
});
// /hello is the router path we have given

app.use("/test", (req, res) => {
res.send('Hello from the very first server test')
});

app.listen(3000); //use to listen the request


console.log('Dev Tinder started');