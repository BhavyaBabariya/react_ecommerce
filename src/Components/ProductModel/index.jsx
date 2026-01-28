import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/styles.min.css';
import QuentityBox from "../QuentityBox";

import product_img_2 from "../../assets/images/product-image-8-2.jpg";
import product_img_3 from "../../assets/images/product-image-8-3.jpg";

const ProductModel = ({ product, setisOpenProductModel }) => {
  const handleClose = () => setisOpenProductModel(false);

  const images = [product?.image, product_img_2, product_img_3];

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const mainSettings = {
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };

  const thumbSettings = {
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    slidesToShow: images.length,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    centerMode: false,
    swipeToSlide: true,
  };

  return (
    <Dialog open={true} className="productModel" onClose={handleClose} maxWidth="md" fullWidth>
      {/* Close Button */}
      <Button
        className="close"
        onClick={handleClose}
        style={{ position: 'absolute', top: 10, right: 10 }}
      >
        <IoMdCloseCircleOutline size={24} />
      </Button>

      {/* Product Title */}
      <h4 className="mb-1 popup-title">{product?.title || "Product Title"}</h4>

      {/* Brand and Rating */}
      <div className="d-flex align-items-center mb-2">
        <div className="d-flex align-items-center mr-4">
          <span>Brand:</span>
          <span className="popup-brand"><b>{product?.brand || "Welch's"}</b></span>
        </div>
        <Rating name="read-only" value={5} readOnly className="rating" />
      </div>

      <hr />

      <div className="row mt-2 productDetailModal">
        {/* Image Slider with Zoom */}
        <div className="col-md-5">
          <div className="badge badge-primary">
            {product?.discount}%
          </div>
          <Slider {...mainSettings} className="mainSlider">
            {images.map((img, index) => (
              <div key={index}>
                <InnerImageZoom
                  src={img}
                  zoomSrc={img}
                  zoomType="hover"
                  zoomPreload={true}
                  alt={`Product ${index}`}
                  className="img-fluid"
                />
              </div>
            ))}
          </Slider>

          {/* Thumbnails */}
          <div className="mt-2">
            <Slider {...thumbSettings} className="thumbSlider">
              {images.map((img, index) => (
                <div key={index} style={{ padding: "0 5px" }}>
                  <img
                    src={img}
                    alt={`thumb-${index}`}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      cursor: "pointer",
                      borderRadius: "5px",
                      border: "1px solid #ddd",
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Product Info */}
        <div className="col-md-7">
          <div className="d-flex info align-items-center">
            <span className="oldPrice lg">
              ${product.oldPrice.toFixed(2)}
            </span>
            <span className="netPrice text-danger lg">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <span className="badge bg-success mt-2">
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
          <p className="mt-3">
            Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
          </p>

          <div className="d-flex align-items-center">
            <QuentityBox />
            <Button variant="contained" className="btn-blue btn-lg btn-big btn-round mt-3 ms-2">
              Add to Cart
            </Button>
          </div>

          <div className="d-flex align-items-center mt-5 actions">
            <Button variant="outlined" className="btn-round btn-sml">
              <FaRegHeart /> &nbsp; Add To Wishlist
            </Button>
            <Button variant="outlined" className="btn-round btn-sml compare-btn">
              <MdOutlineCompareArrows /> &nbsp; Compare
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModel;
