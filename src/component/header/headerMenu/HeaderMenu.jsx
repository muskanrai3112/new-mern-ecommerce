import React, { useState } from "react";
import "./headerMenu.scss";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { LuRocket } from "react-icons/lu";
import CategoryPannel from "./CategoryPannel";

const HeaderMenu = () => {
  const [isBarOpen, setIsBarOpen] = useState(false);
  const handelbarClick = () => {
    setIsBarOpen(true);
  };

  return (
    <>
      <div className="headerMenu">
        <div className="container">
          <div className="headerMenu__box">
            <div className="headerMenu__categories">
              <button
                className="headerMenu__categories-inner"
                onClick={handelbarClick}
              >
                <RxHamburgerMenu />
                <h2>SHOP BY CATEGORIES</h2>
              </button>
              <IoIosArrowDown />
            </div>
            <div className="headerMenu__section">
              <div className="headerMenu__select">
                <button className="btn section">Home</button>
                <ul className="headerMenu__select-inner">
                  <li className="headerMenu__subMenuMain">
                    Men's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    WoMen's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    girl's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    Kid's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    Boy's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="headerMenu__select">
                <button className="btn section">Fashion</button>
                <ul className="headerMenu__select-inner">
                  <li className="headerMenu__subMenuMain">
                    Men's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    WoMen's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    girl's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    Kid's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    Boy's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="headerMenu__select">
                <button className="btn section">Electronics</button>
                <ul className="headerMenu__select-inner">
                  <li className="headerMenu__subMenuMain">
                    Men's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    WoMen's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    girl's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    Kid's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    Boy's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="headerMenu__select">
                <button className="btn section">Bags</button>
                <ul className="headerMenu__select-inner">
                  <li className="headerMenu__subMenuMain">
                    Men's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    WoMen's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    girl's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    Kid's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    Boy's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="headerMenu__select">
                <button className="btn section">Footware</button>
                <ul className="headerMenu__select-inner">
                  <li className="headerMenu__subMenuMain">
                    Men's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    WoMen's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    girl's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    Kid's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    Boy's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="headerMenu__select">
                <button className="btn section">Groceries</button>
                <ul className="headerMenu__select-inner">
                  <li className="headerMenu__subMenuMain">
                    Men's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    WoMen's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    girl's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    Kid's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    Boy's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="headerMenu__select">
                <button className="btn section">Wellness</button>
                <ul className="headerMenu__select-inner">
                  <li className="headerMenu__subMenuMain">
                    Men's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    WoMen's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    girl's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    Kid's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    Boy's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="headerMenu__select">
                <button className="btn section">Jwellery</button>
                <ul className="headerMenu__select-inner">
                  <li className="headerMenu__subMenuMain">
                    Men's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    WoMen's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    girl's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    Kid's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                  <li className="headerMenu__subMenuMain">
                    Boy's
                    <ul className="headerMenu__subMenu">
                      <li>Shirts</li>
                      <li>T-Shirts</li>
                      <li>Jeans</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="headerMenu__delivery">
              <LuRocket />
              <p className="">Free international Delivery</p>
            </div>
          </div>
        </div>
      </div>
      <CategoryPannel
        handelbarClick={handelbarClick}
        isBarOpen={isBarOpen}
        setIsBarOpen={setIsBarOpen}
      />
    </>
  );
};

export default HeaderMenu;
