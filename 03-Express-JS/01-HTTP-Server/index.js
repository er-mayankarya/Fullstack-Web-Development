const express = require("express");

const app = express();

// Middleware - 
/*
    1. Modifying the request or response objects.
    2. Ending the request-response cycle.
    3. Calling the next middleware function in the stack.
*/

app.use(function(req, res, next) {
    console.log("request received");
    next();
});

// Sum Route
app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

// Multiply Route
app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});


// Division Route
app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});


// Subtract Route
app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);