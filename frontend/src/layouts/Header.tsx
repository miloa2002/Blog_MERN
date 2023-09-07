import { NavLink } from "react-router-dom"
import imgHero from "../../public/hero.jpg"

const Header = () => {

  return (
    <>
      <header className="container">
      <div className="mt-12">
        <div>
        <h1 className="text-center  text-7xl">Travel Blog</h1>
      </div>
      <nav className="w-full flex sm:flex-row flex-col items-center justify-center gap-6 font-bold mt-2">
        <NavLink
          className={({isActive}) => (isActive ? "text-blue-500" : "")} 
          to={"/"} 
          >Inicio
        </NavLink>
      </nav>
      </div>
    </header>
    <div className="mt-8 relative mb-12">
        <img className="object-cover h-[60vh] w-full" src={imgHero} alt="imagen header" />
        <div className="container">
          <div className="absolute top-[50%] text-white">
          <h2 className=" text-2xl md:text-4xl mb-4">Conoce Colombia!!! Fiesta <br /> en <span className="font-bold">la piedra del peñol</span></h2>
        </div>
        </div>
      </div>
    </>
  )
}

export default Header