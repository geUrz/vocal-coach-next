import { Image } from "semantic-ui-react";
import { FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import styles from "./SlideImage.module.css";
import { Event } from "@/api";

const eventCtrl = new Event();

export function SlideImage(props) {
  const { onOpenCloseImg, event } = props;

  console.log(event);
  const gallery = event?.gallery;

  const galleryUrls = gallery.data?.map((imageData) => imageData?.attributes?.url) || [];
  const settings = {
    dots: true,
    dotsClass: styles.dots,
    infinite: true,
    slidersToShow: 1,
    slidersToScroll: 1,
    arrows: false,
    customPaging: function (index) {
      return <img style={{ width: "100px", height: "70px", objectFit: "contain", border: "1px solid white" }} src={galleryUrls[index]} />;
    },
  };

  return (
    <>
      <div className={styles.iconClose} onClick={onOpenCloseImg}>
        <FaTimes />
      </div>
      <div className={styles.containerMainPub}>
        <div className={styles.containerPub}>
          <Slider {...settings}>
            {galleryUrls.map((item, i) => {
              return <div key={i}>{<img style={{ objectFit: "contain", width: "200px", height: "200px", margin: "auto" }} src={item} />}</div>;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
