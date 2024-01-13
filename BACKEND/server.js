const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const morgan = require("morgan");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const { errorHandler, notFound } = require("./middlewares/errorHandler");
const product_Router = require("./routers/product_Router");

dbConnect()

// middlewares---

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(morgan("dev"))
app.use(express.json({ limit: "100mb" }));
app.use(express.static("public/images"))
app.use(express.urlencoded({ extended: false, limit: "100mb", parameterLimit: 100000 }));
app.use(
    cors({
        origin: "*"
        // origin:["http://localhost:3000", "http://designx-app.vercel.app"],
        // credentials: true,
    })
);


// app.use("/", (req,res)=>{
//     res.send("Hellow Worl")
// })

app.use("/api/product", product_Router)


app.use(notFound)
app.use(errorHandler)

app.listen(PORT, ()=>{console.log(`Servre is running at PORT ${PORT}`)});

