import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart";
import { toggleLikeItem } from "../../store/produce";

function ProduceDetails({ produce }) {
  const dispatch = useDispatch();
  const cartItem = {};

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          onClick={() => dispatch(toggleLikeItem(produce.id))}
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => dispatch(addItemToCart(produce.id))}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
