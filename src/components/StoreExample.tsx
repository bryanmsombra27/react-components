import { usecartStore } from "@/store/cart";
import Card from "./Card";
export interface Product {
  id: number;
  img: string;
  price: number;
  stock: number;
  title: string;
}

const products: Product[] = [
  {
    id: 1,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_618105-MLA96131346653_102025-F.webp",
    price: 521,
    stock: 5,
    title:
      "Haylou S30 Pro Anc Audífonos -43db Cancelación De Ruido Adaptativa Auriculares Diadema Gamer Inalámbricos con Micrófono Bluetooth 5.4 Manos Libres De Controlador De 40mm 80h Reproducción Negro",
  },
  {
    id: 2,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_691409-MLA105877852086_022026-F.webp",
    price: 543,
    stock: 3,
    title:
      "Bogast Audífonos Gamer Inalámbricos Ps5, Ps4, Pc Y Switch, Micrófono Noise Cancelling, Sonido Envolvente, Cable 3.5mm Xbox Captain 700",
  },
  {
    id: 3,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_766219-CBT80209078027_102024-F-audifonos-de-diadema-manos-libres-bluetooth-tipo-call-center.webp",
    price: 369,
    stock: 4,
    title: "Audífonos De Diadema Manos Libres Bluetooth Tipo Call Center",
  },
];
interface Props {
  products: Product[];
}

function StoreExample() {
  return (
    <>
      {/* <h1 className="text-2xl font-bold text-center my-10 text-red-600">
        Grupos
        <span className="ml-1 text-orange-400"> Alimenticios</span>
      </h1> */}

      <section className="container  items-center justify-center p-10 grid grid-cols-3 gap-20 mx-auto">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
          />
        ))}
      </section>
    </>
  );
}

export default StoreExample;
