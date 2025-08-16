import React from "react";
import HomeBanner from "../../Components/HomeBanner";
import sideimg from "../../assets/images/sidebanner.jpg";
import sideimg1 from "../../assets/images/sidebanner1.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "@mui/material/Button";
import { IoMailOutline } from "react-icons/io5";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Images
import product1 from "../../assets/images/product-image-1.jpg";
import product2 from "../../assets/images/product-image-2.jpg";
import product3 from "../../assets/images/product-image-3.jpg";
import product4 from "../../assets/images/product-image-4.jpg";
import product5 from "../../assets/images/product-image-5.jpg";
import product6 from "../../assets/images/product-image-6.jpg";
import banner1 from "../../assets/images/home-banner.jpg";
import banner2 from "../../assets/images/home-banner 1.jpg";
import newsLetterImg from "../../assets/images/coupon.png";

// Product Component
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";

const productData = [
  {
    image: product1,
    title: "Werther’s Original Caramel Hard Candies",
    oldPrice: 20,
    price: 14,
    inStock: true,
    discount: 28,
    rating: 5,
  },
  {
    image: product2,
    title: "Dark Chocolate Bar 80%",
    oldPrice: 25,
    price: 18,
    inStock: true,
    discount: 28,
    rating: 4.5,
  },
  {
    image: product3,
    title: "Minty Gum Chews",
    oldPrice: 10,
    price: 7,
    inStock: true,
    discount: 30,
    rating: 4,
  },
  {
    image: product4,
    title: "Fruit Gummies Mix",
    oldPrice: 15,
    price: 11,
    inStock: true,
    discount: 27,
    rating: 4,
  },
  {
    image: product5,
    title: "Lemon Hard Drops",
    oldPrice: 18,
    price: 13,
    inStock: true,
    discount: 28,
    rating: 5,
  },
  {
    image: product6,
    title: "Assorted Sweets Box",
    oldPrice: 30,
    price: 22,
    inStock: true,
    discount: 26,
    rating: 4.8,
  },
];

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCat/>

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
              <div className="banner">
                <img src={sideimg} className="cursor w-100" alt="Side Banner" />
              </div>
              <div className="banner mt-4">
                <img src={sideimg1} className="cursor w-100" alt="Side Banner" />
              </div>
              </div>
            </div>

            
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="info">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="subtext text-sm mb-0">
                    Do not miss the current offers until the end of August.
                  </p>
                </div>
                <Button className="viewAllBtn" endIcon={<IoIosArrowRoundForward />}>
                  View All
                </Button>
              </div>

              <div className="product_row">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={20}
                  navigation
                  modules={[Navigation]}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 4 },
                  }}
                  className="mySwiper"
                >
                  {productData.map((product, index) => (
                    <SwiperSlide key={index}>
                      <ProductItem product={product} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

               <div className="d-flex align-items-center justify-content-between mb-3 mt-5">
                <div className="info">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="subtext text-sm mb-0">
                    New Products with updated stocks.
                  </p>
                </div>
                <Button className="viewAllBtn" endIcon={<IoIosArrowRoundForward />}>
                  View All
                </Button>
              </div>

              <div className="product_row product_row2 w-100 mt-4 d-flex">
                {productData.map((product, index) => (
                <ProductItem key={index} product={product} />
                  ))}
              </div>

              <div className="d-flex mt-4 mb-5 bannerSec">
              <div className="banner">
                <img src={banner1} className="cursor w-100" alt="Side Banner" />
              </div>

              <div className="banner">
                <img src={banner2} className="cursor w-100" alt="Side Banner" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
             
              <p className="subtext text-sm mb-0 text-white">
                $20 discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">Join our email subscription now to get updates<br/> on promotions and coupons.</p>
              <div className="input-group">
                <form>
                <IoMailOutline />
                  <input type="text" className="form-control" placeholder="Enter your email" />
                  <Button className="btn btn-primary">Subscribe</Button>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <img src={newsLetterImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;