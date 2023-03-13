import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/6311251/pexels-photo-6311251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/6311250/pexels-photo-6311250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "white oversize T-shirt",
      desc: "white oversize T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1643025/pexels-photo-1643025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      desc: "white oversize T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    // {
    //     id:3,
    //     img:"https://images.pexels.com/photos/12454043/pexels-photo-12454043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     img2:"https://images.pexels.com/photos/12454040/pexels-photo-12454040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     title:"Skirt",
    //     isNew:true,
    //     oldPrice:19,
    //     price: 12
    // },
    // {
    //     id:4,
    //     img:"https://images.pexels.com/photos/15759373/pexels-photo-15759373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     img2:"https://images.pexels.com/photos/15759264/pexels-photo-15759264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     title:"Hat",
    //     isNew:true,
    //     oldPrice:19,
    //     price: 12
    // },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="product img" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete"/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
