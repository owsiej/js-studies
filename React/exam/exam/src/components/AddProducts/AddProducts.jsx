/* eslint-disable react/prop-types */
import { useState } from "react";

import "./AddProducts.css";

const AddProducts = (props) => {
  const [formData, setFormData] = useState({
    prodName: "",
    prodCat: "",
    isProdFood: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewProd(e);
    setFormData({
      prodName: "",
      prodCat: "",
      isProdFood: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  return (
    <>
      <form className="addProdForm" onSubmit={handleSubmit}>
        <h3>Dodaj produkt:</h3>
        <label htmlFor="prodName">Nazwa produktu: </label>
        <input
          type="text"
          name="prodName"
          id="prodName"
          value={formData.prodName}
          onChange={handleChange}
          required
        />
        <label htmlFor="prodCat">Kategoria produktu: </label>
        <input
          type="text"
          name="prodCat"
          id="prodCat"
          value={formData.prodCat}
          onChange={handleChange}
          required
        />
        <label htmlFor="isProdFood">Produkt spożywczy</label>
        <input
          type="checkbox"
          name="isProdFood"
          id="isProdFood"
          checked={formData.isProdFood}
          onChange={handleChange}
        />
        <button type="submit">Dodaj produkt</button>
      </form>
    </>
  );
};

export default AddProducts;
