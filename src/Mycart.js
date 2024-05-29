import { useDispatch, useSelector } from "react-redux";
import { dNumber, quantityDec, quantityInc } from "./Action";
import Update from "./reducer/Update";
import "./Mycart.css";
function Mycart() {
  let dispatch = useDispatch();
  const x = useSelector((state) => state.Update);
  return (
    <>
      <div className="myCart">
        <h5>Your Selected Items:</h5>
        {x.pro.map((item) => {
          return (
            <div className="mainDiv">
              <div className="image-cont">
                <img src={item.prod} className="image-cont-img"></img>
              </div>
              <button onClick={() => dispatch(quantityDec())}>-</button>
              <div> {item.price}</div>
              <button>+</button>
              <span>1</span>
              <button className="cross" onClick={() => dispatch(dNumber(item))}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Mycart;
