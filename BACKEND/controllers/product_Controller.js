const asyncHandler = require("express-async-handler");
const product_Schema = require("../models/product_Schema");

// create product-------------------

const createProduct = asyncHandler(async (req, res) => {
  const { title, brand, price, category, mrp, desc, color, rating } = req.body;
  var {filename}= req.file;
  try {

    if (!title && !brand && !price) {
      throw new Error("Please fill all Fields");
    }
    await product_Schema.create({
      title,
      brand,
      price,
      category,
      desc,
      color,
      rating,
      mrp,
      productImage:filename,
    });
    res.json({ status: "sucessfully sent data" });
  } catch (error) {
    throw new Error(error);
  }
});

// get products-------------------

const getProducts = asyncHandler(async (req, res) => {
  try {
    const getAllData = await product_Schema.find()
    res.json(getAllData); // only for showing result in api tesging tool.
  } catch (error) {
    throw new Error(error);
  }
});

// update prodcut------------------------

const updateProduct = asyncHandler(async(req, res)=>{
  const {id} = req.params
  const {title, price} = req.body
  const {filename} = req.file
  try {
    await product_Schema.findByIdAndUpdate(
      {_id:id},
      {
        title,
        price,
        image:filename,
      },
      {
        new:true,
      }
      )
    res.status(200).json("sucessfully Updated..")
  } catch (error) {
    throw new Error(error);
  }
})

module.exports = {
  createProduct,
  getProducts,
  updateProduct
};
