import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import Menu from "@components/Menu";
import MyOrder from "../containers/MyOrder";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingcart from "@icons/icon_shopping_cart.svg";
import AppContext from "../context/AppContext";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />

      <div className="navbar-left">
      {/*   <img src={logo} alt="logo" className="nav-logo" /> */}
      <h1>$$</h1>

        <ul>
          <li>
            <a href="/">General</a>
          </li>
          <li>
            <a href="/">Moda</a>
          </li>
          <li>
            <a href="/">Electronica</a>
          </li>
          <li>
            <a href="/">Muebles</a>
          </li>
          <li>
            <a href="/">Juegos</a>
          </li>
          <li>
            <a href="/">Otros</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            userName
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={()=> setToggleOrders(!toggleOrders)}
          >
            <img src={shoppingcart} alt="shopping cart" />
            {/* {state.cart.length > 0 ? <div>{state.cart.length}</div> : null} */}
            {/* muestra cero si no hay nada en el carrito */}
            <div>{state.cart.length || 0}</div>{" "}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};
