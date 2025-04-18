import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import "./categoryPanner.scss";
import { IoMdClose } from "react-icons/io";
import { Link } from "@mui/material";
import { MdOutlineAddBox } from "react-icons/md";
import { CiSquareMinus } from "react-icons/ci";

const CategoryPannel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setIsBarOpen(newOpen);
  };
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [subMenuIndexUpper, setSubMenuIndexUpper] = useState(null);

  const handleOnPluseClick = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };

  const handleOnPluseClickUpper = (index) => {
    if (subMenuIndexUpper === index) {
      setSubMenuIndexUpper(null);
    } else {
      setSubMenuIndexUpper(index);
    }
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <div className="drawer">
        <h3 className="drawer__title">shop by categories</h3>
        <IoMdClose className="drawer__close" onClick={toggleDrawer(false)} />
      </div>
      <div>
        <ul>
          <li className="drawer__listMainTitle">
            <Link to="/" className="drawer__listMainTitle-box">
              Fashion
              {subMenuIndexUpper === 0 ? (
                <CiSquareMinus
                  className="drawer__pluseIcon"
                  onClick={() => handleOnPluseClickUpper(0)}
                />
              ) : (
                <MdOutlineAddBox
                  className="drawer__pluseIcon"
                  onClick={() => handleOnPluseClickUpper(0)}
                />
              )}
            </Link>
            {subMenuIndexUpper === 0 && (
              <ul>
                <li className="drawer__listMainTitle inner">
                  <li>
                    <Link to="/" className="drawer__listMainTitle-box">
                      Appreal
                      {subMenuIndex === 0 ? (
                        <CiSquareMinus
                          className="drawer__pluseIcon"
                          onClick={() => handleOnPluseClick(0)}
                        />
                      ) : (
                        <MdOutlineAddBox
                          className="drawer__pluseIcon"
                          onClick={() => handleOnPluseClick(0)}
                        />
                      )}
                    </Link>
                  </li>
                  {subMenuIndex === 0 && (
                    <ul className="drawer__listMainBox">
                      <li className="drawer__listMainTitle inner">
                        <Link to="/" className="drawer__subMenu">
                          smart Tablet
                        </Link>
                      </li>
                      <li className="drawer__listMainTitle inner">
                        <Link to="/" className="drawer__subMenu">
                          crepe T-shirt
                        </Link>
                      </li>
                      <li className="drawer__listMainTitle inner">
                        <Link to="/" className="drawer__subMenu">
                          leather watch
                        </Link>
                      </li>
                      <li className="drawer__listMainTitle inner">
                        <Link to="/" className="drawer__subMenu">
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>  
      </div>
    </Box>
  );
  return (
    <div>
      <Drawer open={props.isBarOpen}>{DrawerList}</Drawer>
    </div>
  );
};

export default CategoryPannel;
