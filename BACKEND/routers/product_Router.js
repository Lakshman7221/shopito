const express = require("express")
const product_Router = express.Router()
const multer = require("multer")
const { createProduct, getProducts, updateProduct } = require("../controllers/product_Controller")

// multer storage setup ------------

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "public/images")
    },
    filename: (req, file, cb)=> {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname )
    }
})
const upload = multer({storage:storage})

//---------------------------------

product_Router.post("/",upload.single("productImage"), createProduct)
product_Router.get("/",getProducts)
product_Router.put("/update/:id", upload.single("productImage"),updateProduct)

module.exports = product_Router