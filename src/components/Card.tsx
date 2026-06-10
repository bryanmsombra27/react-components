import { usecartStore } from "@/store/cart";
import type { FC } from "react";
import type { Product } from "./StoreExample";

interface CardProps {
  product: Product;
}
const Card: FC<CardProps> = ({ product }) => {
  const { addToCart, products } = usecartStore();
  const productFound = products.find((p) => p.id == product.id);
  const isAvailable = productFound?.quantity == product.stock;

  return (
    <article
      className={`bg-white rounded-2xl flex flex-col gap-4 p-8 shadow-2xl relative ${isAvailable && "opacity-50 cursor-not-allowed"}`}
    >
      {isAvailable && (
        <span className="absolute top-6/12   rotate-z-45 text-9xl text-red-500 z-20 ">
          Empty
        </span>
      )}

      <img
        className="rounded-2xl  bg-cover bg-center  h-80"
        src={product.img}
        alt=""
      />

      <div className="flex justify-between">
        <h5 className="text-lg font-bold">
          {product.title.slice(0, 66).concat("...")}
        </h5>
      </div>
      <p className="font-semibold">
        stock:{" "}
        <span className="font-bold text-orange-400">{product.stock}</span>
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed accusamus
        suscipit quas repudiandae tenetur, possimus, delectus voluptas officiis
        rerum odit fugiat doloribus eligendi consequatur, deleniti doloremque
        vero eos dolore aliquid.
      </p>

      <div className="flex justify-between items-center">
        <span className="font-bold text-green-500 text-xl">
          ${product.price}
        </span>
        <button
          className={`text-red-400 border-2 border-red-400 rounded-2xl p-2 w-40 font-bold cursor-pointer ${isAvailable && "pointer-events-none border-none opacity-50  cursor-not-allowed "}`}
          onClick={() => addToCart(product)}
          disabled={isAvailable}
        >
          Agregar al carrito
        </button>
      </div>
    </article>
  );
};

export default Card;
