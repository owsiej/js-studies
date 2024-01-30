/* eslint-disable react/prop-types */
import "./ProductsList.css";

const ProductsList = (props) => {
  const { productsList, addProdToCart } = props;

  return (
    <>
      <ul>
        <h2>Lista dostępnych produktów:</h2>
        {productsList.map((prod) => (
          <li key={prod.id} onClick={() => addProdToCart(prod)}>
            {prod.nazwa}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsList;
