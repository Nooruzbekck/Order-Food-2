import Bannerr from "../../assets/images/banner.png";
import InfoProduct from "../InfoProductCard/InfoProduct";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="image-banner">
      <img src={Bannerr} alt="banner" className="banner" />
      <div className="wrapper-info-product">
        <InfoProduct />
      </div>
    </div>
  );
};

export default Banner;
