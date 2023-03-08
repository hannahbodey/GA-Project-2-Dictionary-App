import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='nav container'>
        <Link to='/'>Home</Link>
        <Link to='/medical'>Medical</Link>
        <Link to='/school'>School</Link>
      </nav>
    </>
  )
}

export default Navbar