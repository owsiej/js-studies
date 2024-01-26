import "./ShopingList.css";

const ShopingList = (props) => {
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
            key={prod.nazwa}
            onContextMenu={(e) => handleRightMouseButtonClick(e, prod)}
          >
            {prod.nazwa}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShopingList;
