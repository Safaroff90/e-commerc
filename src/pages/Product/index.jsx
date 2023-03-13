import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/11556943/pexels-photo-11556943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11556938/pexels-photo-11556938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={images[0]}
            alt="product img"
            onClick={(e) => setSelectedImage(0)}
          />
          <img
            src={images[1]}
            alt="product img"
            onClick={(e) => setSelectedImage(1)}
          />
        </div>
        <div className="mainImg">
          <img src={images[selectedImage]} alt="product img" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
          praesentium dolores quam neque reprehenderit placeat sit illum nisi
          vitae necessitatibus.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />
            ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon />
            ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor:Polo</span>
          <span>Product Type:T-Shirt</span>
          <span>Tag:T-Shirt,Woman,Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <span>ADDITIONAL INFORMATION</span>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
