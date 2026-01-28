import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import banner from "../../assets/images/sidebar-banner.gif";
import { Link } from "react-router-dom";


const Sidebar = () => {
  // Price range state
  const [priceRange, setPriceRange] = useState([100, 60000]);

  // Categories
  const categories = [
    "Men",
    "Women",
    "Beauty",
    "Watches",
    "Kids",
    "Gifts"
  ];

  // Product status state
  const [status, setStatus] = useState({
    inStock: false,
    outOfStock: false
  });

  // Brands state
  const [brands, setBrands] = useState({
    brand1: false,
    brand2: false,
    brand3: false,
    brand4: false,
    brand5: false,
  });

  const handleStatusChange = (event) => {
    setStatus({
      ...status,
      [event.target.name]: event.target.checked
    });
  };

  const handleBrandChange = (event) => {
    setBrands({
      ...brands,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <div className="sidebar">
      <div className="sticky">
      {/* Product Categories */}
      <div className="filterBox">
        <h5>Product Categories</h5>
        <div className="scroll">
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label={category}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Filter by Price */}
      <div className="filterBox mt-4">
        <h5>Filter by price</h5>
        <RangeSlider
          value={priceRange}
          onInput={setPriceRange}
          min={100}
          max={60000}
          step={5}
        />
        <div className="priceValues mt-2">
          <span>Min: ${priceRange[0]}</span> &nbsp; | &nbsp;
          <span>Max: ${priceRange[1]}</span>
        </div>
      </div>

      {/* Product Status */}
      <div className="filterBox mt-4">
        <h5>Product Status</h5>
        <div className="productStatus">
          <FormControlLabel
            control={
              <Checkbox
                checked={status.inStock}
                onChange={handleStatusChange}
                name="inStock"
              />
            }
            label="In Stock"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={status.outOfStock}
                onChange={handleStatusChange}
                name="outOfStock"
              />
            }
            label="Out of Stock"
          />
        </div>
      </div>

      {/* Brands */}
      <div className="filterBox mt-4">
        <h5>Brands</h5>
        <div className="brands">
          <FormControlLabel
            control={
              <Checkbox
                checked={brands.brand1}
                onChange={handleBrandChange}
                name="brand1"
              />
            }
            label="Brand 1"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={brands.brand2}
                onChange={handleBrandChange}
                name="brand2"
              />
            }
            label="Brand 2"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={brands.brand3}
                onChange={handleBrandChange}
                name="brand3"
              />
            }
            label="Brand 3"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={brands.brand4}
                onChange={handleBrandChange}
                name="brand4"
              />
            }
            label="Brand 4"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={brands.brand5}
                onChange={handleBrandChange}
                name="brand5"
              />
            }
            label="Brand 5"
          />
        </div>
      </div>

      {/* Sidebar Banner */}
      <Link to="#">
        <img src={banner} alt="Sidebar Banner" className="w-100" />
      </Link>
    </div>
    </div>
  );
};

export default Sidebar;