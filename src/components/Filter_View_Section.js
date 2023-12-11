import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gridView } from "../redux/slices/Product_Slice";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";

const FilterViewSection = ({setSearch, select, search, setSelect }) => {
  const {products} = useSelector(state=> state.Product_Slice)
  const dispatch = useDispatch()
  return (
    <div>
      <section className="d-flex justify-content-between align-items-center">
        <div>
          <button onClick={()=> dispatch(gridView(true))} className="btn btn-outline-info btn-sm"> <IoGrid size={20}/></button>
          <button onClick={()=> dispatch(gridView(false))}className="btn btn-outline-info btn-sm m-2"> <FaList size={20}/></button>
        </div>
        <div className="w-50">
          <input type="text" placeholder="search" value={search} onChange={(e)=> setSearch(e.target.value)}/>
        </div>
        <div>
        <span> Search Results: {products?.length}</span>
        </div>
        <div>
          <select name="products" value={select} onChange={(e)=>setSelect(e.target.value)}>
            <option value= "default" selected>Default</option>
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
            <option value="assending">Assending</option>
            <option value="dessending">Dessending</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default FilterViewSection;
