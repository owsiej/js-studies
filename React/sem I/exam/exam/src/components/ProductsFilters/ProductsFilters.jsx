/* eslint-disable react/prop-types */

import "./ProductsFilters.css";

const ProductsFilters = (props) => {
  const { productsList, foodFilter } = props;

  const categories = Array.from(
    new Set(productsList.map((el) => el.kategoria))
  );

  return (
    <>
      <form className="filterForm" onChange={foodFilter}>
        <label htmlFor="name">Wyszukaj po nazwie produktu:</label>
        <input type="text" id="name" name="filterName" />
        Kategorie:
        <select name="category">
          <option></option>
          {categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
        <label>
          Tylko produkty spożywcze
          <input type="checkbox" name="isFoodProduct" />
        </label>
      </form>
    </>
  );
};

export default ProductsFilters;
