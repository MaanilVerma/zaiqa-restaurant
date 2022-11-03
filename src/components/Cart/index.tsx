import { useStateValue } from "../../context/StateProvider";
import CartBody from "./Body";
import CarttHeader from "./Header";
import { motion } from "framer-motion";
import EmptyCart from "../EmptyCart";
import NotFound from "../NotFound";
import Checkout from "../Checkout";
import { useState } from "react";
const Cart = () => {
  const [{ cartItems }] = useStateValue();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  return (
    <>
      {checkoutOpen ? (
        <Checkout handler={setCheckoutOpen} />
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className={`w-full h-screen md:w-[350px] bg-white md:backdrop-blur-sm flex flex-col z-[101] drop-shadow-xl fixed top-0 right-0`}
          >
            <CarttHeader />
            {cartItems && cartItems.length > 0 ? (
              <CartBody action={setCheckoutOpen} />
            ) : (
              <div className="h-full w-full flex-1 flex items-center justify-center">
                <EmptyCart />
              </div>
            )}
          </motion.div>
          {!cartItems && <NotFound text={"Cart Items not available"} />}
        </>
      )}
    </>
  );
};

export default Cart;
