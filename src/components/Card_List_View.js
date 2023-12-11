import React, {useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../redux/slices/Product_Slice";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "./FormatPrice";
import StarRating from "./Star_Rating";

const Card_List_Veiw = (item) => {
  const dispatch = useDispatch();
  const { title, _id, rating, price, mrp, desc, productImage } = item;
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

  // View Handler

  return (
    <>
      <Wrapper className="d-flex p-3 w-100 border align-items-center">
        <Link to={`/${_id}`}>
          <section className="">
            <div>
              <img
                src={`http://localhost:5000/${productImage}`}
                alt="imgge tile"
                style={{ width:"150px", height:"150px", objectFit: "contain" }}
              />
            </div>
          </section>
          </Link>
       
          <section className="ps-5">

              <div style={{ fontSize: "14px" }}
              >
                <div className="fw-bolder">{title}</div>
                <div className="text-success fw-bolder">Price: <FormatPrice price={price}/></div>
                <div>M.R.P. 
                  <span className="text-decoration-line-through"><FormatPrice price={mrp}/></span>
                </div>
                <div><StarRating rating={rating}/></div>
                <div>{desc}</div>
              </div>

            <div className="w-100 pt-3">
            {btn ? (
              <button
                onClick={() => addHandler(item)}
                className=" btn btn-outline-dark rounded-0 "
                style={{ fontSize: "12px" }}
              >
                Add
              </button>
            ) : (
              <button
                onClick={() => removeHandler(_id)}
                className="btn btn-danger rounded-0 "
                style={{ fontSize: "12px" }}
              >
                Remove
              </button>
            )}
            <Link to={`/${_id}`}>
            <button
                className=" btn btn-warning ms-3 rounded-0 "
                style={{ fontSize: "12px" }}
              >
                More
              </button>
              </Link>
          </div>

          </section>
        

     


      </Wrapper>
    </>
  );
};


const Wrapper = styled.section`

`
export default Card_List_Veiw;


