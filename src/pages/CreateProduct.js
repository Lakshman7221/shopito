import React, { useEffect, useState } from "react";
// import CreateProductStyles from "../Global_Styles/Components_Styles/CreateProduct_Styles";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, getAllProducts, updateProduct } from "../redux/slices/Product_Slice";
import { useNavigate, useParams } from "react-router-dom";

const UpdatingProduct = () => {
  const dispatch = useDispatch();
  const {id} = useParams()
  const navigate = useNavigate()
  const {products} = useSelector(state => state.Product_Slice)
  const singleItem = products?.find((item)=> item._id === id)


  const [productImage, setProductImage] = useState(null);
  const [input, setInput] = useState({
    title: "" || singleItem?.title,
    category: "" || singleItem?.category,
    brand: "" || singleItem?.brand,
    mrp: 0 || singleItem?.mrp,
    price: 0 || singleItem?.price,
    color:"" || singleItem?.color,
    rating:0 || singleItem?.rating,
    stock:0 || singleItem?.stock,
    desc: "" || singleItem?.desc,
  });
  const { title, price, category, brand, mrp,  desc, color, rating } = input;

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const formData = new FormData();
  formData.append("title", title);
  formData.append("price", price);
  formData.append("category", category);
  formData.append("brand", brand);
  formData.append("mrp", mrp);
  formData.append("desc", desc );
  formData.append("color", color );
  formData.append("rating", rating );
  formData.append("productImage", productImage);

  const submitHandler = async (e) => {
    e.preventDefault();
   if(id){
     dispatch(updateProduct({formData, id}));
     navigate(`/update/${id}`)
   }else{
    dispatch(createProduct(formData));
    setInput({ title: "", price: "", category: "",brand: "",mrp: "", color:"",rating:""})
   }
  };

  return (
    <div className='position-relative' style={{marginTop:"65px"}}>
      <div className="my-3 d-flex justify-content-center">
        <img src="/amazon.png" alt="amazon" width="150px" />
      </div>
      <section className="container">
        <div className="fs-3 d-flex justify-content-center">Create Product</div>
        <p className="text-center lead fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Nam ab animi incidunt odit, facere voluptatem!</p>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <label className="inputColor">Product Title</label><br/>
            <input
              value={title}
              onChange={inputHandler}
              name="title"
              type="text"
              className="w-100 mb-2"
              placeholder="title"
              autocomplete="off"
            />
            <label className="inputColor">Product Price</label><br/>
            <input
              value={price}
              onChange={inputHandler}
              name="price"
              type="text"
              className="w-100 mb-2"
              autocomplete="off"
              placeholder="price"
            />
            <label className="inputColor">Product Category</label><br/>
            <input
              value={category}
              onChange={inputHandler}
              name="category"
              type="text"
              className="w-100 mb-2"
              autocomplete="off"
              placeholder="category"
            />
            <label className="inputColor">Product brand</label><br/>
            <input
              value={brand}
              onChange={inputHandler}
              name="brand"
              type="text"
              className="w-100 mb-2"
              autocomplete="off"
              placeholder="brand"
            />
            <label className="inputColor">M.R.P Rate</label><br/>
            <input
              value={mrp}
              onChange={inputHandler}
              name="mrp"
              type="text"
              className="w-100 mb-2"
              autocomplete="off"
              placeholder="M.R.P"
            />                        
          </div>
          <div className="col-md-3">
            <label className="inputColor">Product Color</label><br/>
            <input
              value={color}
              onChange={inputHandler}
              name="color"
              type="text"
              className="w-100 mb-2"
              autocomplete="off"
              placeholder="color"
            />
            <label className="inputColor">Product Rating</label><br/>
            <input
              value={rating}
              onChange={inputHandler}
              name="rating"
              type="Number"
              className="w-100 mb-2"
              autocomplete="off"
              placeholder="rating"
            />
            
            <label className="inputColor">Product Description</label><br/>
            <input
              value={desc}
              onChange={inputHandler}
              name="desc"
              type="text"
              className="w-100 mb-2"
              autocomplete="off"
              placeholder="description"
            />
            <label className="inputColor">product image:</label><br/>
            <input
              type="file"
              onChange={(e) => setProductImage(e.target.files[0])}
              className="w-100 mb-2"
              
            />
            <input
            type="button"
            onClick={submitHandler}
            encType="multipart/form-data"
            class="btn btn-primary w-100"
            value={id ? "update" : "Create Product"}
            autocomplete="off"
            />
              
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default UpdatingProduct;
