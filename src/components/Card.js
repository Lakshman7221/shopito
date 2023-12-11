import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../redux/slices/Product_Slice";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StarRating from "./Star_Rating";
import  FormatPrice  from "./FormatPrice";

const Card = (item) => {
  const dispatch = useDispatch();
  const { title, _id, price, mrp ,rating, productImage } = item;
  const [btn, setBtn] = useState(true);

  // add to cart function
  const addHandler = (item) => {
    dispatch(addItem(item));
    setBtn(false);
  };

  // Remove Item

  const removeHandler = (_id) => {
    dispatch(deleteItem(_id));
    setBtn(true);
  };



  return (
    <>
      <Wrapper style={{width:"180px"}}>
        <Link to={`/${_id}`} className="w-100">
          <section className="">
            <div>
              <img
                src={`http://localhost:5000/${productImage}`}
                class="border border-bottom-0 card-img-top"
                alt="imgge tile"
                style={{ height: "70px", objectFit: "contain" }}
              />
            </div>
          </section>
        </Link>
        <Link to={`/${_id}`} className="w-100">
          <section className="">
            <div>
              <div
                className="p-3 bg-light border border-top-0 border-top-0"
                style={{ fontSize: "14px" }}
              >
                <div className="fw-bolder">{title.slice(0, 20)}</div>
                <div className="text-success fw-bolder d-flex">Price:&nbsp; <FormatPrice price={price}/></div>
                <div> 
                  <del className="d-flex">M.R.P. &nbsp;<span className="text-decoration-line-through"><FormatPrice price={mrp}/></span></del>
                </div>
                <div><StarRating rating={rating}/></div>
              </div>
            </div>
          </section>
        </Link>

      {/* ADD OR REMOVE BUTTONS */}

        <section className="">
          <div className="w-100">
            {btn ? (
              <button
                onClick={() => addHandler(item)}
                className=" btn btn-outline-dark w-100 rounded-0 "
                style={{ fontSize: "12px" }}
              >
                Add
              </button>
            ) : (
              <button
                onClick={() => removeHandler(_id)}
                className="btn btn-danger w-100 rounded-0 "
                style={{ fontSize: "12px" }}
              >
                Remove
              </button>
            )}
          </div>
        </section>
      </Wrapper>
    </>
  );
};


const Wrapper = styled.section`
&:hover{
  background-color:white;
  filter: drop-shadow(0px 1px 1px gray);
}
`
export default Card;





























// {/* <section>
//       <div className="cardSection text-center" style={{width:"150px"}}>
//         <img src={`http://localhost:5000/${productImage}`} class="border border-bottom-0 card-img-top" alt="imgge tile" style={{height:"100px", objectFit:"contain"}}/>
//         <div className="p-3 bg-light border border-top-0 border-top-0" style={{fontSize:"14px"}}>
//         <div className="fw-bolder">{title.slice(0,25)}</div>
//         <div className="text-success fw-bolder">Price: ${price}</div>
//         <div><del>M.R.P. {mrp}</del></div>
//         <div>{color}</div>
//         </div>
//         <div className="card-footer d-flex rounded p-0">
//             <div className="w-100">
//             {btn ?
//             <button onClick={()=>addHandler(item)} className=" btn btn-outline-info w-100 rounded-0 " style={{fontSize:"12px"}}>Add </button>
//             :
//             <button onClick={()=>removeHandler(_id)} className="btn btn-danger w-100 rounded-0 " style={{fontSize:"12px"}}>Remove </button>
//             }
//             </div>
//             <Link to={`/${_id}`} className="w-100">
//             <button className="btn btn-outline-info w-100 rounded-0" style={{fontSize:"12px"}}>view </button>
//             </Link>
//         </div>
//       </div>
//     </section> */}
