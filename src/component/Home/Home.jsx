import React from "react";
import "./home.scss";
import HomeSlider from "../HomeSlider/HomeSlider";
import HomeCatSlider from "../homeCatSlider/HomeCatSlider";
import { TbTruckDelivery } from "react-icons/tb";
import AdBanner from "../AdBanner/AdBanner";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductSlider from "../productSlider/ProductSlider";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="home">
        <HomeSlider />
        <HomeCatSlider />

        {/* Product sliders.... */}
        <section className="productSLider">
          <div className="container">
            <div className="productSLider__content">
              <div className="productSLider__left">
                <h3>Popular Products</h3>
                <p>Do not miss the current offers until the end of March.</p>
              </div>
              <div className="productSLider__right">
                <Box sx={{ width: "60%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="scrollable tabs example"
                      variant="scrollable"
                    >
                      <Tab label="Clothes" {...a11yProps(0)} />
                      <Tab label="Electronics" {...a11yProps(1)} />
                      <Tab label="Bags" {...a11yProps(2)} />
                      <Tab label="Footwear" {...a11yProps(3)} />
                      <Tab label="Groceries" {...a11yProps(4)} />
                      <Tab label="Beauty" {...a11yProps(5)} />
                      <Tab label="Wellness" {...a11yProps(6)} />
                      <Tab label="Jewellery" {...a11yProps(6)} />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                    Item One
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    Item Two
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    Item Three
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={3}>
                    Item four
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={4}>
                    Item five
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={5}>
                    Item six
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={6}>
                    Item seven
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={7}>
                    Item eight
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={8}>
                    Item nine
                  </CustomTabPanel>
                </Box>
              </div>
             

            </div>
          </div>
          <ProductSlider/>
        </section>

        {/* delivery info... */}
        <section className="deliveryInfo">
          <div className="container">
            <div className="deliveryInfo__content">
              <div className="deliveryInfo__leftInfo">
                <TbTruckDelivery className="deliveryInfo__leftInfo-img" />
                <h2 className="deliveryInfo__leftInfo-title">Free Shipping</h2>
              </div>
              <p className="deliveryInfo__middleInfo">
                Free Delivery Now On Your First Order and Over $200
              </p>
              <h2 className="deliveryInfo__lastInfo">-only $200*</h2>
            </div>
            <AdBanner />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
