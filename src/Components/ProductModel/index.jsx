import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Rating from '@mui/material/Rating';
import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const ProductModel = ({ product, setisOpenProductModel }) => {
  const handleClose = () => {
    setisOpenProductModel(false);
  };

  return (
    <Dialog open={true} className="productModel" onClose={handleClose}>
      {/* Close Button */}
      <Button className="close" onClick={handleClose}>
        <IoMdCloseCircleOutline size={24} />
      </Button>

      {/* Product Title */}
      <h4 className="mb-2 popup-title">{product?.title || "Product Title"}</h4>
      <div className="d-flex align-items-center">
            <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">Welch's</span>
            </div>
            <Rating name="read-only" value={5} readOnly />
      </div>
    </Dialog>
  );
};

export default ProductModel;
