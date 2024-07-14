import products from "../../../../public/product.json";
import Card from "./Card";
import { TProduct } from "./card.type";

function BestSelling() {

  return (
    <div>
      <div>
        <h1>Best Selling</h1>
        <p>Chose the best</p>
      </div>
      {products.map((item): TProduct[] => {
        <Card key={item?.productName} item={item}></Card>;
      })}
    </div>
  );
}

export default BestSelling;
