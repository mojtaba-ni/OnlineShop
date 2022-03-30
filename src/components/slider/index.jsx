import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../Card";
import '../../style/components/slider.scss'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#222", borderRadius:"10px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",background: "#222", borderRadius:"10px"}}
        onClick={onClick}
      />
    );
  }
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Card/>
          </div>
          <div>
          <Card/>
          </div>
          <div>
          <Card/>
          </div>
          <div>
          <Card/>
          </div>
          <div>
          <Card/>
          </div>
          <div>
          <Card/>
          </div>
          <div>
          <Card/>
          </div>
          <div>
          <Card/>
          </div>
        </Slider>
      </div>
    );
  }
}