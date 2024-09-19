import Bannerr from "../../assets/images/banner.png";
import InfoProduct from "../InfoProductCard/InfoProduct";

const Banner = () => {
  return (
    <div className="image-banner">
      <img src={Bannerr} alt="banner" />
      <InfoProduct />
    </div>
  );
};

export default Banner;
