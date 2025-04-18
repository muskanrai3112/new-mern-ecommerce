import React from "react";
import "./productItems..scss";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const ProductItems = () => {
  return (
    <>
      <div className="productItem">
        <div className="productItem__img">
          <img
            src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg"
            alt="productImg"
          />
        </div>
        <div className="productItem__info">
          <p className="productItem__info-title">WROGN</p>
          <a className="productItem__info-detailLink" href="#">Men Black Solid Slim Fit ...</a>
          <Stack spacing={1}>
            <Rating name="size-small" defaultValue={2} size="small" />
          </Stack>
          <div className="productItem__info-price">
            <span>₹1,149.00</span>
            <span>₹999.00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItems;
