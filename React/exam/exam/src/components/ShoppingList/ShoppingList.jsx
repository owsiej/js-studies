/* eslint-disable react/prop-types */
import "./ShoppingList.css";
import { v1 as uuidv1 } from "uuid";

const ShoppingList = (props) => {
  const handleRightMouseButtonClick = (event, item) => {
    event.preventDefault();
    props.deleteProd(item);
  };
  return (
    <>
      <ul>
        <h2>Lista produktów w koszyku:</h2>
        {props.shoppingList.map((prod) => (
          <li
            key={uuidv1()}
            onContextMenu={(e) => handleRightMouseButtonClick(e, prod)}
          >
            {prod.nazwa}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShoppingList;
