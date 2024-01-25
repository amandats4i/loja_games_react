import { Link } from "react-router-dom"

function Navbar() {



  return (
    <div className="grid grid-cols-6 bg-violet-600 py-3">

      <Link to={"/home"} className="col-span-3  text-white text-3xl hover:text-green-400 flex justify-start px-6 pt-1 font-bold">
        VaultGames
      </Link>

    <div>
      <Link to={"/categorias"} className="col-span-1  text-white flex justify-around">
        <button className="bg-violet-500 rounded-full hover:bg-green-400 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-8 py-3 font-bold">
          Categorias
        </button>
        </Link>

      </div>

      <div className="col-span-1  text-white flex justify-around">
        <button className="bg-violet-500 rounded-full hover:bg-green-400 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-8 py-3 font-bold">
          Produtos
        </button>
      </div>

      <div className="col-span-1  text-white flex justify-around">
        <button className="bg-violet-500 rounded-full hover:bg-green-400 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-8 py-3 font-bold">
          Login
        </button>
      </div>


    </div>
  )
}

export default Navbar