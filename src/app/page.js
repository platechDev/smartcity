import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <div className='flex flex-row'>
        <NavBar/>

        <div className="flex ml-[200px] transition-margin duration-800">
              <h1 className="text-3xl font-bold mb-4">Bienvenido</h1>
              <p className="text-lg">La portalla cubre el 90% de la pantalla y el navbar el 10%.</p>
        </div>
      </div>
    </main>
  );
}


