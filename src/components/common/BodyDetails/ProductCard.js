import { Button } from "antd";

const ProductCard = (props) => {
  return (
    <div className="productCard">
      <h3>{props.status}</h3>
      <img src={props.src} alt={props.alt} />
      <h2>{props.title}</h2>
      <p>{props.content}...</p>
      <h2>${props.price}.00</h2>
      <div>
        <Button type='primary'>Buy</Button>
        <Button type='primary' danger>Add To Cart</Button>
      </div>
    </div>
  );
};
export default ProductCard;
