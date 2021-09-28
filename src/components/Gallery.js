import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
// import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import withAutoplay from "react-awesome-slider/dist/autoplay";
import { createGlobalStyle } from "styled-components";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Gallery = ({ images }) => {
  return (
    <>
      <GlobalStyle />
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
        animation="open-animation"
        mobileTouch={true}
        bullets={false}
      >
        {images?.map((image) => {
          return (
            <div data-src={image.url} alt="platForm">
              <p>{image.label}</p>
            </div>
          );
        })}
      </AutoplaySlider>
    </>
  );
};
const GlobalStyle = createGlobalStyle`
.awssld__wrapper,.awssld__content{
  max-height: 70vh;
}
`;
export default Gallery;
