import "./App.css";
import { useState } from "react";
import { products } from "../src/common/consts/produkty.js";
import ProductsList from "./components/ProductsList/ProductsList";
import ShoppingList from "./components/ShoppingList/ShoppingList.jsx";
import ProductsFilters from "./components/ProductsFilters/ProductsFilters.jsx";

function App() {
  const [productList, setProductList] = useState(products);
  const [productListToDisplay, setProductListToDisplay] = useState(productList);
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

  const submitFilter = (e) => {
    const nameFilter = e.currentTarget.elements.filterName.value;
    const categoryFilter = e.currentTarget.elements.category.value;
    setProductListToDisplay(
      productList.filter((prod) =>
        categoryFilter
          ? prod.kategoria === categoryFilter && prod.nazwa.includes(nameFilter)
          : prod.nazwa.includes(nameFilter)
      )
    );
  };

  return (
    <>
      <div className="lists">
        <ProductsList
          productsList={productListToDisplay}
          addProd={addToShoppingCart}
        />
        <ShoppingList
          shoppingList={shoppingList}
          deleteProd={deleteFromShoppingCart}
        />
      </div>
      <ProductsFilters productsList={productList} filter={submitFilter} />
    </>
  );
}

export default App;
