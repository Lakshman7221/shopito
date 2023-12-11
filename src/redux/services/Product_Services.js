import axios from "axios"

// const API = "http://localhost:5000/api/product/"

// create data ---
const createProduct = async(formData)=>{
    return await axios.post("http://localhost:5000/api/product/", formData).then(res=> console.log("suceessfully sent data to DB.."));
}
const getAllProducts = async()=>{
    const res =  await axios.get("http://localhost:5000/api/product/");
    return res.data;
    
}
const updateProduct = async({formData,id})=>{
    const res =  await axios.put(`http://localhost:5000/api/product/update/${id}`, formData);
    return res.data;
}

const Product_Services={
    createProduct,
    getAllProducts,
    updateProduct,
}

export default Product_Services
