import "./App.css";
import Card from "./components/Card";
export interface Category {
  id: number;
  img: string;
  price: number;
  stock: number;
  title: string;
}

const categories: Category[] = [
  {
    id: 1,
    img: "https://frutas.consumer.es/sites/frutas/files/styles/max_2600x2600/public/images/frutas.webp?itok=3lQLkAog",
    price: 8,
    stock: 5,
    title: "Frutas",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/520490716/es/foto/pescados-y-mariscos-en-el-hielo.jpg?s=612x612&w=0&k=20&c=XZVNjTaIZeC24sC9BEPztri2z9XGibWNo6olJ9rWMN4=",
    price: 15,
    stock: 3,
    title: "Mariscos",
  },
  {
    id: 3,
    img: "https://cdn.nutritionstudies.org/wp-content/uploads/2014/05/whole-grains-good-or-bad-1024x536.jpg",
    price: 20,
    stock: 4,
    title: "Cereales",
  },
];

function App() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center my-10 text-red-600">
        Grupos
        <span className="ml-1 text-orange-400"> Alimenticios</span>
      </h1>

      <section className="container p-5 grid grid-cols-3 mt-10 gap-10">
        {categories.map((category) => (
          <Card
            key={category.id}
            img={category.img}
            price={category.price}
            stock={category.stock}
            title={category.title}
          />
        ))}
      </section>
    </>
  );
}

export default App;
