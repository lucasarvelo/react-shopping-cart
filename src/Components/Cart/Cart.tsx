import CartItem from "../CartItem/CartItem";

import { Wrapper } from "./Cart.styles";

import { CartItemType } from "../../App";
import Item from "../Item/Item";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]): number =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);
  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      {!cartItems.length && <p>Cart Empty</p>}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
