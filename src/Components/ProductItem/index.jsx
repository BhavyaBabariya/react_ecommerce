import React, { useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import ProductModel from "../ProductModel";

const ProductItem = ({ product }) => {
  const [isOpenProductModel, setIsOpenProductModel] = useState(false);

  const viewProduct = (id) => {
    setIsOpenProductModel(true);
    console.log(id);
  };

  return (
    <>
      <div className="item productItem">
        <div className="imgWrapper position-relative">
          <img src={product.image} className="w-100" alt={product.title} />

          <span className="badge badge-primary position-absolute top-0 start-0 m-2">
            {product.discount}% 
          </span>

          <div className="actions position-absolute top-0 end-0 m-1 d-flex flex-column gap-1">
            <Button
              onClick={() => viewProduct(product.id)}
              size="small"
              variant="text"
              title="Fullscreen"
              aria-label="Fullscreen"
            >
              <SlSizeFullscreen />
            </Button>
            <Button
              size="small"
              variant="text"
              title="Add to Wishlist"
              aria-label="Add to Wishlist"
            >
              <FaRegHeart />
            </Button>
          </div>
        </div>

        <div className="info mt-2">
          <h4 className="product-title">{product.title}</h4>
          <span className="text-success d-block">
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={product.rating}
            readOnly
            size="small"
          />
          <div className="d-flex gap-2">
            <span className="oldPrice text-muted text-decoration-line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
            <span className="netPrice text-danger">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {isOpenProductModel && (
        <ProductModel
          product={product}
          setisOpenProductModel={setIsOpenProductModel}
        />
      )}
    </>
  );
};

export default ProductItem;
