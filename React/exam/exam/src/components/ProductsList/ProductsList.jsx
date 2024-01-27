/* eslint-disable react/prop-types */
import "./ProductsList.css";

const ProductsList = (props) => {
  const handleLeftClickOnProduct = (item) => {
    props.addProd(item);
  };

  return (
    <>
      <ul>
        <h2>Lista dostępnych produktów:</h2>
        {props.productsList.map((prod) => (
          <li key={prod.id} onClick={() => handleLeftClickOnProduct(prod)}>
            {prod.nazwa}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsList;
