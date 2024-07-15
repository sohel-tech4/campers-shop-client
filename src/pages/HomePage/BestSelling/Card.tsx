function Card({ item }: any) {
  const { productName, image, price, ratings, stockQuantity, description } =
    item;

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt={productName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <p>Ratings: {ratings}</p>
        <p>Stock: {stockQuantity}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
