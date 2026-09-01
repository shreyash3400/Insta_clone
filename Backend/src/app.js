const express = require("express");
const app = express();
const Router = require("./Routes/user.route")
const postRoute = require("./Routes/post.route")
const cookie = require("cookie-parser");
const followRouter = require("./Routes/follow.route")
const likesRouter = require("./Routes/likes.route")
const cors = require("cors")

app.use(cookie());
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}))

app.use("/api/auth/",Router);
app.use("/api/post",postRoute);
app.use("/api/",followRouter);
app.use("/api/like",likesRouter);



module.exports = app