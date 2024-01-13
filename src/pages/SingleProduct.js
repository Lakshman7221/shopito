import React from 'react'
import { useSelector } from 'react-redux'
import {Link, useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import StarRating from '../components/Star_Rating';
import  FormatPrice  from '../components/FormatPrice';

const SingleProduct = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {AllProducts} = useSelector(state=> state.Product_Slice)
    const singleItem = AllProducts?.find((item)=> item._id === id )
    const{title, price, _id, rating, mrp, brand, productImage} = singleItem;
       
  return (
    <div className='position-relative' style={{marginTop:"65px"}}>
        <section className='container'>
            <h6 className='py-3'>{title} </h6>
            <div className='d-flex w-100'>
                <div className='p-3 flex-fill'>
                  <div>
                    <img src={`http://localhost:5000/${productImage}`} alt={title} width="400px" height="400px" style={{objectFit:"contain"}}/>
                  </div>
                </div>
                <div className='bg-light flex-fill'>
                  <div className='p-5'>
                  <h4>{title}</h4>
                  <h5><FormatPrice price={price}/></h5>
                  <del className='text-decoration-line-through'><FormatPrice price={mrp}/></del>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sequi velit dicta nostrum, tempore similique! Nulla, facere non. Autem dolor voluptatum distinctio aspernatur sint quos? Sequi labore natus ad tempore?
                  Aut asperiores dolor adipisci, aliquid doloremque cupiditate, nostrum laudantium mollitia earum consequatur dignissimos quidem ipsa magni placeat eius illo sed veniam exercitationem a fuga. Architecto, odio dicta! Quaerat, amet rerum?</p>
                  <h5>{brand}</h5>
                  <div className='pb-3'><StarRating rating={rating}/></div>
                  <Link to={`/update/${_id}`}>
                  <button className='btn btn-dark px-3 me-3 rounded-0'>Edit</button>
                  </Link>
                  <button onClick={()=> navigate(-1)} className='btn btn-outline-dark rounded-0'><FaArrowLeftLong size={25} /></button>
                  </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SingleProduct