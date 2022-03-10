require('./database/db');
const express = require("express");
const app = express();
const User_router = require('./routes/user');
const Certif_router = require('./routes/certif');
const Login_router = require('./routes/login');
const reservation_router = require('./routes/reservation');

app.use(express.json());
app.use("/api/user", User_router);
app.use("/api/certif", Certif_router);
app.use("/api/login", Login_router);
app.use("/api/reservation", reservation_router);

app.listen(3000);