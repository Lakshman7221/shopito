import React from "react";
import styled from "styled-components";

// COMPONENT --------------------

 // How to use ----> go to another componet import below like this... and send prop value
  // <PriceFormat price={-- varible--}>

const FormatPrice = ({ price = 0 }) => { // price default value
  let amount = price;
  let result = amount.toLocaleString("en-IN", { // en-US
    style: "currency",
    currency: "INR", // USD
  });
  return (
    <Wrapper>
      <div>{result}</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  div {
    color: green;
    font-size: 16px;
    font-weight: bold;
    font-family: "Barlow", sans-serif;
  }
`;
export default FormatPrice;



// FUNCTION --------------------

// How to use ----> this is function you can use like this
// { FormatPrice(price) }

export const FormatPriceFn = (price) => {
  return Intl.NumberFormat("en-IN", {
    // "en-US"
    style: "currency",
    currency: "INR", // USD
    maximumFractionDigits: 2,
  }).format(price);
};
