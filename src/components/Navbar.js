import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap'

const PageNavbar = () => {
  return (
    <Navbar expand='md' className='navbar container'>
      <Container>
        <Navbar.Brand to='/' as={Link}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls='definitions-nav' />
        <Navbar.Collapse id='definitions-nav'>
          <Nav>
            <Nav.Link to='/medical' as={Link}>Medical</Nav.Link>
            <Nav.Link to='/school' as={Link}>School</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavbar