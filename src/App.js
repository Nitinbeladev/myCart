import "./App.css";
import bat from "./images/bat.png";
import pad from "./images/pad.png";
import ball from "./images/crickball.jpg";
import basketball from "./images/basketball.png";
import gloves from "./images/gloves.jpeg";
import "./product_style.css";
import Action, { iNumber } from "./Action";
import Update from "./reducer/Update";
import "./Mycart.css";

// import Header from "./Header";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Mycart from "./Mycart";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  let ob = [
    { name: "Bat", prod: bat, price: 14000 },
    { name: "Pad", prod: pad, price: 12000 },
    { name: "Ball", prod: ball, price: 2500 },
    { name: "Basketball", prod: basketball, price: 1040 },
    { name: "Gloves", prod: gloves, price: 1140 },
  ];
  const myState = useSelector((state) => state.Update);
  const [canva, Mycanva] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Link to={"/myCart"}>
          <nav>
            <div>
              <span>Products {myState.first} &nbsp; &nbsp;</span>
              <span>Price {myState.second} &nbsp; &nbsp;</span>
              <button
                onClick={() => {
                  document
                    .querySelector(".myCart")
                    .classList.toggle("myCart_show");
                }}
              >
                Show cart
              </button>
            </div>
          </nav>
        </Link>
        <Routes>
          <Route path="/myCart" element={<Mycart />}></Route>
        </Routes>
      </BrowserRouter>

      <div className="product_section">
        {ob.map((elem) => {
          return (
            <div className="cart_item">
              <div className="pro_img">
                <img src={elem.prod}></img>
              </div>
              <p>
                <h4>{elem.name}</h4>
                <div className="buttonss">
                  <button>{elem.price}</button>
                  <button onClick={() => dispatch(iNumber(elem))}>
                    Add to cart
                  </button>
                </div>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
