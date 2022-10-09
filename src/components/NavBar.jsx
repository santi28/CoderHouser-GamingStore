import { Link } from 'react-router-dom'
import '../css/styles.css'
import CartWidget from './CardWidget'

function NavBar() {
  return(
    <header className='flex items-center justify-between p-4 px-6 bg-slate-900'>
      <a href="/">
        <img className='h-16' src="/images/TGSIcon.png" alt="The Gaming Store Icon" />
      </a>
      <nav>
        <ul className='flex gap-4 font-bold text-white text-md'>
          <li className='p-2 px-4 rounded-full cursor-pointer hover:bg-slate-100 hover:text-slate-900'><Link to="/">Inicio</Link></li>
          <li className='p-2 px-4 rounded-full cursor-pointer hover:bg-slate-100 hover:text-slate-900'><Link to="/categories/games">Juegos</Link></li>
          <li className='p-2 px-4 rounded-full cursor-pointer hover:bg-slate-100 hover:text-slate-900'><Link to="/categories/consoles">Consolas</Link></li>
          <li className='p-2 px-4 rounded-full cursor-pointer hover:bg-slate-100 hover:text-slate-900'><Link to="/">Tutoriales</Link></li>
          <li><Link to="/cart"><CartWidget /></Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar