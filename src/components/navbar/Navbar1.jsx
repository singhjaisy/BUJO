import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navcss from "../navbar/navbar.module.css"
import { Link } from 'react-router-dom';
const Navbar1=(()=>{
    return(
        <div style={navcss.navcomp}>
             <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand ><Link className={navcss.linkstyle} to="/">BUJO</Link></Navbar.Brand>
          <Nav className="me-right">
            <Nav.Link className='bujo'><Link className={navcss.linkstyle} to="/components/Tasks">Tasks</Link></Nav.Link>
            <Nav.Link className='bujo'><Link className={navcss.linkstyle} to="/components/Goals">Goals</Link></Nav.Link>
            <button type="button" className="btn btn-dark ms-5"><Link className={navcss.linkstyle} to="/Login">LogIn</Link></button>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
})
export default Navbar1;
