import { CgShoppingCart } from "react-icons/cg";
import "./App.css";
import StoreExample from "./components/StoreExample";
import { MinusCircle, PlusCircle, X } from "lucide-react";
import { useState } from "react";
import { usecartStore } from "./store/cart";
// import PanelAdmin from "./components/PanelAdmin";

function App() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(true);
  const { products, removeFromCart, addToCart, minusFromCart } = usecartStore();

  const subTotal = products.reduce(
    (state, item) => state + item.price * item.quantity,
    0,
  );
  const taxes = subTotal * 0.16;
  const total = subTotal + taxes;

  return (
    <>
      <aside
        className={`bg-white p-4 absolute top-0 bottom-0   flex flex-col right-0  z-10 transition-all  ${isCartOpen && "translate-x-full"}`}
      >
        <X
          className="self-end cursor-pointer my-5"
          onClick={() => setIsCartOpen((state) => !state)}
        />
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <article
                className="rounded-2xl p-5 border-2  my-2"
                key={product.id}
              >
                <div className="flex flex-col justify-center items-center">
                  <X
                    className="self-end cursor-pointer"
                    onClick={() => removeFromCart(product)}
                  />
                  <img
                    src={product.img}
                    alt="koso"
                    className="max-h-20"
                  />
                  <h3>{product.title.slice(0, 30).concat("...")}</h3>
                  <span>${product.price}</span>
                </div>
                <div className="flex gap-2 mt-2 justify-center">
                  <MinusCircle
                    className="cursor-pointer"
                    onClick={() => minusFromCart(product)}
                  />
                  <span>{product.quantity}</span>
                  <PlusCircle
                    className="cursor-pointer"
                    onClick={() => addToCart(product)}
                  />
                </div>
              </article>
            ))}
            <div className="grid grid-cols-2 gap-1 justify-between gap-x-10">
              <p>Subtotal:</p>
              <span>${subTotal}</span>
              <p>Impuesto (16% IVA):</p>
              <span>${taxes.toFixed(2)}</span>
              <p>Total a Pagar:</p>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>
          </>
        ) : (
          <span>No hay productos agregados al carrito</span>
        )}
      </aside>

      <div className="flex justify-between container p-10">
        <h1 className="text-2xl font-bold text-center flex-2">
          Carrito de Compras
        </h1>

        <div className="cart relative cursor-pointer">
          <span className="bg-red-500 text-white min-w-5 min-h-5 text-center  rounded-full absolute -top-3 left-5 bottom-0 h-full">
            {products.length}
          </span>
          <CgShoppingCart
            size={30}
            onClick={() => setIsCartOpen((state) => !state)}
          />
        </div>
      </div>

      <main className="container px-10 ">
        <StoreExample />
      </main>
    </>
  );
}

export default App;
