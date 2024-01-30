import "./App.css";
import { useState } from "react";
import { products } from "../src/common/consts/produkty.js";
import ProductsList from "./components/ProductsList/ProductsList";
import ShoppingList from "./components/ShoppingList/ShoppingList.jsx";
import ProductsFilters from "./components/ProductsFilters/ProductsFilters.jsx";
import AddProducts from "./components/AddProducts/AddProducts.jsx";

function App() {
  const [productList, setProductList] = useState(products);
  const [productListToDisplay, setProductListToDisplay] = useState(productList);
  const [shoppingList, setShoppingList] = useState([]);
  const [maxCurrentId, setMaxCurrentId] = useState(
    productList[productList.length - 1].id + 1
  );

  const handleAddToShoppingCart = (itemToAdd) => {
    shoppingList.push(itemToAdd);
    setShoppingList([...shoppingList]);
  };

  const handleDeleteFromShoppingCart = (itemIndexToDelete) => {
    shoppingList.splice(itemIndexToDelete, 1);
    setShoppingList([...shoppingList]);
  };

  const handleFoodFilter = (e) => {
    const nameFilter = e.currentTarget.elements.filterName.value.toLowerCase();
    const categoryFilter = e.currentTarget.elements.category.value;
    const isFoodProduct = e.currentTarget.elements.isFoodProduct.checked;

    setProductListToDisplay(
      productList.filter((prod) => {
        const filterData = categoryFilter
          ? prod.kategoria === categoryFilter && prod.nazwa.includes(nameFilter)
          : prod.nazwa.includes(nameFilter);
        if (isFoodProduct) {
          return filterData && prod.produktSpozywczy;
        }
        return filterData;
      })
    );
  };

  const handleAddNewProd = (e) => {
    const productName = e.target.prodName.value;
    const categoryName = e.target.prodCat.value;
    const isFoodProduct = e.currentTarget.elements.isProdFood.checked;
    const prodId = maxCurrentId;
    setMaxCurrentId(prodId + 1);
    const newProduct = {
      id: prodId,
      nazwa: productName,
      kategoria: categoryName,
      produktSpozywczy: isFoodProduct,
    };

    productList.push(newProduct);
    setProductList([...productList]);
    setProductListToDisplay([...productList]);
  };
  return (
    <>
      <div className="lists">
        <ProductsList
          productsList={productListToDisplay}
          addProdToCart={handleAddToShoppingCart}
        />
        <ShoppingList
          shoppingList={shoppingList}
          deleteProd={handleDeleteFromShoppingCart}
        />
      </div>
      <div className="lists">
        <ProductsFilters
          productsList={productList}
          foodFilter={handleFoodFilter}
        />
        <AddProducts addNewProd={handleAddNewProd} />
      </div>
    </>
  );
}

export default App;
