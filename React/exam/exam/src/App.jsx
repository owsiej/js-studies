import "./App.css";
import { useState } from "react";
import { products } from "../src/common/consts/produkty.js";
import ProductsList from "./components/ProductsList/ProductsList";
import ShoppingList from "./components/ShoppingList/ShoppingList.jsx";

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  const addToShoppingCart = (itemToAdd) => {
    shoppingList.push(itemToAdd);
    setShoppingList([...shoppingList]);
  };

  const deleteFromShoppingCart = (itemToDelete) => {
    const indexProductToRemove = shoppingList.findIndex(
      (prod) => prod.nazwa === itemToDelete.nazwa
    );
    shoppingList.splice(indexProductToRemove, 1);
    setShoppingList([...shoppingList]);
  };

  return (
    <>
      <div className="lists">
        <ProductsList productsList={products} addProd={addToShoppingCart} />
        <ShoppingList
          shoppingList={shoppingList}
          deleteProd={deleteFromShoppingCart}
        />
      </div>
    </>
  );
}

export default App;
