import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const StarRating = ({ rating = 4 }) => {
  // How to use ----> go to another import like this... and send prop value
  // <StarRating rating={-- num varible--}>

  const starRating = Array.from({ length: 5 }, (ele, index) => {
    let value = rating;
    let number = index + 0.5; // [0,1,2,3,4,] +0.5 [0.5, 1.5, 2.5, 3.5, 4.5]
    return (
      <div>
        {value >= index + 1 ? (
          <FaStar size={15} color="green" /> // [0,1,2,3,4] index+1 [1,2,3,4,5]
        ) : value >= number ? (
          <FaStarHalfAlt size={15} color="green" />
        ) : (
          <AiOutlineStar size={16} color="green" />
        )}
      </div>
    );
  });

  return <Wrapper>{starRating}</Wrapper>;
};

const Wrapper = styled.section`
  display: flex;
`;

export default StarRating;

// How to use ----> go to another import like this... and send prop value
// <StarRating rating={-- num varible--}>
