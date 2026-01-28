import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import banner from "../../assets/images/banner-img.jpg";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { HiViewGrid } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItem from "../../Components/ProductItem";

import product1 from "../../assets/images/product-image-1.jpg";
import product2 from "../../assets/images/product-image-2.jpg";
import product3 from "../../assets/images/product-image-3.jpg";
import product4 from "../../assets/images/product-image-4.jpg";
import product5 from "../../assets/images/product-image-5.jpg";
import product6 from "../../assets/images/product-image-6.jpg";
import product7 from "../../assets/images/product-image-7.jpg";
import product8 from "../../assets/images/product-image-8.jpg";
import product9 from "../../assets/images/product-image-9.jpg";
import product10 from "../../assets/images/product-image-10.jpg";
import product11 from "../../assets/images/product-image-11.jpg";
import product12 from "../../assets/images/product-image-12.jpg";
import product13 from "../../assets/images/product-image-13.jpg";
import product14 from "../../assets/images/product-image-14.jpg";

const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState("four");
  const [itemsToShow, setItemsToShow] = useState(9);

  const openDropdown = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (number) => {
    if (number) {
      setItemsToShow(number);
    }
    setAnchorEl(null);
  };

  const products = [
    { id: 1, image: product1, title: "Product 1", discount: 10, inStock: true, rating: 4, oldPrice: 29.99, price: 19.99 },
    { id: 2, image: product2, title: "Product 2", discount: 20, inStock: false, rating: 3.5, oldPrice: 49.99, price: 39.99 },
    { id: 3, image: product3, title: "Product 3", discount: 5, inStock: true, rating: 5, oldPrice: 59.99, price: 56.99 },
    { id: 4, image: product4, title: "Product 4", discount: 5, inStock: true, rating: 5, oldPrice: 59.99, price: 56.99 },
    { id: 5, image: product5, title: "Product 5", discount: 5, inStock: true, rating: 5, oldPrice: 59.99, price: 56.99 },
    { id: 6, image: product6, title: "Product 6", discount: 5, inStock: true, rating: 5, oldPrice: 59.99, price: 56.99 },
    { id: 7, image: product7, title: "Product 7", discount: 5, inStock: true, rating: 5, oldPrice: 59.99, price: 56.99 },
    { id: 8, image: product8, title: "Product 8", discount: 5, inStock: true, rating: 5, oldPrice: 59.99, price: 56.99 },
    { id: 9, image: product9, title: "Product 9", discount: 5, inStock: true, rating: 5, oldPrice: 59.99, price: 56.99 },
    { id: 10, image: product10, title: "Product 10", discount: 5, inStock: true, rating: 5, oldPrice: 59.99, price: 56.99 },
    { id: 11, image: product11, title: "Product 11", discount: 5, inStock: true, rating: 5, oldPrice: 59.99, price: 56.99 },
    { id: 12, image: product12, title: "Product 12", discount: 5, inStock: true, rating: 5, oldPrice: 59.99, price: 56.99 },
    { id: 13, image: product13, title: "Product 13", discount: 5, inStock: true, rating: 5, oldPrice: 59.99, price: 56.99 },
    { id: 14, image: product14, title: "Product 14", discount: 5, inStock: true, rating: 5, oldPrice: 59.99, price: 56.99 },
  ];

  return (
    <section className="product_listing_page">
      <div className="container">
        <div className="product_listing d-flex">
          <Sidebar />
          <div className="content_right">
            <img
              src={banner}
              alt="Banner"
              className="w-100"
              style={{ borderRadius: "8px" }}
            />

            {/* Top Controls */}
            <div className="showBy mt-3 mb-3 d-flex align-items-center justify-content-between">
              {/* View Buttons */}
              <div className="d-flex align-items-center btnWrapper">
                <Button onClick={() => setProductView("one")}><IoMdMenu /></Button>
                <Button onClick={() => setProductView("two")}><HiViewGrid /></Button>
                <Button onClick={() => setProductView("three")}><CgMenuGridR /></Button>
                <Button onClick={() => setProductView("four")}><TfiLayoutGrid4Alt /></Button>
              </div>

              {/* Show By Dropdown */}
              <div className="product-counter showByFilter">
                <Button onClick={handleClick}>
                  Show: {itemsToShow} <IoIosArrowDown />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openDropdown}
                  onClose={() => handleClose()}
                  MenuListProps={{ "aria-labelledby": "basic-button" }}
                >
                  {[9, 18, 27].map((num) => (
                    <MenuItem key={num} onClick={() => handleClose(num)}>{num}</MenuItem>
                  ))}
                </Menu>
              </div>
            </div>

            {/* Product Grid */}
            <div className={`product_item ${productView}`}>
              {products.slice(0, itemsToShow).map((product) => (
                <ProductItem key={product.id} product={product} itemView={productView} />
              ))}
            </div>

            {/* Pagination */}
            <div className="d-flex align-items-center justify-content-center mt-3">
              <Pagination count={10} color="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
