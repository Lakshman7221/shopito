import React, { useEffect, useState } from "react";
import { IoBagRemove } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch} from "react-redux";
import { addItem, decrementItem, deleteItem, removeAll } from "../redux/slices/Product_Slice";
import EmptyBag from "./EmptyBag";
import FormatPrice from "../components/FormatPrice"

const Cart = ({ cartItems }) => {
  const dispatch = useDispatch()

// delete Handler-----------------------

  const deleteHandler = (_id)=>{
    dispatch(deleteItem(_id))
  }

 // remove all handler -----------------------
 
 const removeAllHandler = ()=>{
  dispatch(removeAll())
 }

 // decrement Quanty -----------------------

 const decrementQnty = (item)=>{
  if(item.qunty > 1){
    dispatch((decrementItem(item._id)))
  }else{
    dispatch((deleteItem(item._id)))
  }
 }

// Add to cart Quanty also increment qunty..-----------------------

const incrementQnty = (item)=>{
  dispatch(addItem(item))
}


// total Amount and Total Count-----------------------

const [quantity, setQuantity] = useState(0)
const [totalPrice, setTotalprice] = useState(0)


 const TotalPrice= ()=>{
  let totalPrice = 0;
  cartItems.map((cur)=>{
      totalPrice = cur.price * cur.qunty + totalPrice;
  })
  setTotalprice(totalPrice)
}
 
const TotalQuantity= ()=>{
  let totalQuantity = 0;
  cartItems.map((cur)=>{
      totalQuantity = cur.qunty + totalQuantity
  })
  setQuantity(totalQuantity)
}
 
useEffect(()=>{
  TotalPrice()
  TotalQuantity()
},[TotalPrice, TotalQuantity])

  return (
    <div className="container">
      
      <section className="container mt-3 bg-dark text-white px-5 py-1 d-flex justify-content-between align-items-center">
        <div className="text-white">Cart Calculation </div>
        <div>
          <button onClick={removeAllHandler} className="btn d-flex text-warning align-items-center">
            <IoBagRemove size={30} /> &nbsp; Remove All
          </button>
        </div>
      </section>
      {
        cartItems.length < 1 ? <EmptyBag/> :
      
      <table className="table">
        <thead>
          <tr className="">
            <th className="col-md-1  text-black-50">S.No</th>
            <th className="col-md-2  text-black-50">Image</th>
            <th className="col-md-2  text-black-50">Product</th>
            <th className="col-md-1  text-black-50">Price</th>
            <th className="col-md-2  text-black-50">Quantity</th>
            <th className="col-md-2  text-black-50">Total</th>
            <th className="col-md-1  text-black-50">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems &&
            cartItems.map((item, index) => {
              const { title, _id, price, qunty, productImage } = item;
              return (
                <tr>
                  <th>{index+1}</th>
                  <td>
                    
                    <img
                      src={`http://localhost:5000/${productImage}`}
                      alt={title}
                      style={{width:"50px", height:"50px", objectFit:"contain"}}
                    />
                    
                  </td>
                  <td>{title?.slice(0,30)}</td>
                  <td><FormatPrice price={price}/></td>
                  <td>
                    {/* Incremetn Button */}
                    <button onClick={()=>incrementQnty(item)} className="btn btn-outline-success btn-sm">
                      <IoMdAdd />
                    </button>
                    <button className="btn"> {qunty} </button>

                    {/* Decrement Button */}

                    <button onClick={()=>decrementQnty(item)} className="btn btn-outline-danger btn-sm">
                      <FaMinus />
                    </button>
                  </td>
                  <td><FormatPrice price={price * qunty}/></td>

                  {/* delete Button */}

                  <td className="opacity-50">
                    <button onClick={()=> deleteHandler(_id)} className="btn">
                      <MdDelete size={25} color="red" />
                    </button>
                  </td>
                </tr>
              );
            })}
          
          <tr className="shadow">
          <td colspan="4"></td>
            <td className="d-flex align-items-center">
              <div>Total Quantity &nbsp;</div>
              <b className="text-success fs-6"> 0{quantity}</b>
            </td>
            <td colspan="0" className="">
              <span>Total Price:</span>
              <b className="text-success"><FormatPrice price={totalPrice}/></b>
            </td>
          </tr>
        </tbody>
      </table>
    }
    </div>
  );
};

export default Cart;
