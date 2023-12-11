import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FilterSection from "../components/Filter_Section";
import FilterViewSection from "../components/Filter_View_Section";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import CardListView from "../components/Card_List_View";
import { filterCategory, getAllProducts, searchProduct, sortingProduct } from "../redux/slices/Product_Slice";
import Pagenation from "../components/Pagenation";

const Filters = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState();
  const [select, setSelect] = useState(null);
  const {AllProducts,products, cartItems, grid} = useSelector((state) => state.Product_Slice);
  const [category, setCategory] = useState()

// pagenation------

  // category filters

  const radioBtnHandler = (e)=>{
  setCategory(e.target.value)
}

    useEffect(()=>{
      try{
        dispatch((getAllProducts()))
      }catch(err){
        console.log(err)
      }
    },[dispatch])
  
  useEffect(()=>{
  localStorage.setItem("allproducts", JSON.stringify(AllProducts))
  localStorage.setItem("cartItems", JSON.stringify(cartItems))
  },[AllProducts, cartItems])


    useEffect(()=>{
    dispatch(searchProduct(search))
    },[dispatch, search])

    useEffect(()=>{
    dispatch(sortingProduct(select))
    },[dispatch, select])

    useEffect(()=>{
    dispatch(filterCategory(category))
    },[dispatch, category])

 

  return (
    <Wrapper
      className="container position-relative"
      style={{ marginTop: "65px" }}
    >
      <div className="row">
        <section className="col col-md-2 border border-end-0">
          <FilterSection radioBtnHandler={radioBtnHandler}/>
        </section>
        <section className="col col-md-10 border">
          <div className="row">
            <div className="col">
              <FilterViewSection
                setSearch={setSearch}
                value={select}
                setSelect={setSelect}
                search={search}
              />
            </div>
          </div>
          <div>
            <div className="row">
              {
                grid ?
                <div className="d-flex gap-4 mt-3 flex-wrap justify-content-center">
                {products && products?.map((item) => <Card key={item.id} {...item} />)}
              </div>
                : 
                <div className="d-flex gap-4 mt-3 flex-wrap justify-content-center">
                {products && products?.map((item) => <CardListView key={item.id} {...item} />)}
              </div>
              }
  
            </div>
            <div className="row">
            
            </div>
          </div>
        </section>
      </div>
     
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default Filters;
