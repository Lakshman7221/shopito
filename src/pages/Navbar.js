import React, { useState } from "react";
import styled from "styled-components";
import { FaShoppingBag } from "react-icons/fa";
import { Badge } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems} = useSelector((state) => state.Product_Slice);
  return (
    <>
      <Wrapper className="position-fixed top-0 w-100 z-1">
        <div>
          <Link
            to="/"
            className="text-dark"
            style={{ fontWeight: 900, fontSize: "23px" }}
          >
            SHOPito
          </Link>
        </div>
        <div className="d-flex">
          {/* <NavLink to="/filters" className="me-3 text-dark">
            Filters
          </NavLink> */}
          <NavLink to="/create-product" className="me-3 text-dark">
            Create
          </NavLink>
          <NavLink to="/login" className="me-3 text-dark">
            Login
          </NavLink>
          <NavLink to="/register" className="me-3 text-dark">
            Register
          </NavLink>
          <Link to="/cart">
            <Badge badgeContent={cartItems?.length} color="warning">
              <FaShoppingBag size={30} className="text-dark" />
            </Badge>
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e2f2fd;
  padding: 10px 70px;
  .navlinkcolor: {
    color: #30302e;
  }
`;

export default Navbar;
