import { usecartStore } from "@/store/cart";
import type { FC } from "react";

interface CardProps {
  img: string;
  title: string;
  price: number;
  stock: number;
}
const Card: FC<CardProps> = ({ img, price, stock, title }) => {
  return (
    <article className="bg-white rounded-2xl flex flex-col gap-4 p-8 shadow-2xl">
      <img
        className="rounded-2xl  bg-cover bg-center flex  flex-1"
        src={img}
        alt=""
      />

      <div className="flex justify-between">
        <h5 className="text-2xl font-bold">{title} -</h5>
        <p className="font-semibold">
          stock: <span className="font-bold text-orange-400">{stock}</span>
        </p>
      </div>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed accusamus
        suscipit quas repudiandae tenetur, possimus, delectus voluptas officiis
        rerum odit fugiat doloribus eligendi consequatur, deleniti doloremque
        vero eos dolore aliquid.
      </p>

      <div className="flex justify-between items-center">
        <span className="font-bold text-green-500 text-xl">${price}</span>
        <button className="text-red-400 border-2 border-red-400 rounded-2xl p-2 w-40 font-bold cursor-pointer">
          Agregar al carrito
        </button>
      </div>
    </article>
  );
};

export default Card;
