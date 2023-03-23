const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    max: 100,
    windowMs: 15 * 60 * 1000,
    standardHeaders: true,
    message: "Too many request from this IP"
});

module.exports = limiter;