/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ShoppingList.css";

const ShoppingList = (props) => {
  const { shoppingList, deleteProd } = props;
  const [prodStyle, setProdStyle] = useState([]);

  const handleRightMouseButtonClick = (event, idx) => {
    event.preventDefault();
    prodStyle[idx] =
      prodStyle[idx] !== "line-through" ? "line-through" : "none";
    setProdStyle([...prodStyle]);
  };

  const handleDeleteProd = (idx) => {
    prodStyle.splice(idx, 1);
    setProdStyle([...prodStyle]);
    deleteProd(idx);
  };
  return (
    <>
      <ul>
        <h2>Lista produktów w koszyku:</h2>
        {shoppingList.map((prod, index) => (
          <li
            style={{
              textDecoration: `${prodStyle[index] ?? "none"}`,
            }}
            key={index}
            onContextMenu={(e) => handleRightMouseButtonClick(e, index)}
            onClick={() => handleDeleteProd(index)}
          >
            {prod.nazwa}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShoppingList;
