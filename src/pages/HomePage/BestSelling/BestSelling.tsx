import products from "../../../../public/product.json";
import Card from "./Card";
import { TProduct } from "./card.type";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BestSelling() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <div className="text-center">
        <h1>Best Selling</h1>
        <p>Choose the best</p>
      </div>
      <Slider {...settings}>
        {products.map((item: TProduct) => (
          <Card key={item.productName} item={item} />
        ))}
      </Slider>
    </div>
  );
}

export default BestSelling;
