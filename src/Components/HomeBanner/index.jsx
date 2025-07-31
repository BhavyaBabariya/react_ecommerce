import React from "react";
import Slider from "react-slick";
import Banner1 from "../../assets/images/rakhi_main_web_e7fe784a83.avif";
import Banner2 from "../../assets/images/Adidas_web_a2d4d5e81e.avif";
import Banner3 from "../../assets/images/Static_web_a47383fb18.avif";
import Banner4 from "../../assets/images/casio_web_6a470e70bf.avif";

const HomeBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay:true
  };

  return (
    <div className="homebannerSection">
      <Slider {...settings}>
        <div className="item">
          <img src={Banner1} alt="Banner 1" className="w-100" />
        </div>
        <div className="item">
          <img src={Banner2} alt="Banner 2" className="w-100" />
        </div>
        <div className="item">
          <img src={Banner3} alt="Banner 3" className="w-100" />
        </div>
        <div className="item">
          <img src={Banner4} alt="Banner 4" className="w-100" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
