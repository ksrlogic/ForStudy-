import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import slider1 from "../images/slider_1.jpg";
// Slider 만들기
// Styled Component
// Folder division
const Slider = () => {
  const [left, setLeft] = useState(0);

  const MAX = -300;

  useEffect(() => {
    if (left > 0) {
      setLeft(MAX);
    } else if (left < MAX) {
      setLeft(0);
    }
    console.log(left);
  }, [left]);

  const leftBtn = () => {
    setLeft(left + 100);
  };
  const rightBtn = () => {
    setLeft(left - 100);
  };

  return (
    <>
      <h1 className="slider_h1" style={{ textAlign: "center" }}>
        Slider Made by React
      </h1>
      <StyledSlider left={left} className="slider">
        <img src={slider1} alt="" />
        <img src="images/slider_2.jpg" alt="" />
        <img src="images/slider_3.jpg" alt="" />
        <img src="images/slider_4.jpg" alt="" />
      </StyledSlider>
      <button onClick={leftBtn}>left</button>
      <button onClick={rightBtn}>right</button>
    </>
  );
};

// Slider.propTypes = {
//   left: PropTypes.node.isRequired,
// };
const StyledSlider = styled.div`
  left: ${(props) => props.left}%;
`;
export default Slider;
