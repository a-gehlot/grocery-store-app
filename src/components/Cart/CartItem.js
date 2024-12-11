import { useState, useEffect } from 'react';
import { removeItemFromCart } from '../../store/cart';
import { useDispatch } from 'react-redux';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const handleRemoveItemFromCart = () => {
    dispatch(removeItemFromCart(item.id))
  }

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          defaultValue={count}
        />
        <button
          className="cart-item-button"
        >
          +
        </button>
        <button
          className="cart-item-button"
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
