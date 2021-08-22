const ProductCard = (props) => {
  return (
    <div>
      <h3>{props.status}</h3>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};
export default ProductCard;
