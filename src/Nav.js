import "./Nav.css";

function Nav(prop) {
  return (
    <div>
      <nav>
        <div className="navigation">
          <div>Logo</div>
          <div>Home</div>
          <div>About</div>
        </div>
        <div className="checkout">
          <div>
            <i class="fa-solid fa-cart-shopping"></i> &nbsp; {prop.item}
          </div>
          <div>Price &nbsp; {prop.price}</div>
          <button>Checkout</button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
