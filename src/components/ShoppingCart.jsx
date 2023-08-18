/* eslint-disable react/prop-types */
import { Offcanvas, Stack } from "react-bootstrap";
import CartItem from "./CartItem";
import { useShoppingCart } from "../content/ShoppingCart";
import storeItems from "../data/storeItems.json";
const ShoppingCart = ({ isOpen, closeCart }) => {
  const { cartItems } = useShoppingCart();
  console.log("cartItems", cartItems);
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems?.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total $
            {cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
