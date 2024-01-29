/* eslint-disable react/prop-types */

import "./ProductsFilters.css";

const ProductsFilters = (props) => {
  const { productsList, filter } = props;

  const categories = Array.from(
    new Set(productsList.map((el) => el.kategoria))
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    filter(e);
  };

  return (
    <>
      <form className="filterForm" onSubmit={handleSubmit}>
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
        <input type="submit" value="Wyszukaj" />
      </form>
    </>
  );
};

export default ProductsFilters;
