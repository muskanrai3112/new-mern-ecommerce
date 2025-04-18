import React from "react";
import "./header.scss";
import Logo from "../../assets/images/ecommerce_logo.jpg";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IoIosGitCompare } from "react-icons/io";
import HeaderMenu from "./headerMenu/HeaderMenu";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="topHeader">
            <p className="topHeader__leftTitle">
              get upto 50% off new season style, limited time only
            </p>
            <div className="topHeader__rightMenu">
              <a href="#">Help Center</a>
              <a href="#">Order Tracking</a>
              <a href="#">Help Center</a>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="container">
          <div className="navbar__content">
            <div>
              <img src={Logo} alt="Logo" />
            </div>
            <div className="navbar__searchBox">
              <div className="navbar__searchInput">
              <input className="navbar__inputBox" type="text" placeholder="search product here...."/>
              <div className="navbar__searchIcon"><IoIosSearch /></div>
              </div>
              <button className="btn">Search</button>
            </div>
            <div className="navbar__content-col3">
              <div>
                <button className="btn navBtn">Login</button>
                <span>/</span>
                <button className="btn navBtn">Register</button>
              </div>
              <div className="navbar__content-col3-imgs">
              <Tooltip title="compare">
              <Badge badgeContent={2} color="primary">
             <IoIosGitCompare color="action" />
             </Badge>
              </Tooltip>

              <Tooltip title="wishlist">
              <Badge badgeContent={4} color="primary">
             <FavoriteBorderIcon color="action" />
             </Badge>
              </Tooltip>
              <Tooltip title="cart">
              <Badge badgeContent={3} color="primary">
             <ShoppingCartIcon color="action" />
             </Badge>
              </Tooltip> 
            </div>
            </div>
          </div>
         
        </div>
      </div>

      <HeaderMenu/>
    </>
  );
};

export default Header;
