import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Filter_Section = ({radioBtnHandler}) => {
const {AllProducts} = useSelector(state=> state.Product_Slice)

const category = AllProducts?.map((item)=> item.category)
const colors = AllProducts?.map((item)=> item.color)
const brands = AllProducts?.map((item)=> item.brand)

const uniqueCategory = ["All",...new Set(category)]
const uniqueColor = [...new Set(colors)]
const uniqueBrands = [...new Set(brands)]
const mergeAll = [...category, ...brands, ...colors]
const uniqueValues = [...new Set(mergeAll)]

  return (
    <Wrapper>

    {/* category section */}
      <section>
      <div className="fw-bolder my-2 text-info">CATEGORY</div>
        <section>
          {
            uniqueCategory && uniqueCategory?.map((item)=>{
              return(
                <div>
            <input type="radio" name="name" value={item} onChange={radioBtnHandler} />
            <span className="ps-1">{item}</span>
          </div>
              )
            })
          }
        </section>
      </section>


      <section>
        <div className="fw-bolder my-2 underline text-info">BRANDS</div>
        {
          uniqueBrands && uniqueBrands.map((item)=>{
              return(
                <div>
            <input type="radio" name="name" value={item} onChange={radioBtnHandler} />
            <span className="ps-1">{item}</span>
          </div>
              )
            })
          }
      </section>
          {/* category section */}
          <section>
          <div className="fw-bolder my-2 text-info">PRICE</div>
          <div>
            <input type="radio" name="name" value="20000" onChange={radioBtnHandler}/>
            <span className="ps-1">0 - 20000</span>
          </div>
          <div>
            <input type="radio" name="name" value="20000-50000" onChange={radioBtnHandler}/>
            <span className="ps-1">20000 - 50000</span>
          </div>
          <div>
            <input type="radio" name="name" value="50000" onChange={radioBtnHandler}/>
            <span className="ps-1">upto 50000</span>
          </div>
      </section>
          {/* color section */}
          <section>
          <div className="fw-bolder my-2 text-info">COLORS</div>
          {
            uniqueColor && uniqueColor.map((item)=>{
              return(
                <div>
            <input type="radio" name="name" value={item} onChange={radioBtnHandler} />
            <span className="ps-1">{item}</span>
          </div>
              )
            })
          }
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default Filter_Section;
