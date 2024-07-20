import { ItemNavbar } from '../../ItemNavbar/ItemNavbar'


export const Navbar = () => {
  return(
    <nav className='w-3/4 h-full flex'>
      <ul className='w-full flex justify-center items-center'>
        <ItemNavbar route='/' content='contador-clics' />        
        <ItemNavbar route='/route1' content='timer' />
        <ItemNavbar route='/route2' content='use-active' />
        <ItemNavbar route='route3' content='digital-clock' />
      </ul>
    </nav>
  )
}