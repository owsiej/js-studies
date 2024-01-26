import { useState } from "react";
import { products } from "../../common/consts/produkty.js";
import "./ProductsList.css";
import ShopingList from "../ShopingList/ShopingList.jsx";

const ProductsList = () => {
  const [shoppingList, setShoppingList] = useState([]);

  const handleLeftClickOnProduct = (item) => {
    shoppingList.push(item);
    setShoppingList([...shoppingList]);
  };

  const deleteFromShoppingCart = (item) => {
    const indexProductToRemove = shoppingList.findIndex(
      (prod) => prod.name === item.name
    );
    shoppingList.splice(indexProductToRemove, 1);
    setShoppingList([...shoppingList]);
  };

  return (
    <>
      <div className="productslist">
        <ul>
          <h2>Lista dostępnych produktów:</h2>
          {products.map((prod) => (
            <li key={prod.nazwa} onClick={() => handleLeftClickOnProduct(prod)}>
              {prod.nazwa}
            </li>
          ))}
        </ul>
        <ShopingList
          shoppingList={shoppingList}
          deleteProd={deleteFromShoppingCart}
        />
      </div>
    </>
  );
};

export default ProductsList;
