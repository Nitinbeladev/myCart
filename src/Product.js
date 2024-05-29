// import { useReducer } from "react";
// import "./product_style.css";
// import bat from "./bat.png";
// import ball from "./crickball.jpg";
// import stump from "./stumps.png";

// const initialstate = {
//   firststate: 0,
// };

// const reducer = (currentstate, action) => {
//   console.log(currentstate, action);
//   switch (action.type) {
//     case "increment":
//       return {
//         ...currentstate,
//         firststate: currentstate.firststate + action.value,
//       };
//   }
// };

// export default function Product() {
//   const [value, dispatch] = useReducer(reducer, initialstate);
//   let image = [
//     { proimage: bat, price: 2100 },
//     { proimage: ball, price: 1200 },
//     { proimage: stump, price: 800 },
//   ];

//   console.log(initialstate);

//   return (
//     <>
//       <div className="product_section">
//         {image.map((elem) => {
//           return (
//             <div className="cart_item">
//               <div className="pro_img">
//                 <img src={elem.proimage}></img>
//               </div>
//               <p>
//                 <h4>Cricket Bat</h4>
//                 <div className="buttonss">
//                   <button>{elem.price}</button>
//                   <button
//                     onClick={() =>
//                       dispatch({ type: "increment", value: elem.price })
//                     }
//                   >
//                     Add to cart
//                   </button>
//                 </div>
//               </p>
//             </div>
//           );
//         })}
//       </div>
//       <h1>{value.firststate}</h1>
//     </>
//   );
// }
