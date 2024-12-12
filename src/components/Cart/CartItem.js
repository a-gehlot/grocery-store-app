import { removeItemFromCart, increaseItemCount, decreaseItemCount } from '../../store/cart';
import { useDispatch } from 'react-redux';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemoveItemFromCart = () => {
    dispatch(removeItemFromCart(item.id));
  };

  const handleIncreaseItemCount = () => {
    dispatch(increaseItemCount(item.id));
  }

  const handleDecreaseItemCount = () => {
    if (item.count > 1) {
      dispatch(decreaseItemCount(item.id))
    } else {
      dispatch(removeItemFromCart(item.id))
    }
  };

  

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={item.count}
          readOnly
        />
        <button
          className="cart-item-button"
          onClick={handleIncreaseItemCount}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={handleDecreaseItemCount}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={handleRemoveItemFromCart}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
