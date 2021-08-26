import logo from './logo.svg';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Link</Nav.Link>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='jumbotron visual'>
        <h1 className='display-4'>
          Mind Bridge. <br />
          2021 FALL
        </h1>
        <p className='lead'>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className='my-4' />
        <p>
          It uses utility classNamees for typography and spacing to space
          content out within the larger container.
        </p>
        <a className='btn btn-light btn-lg' href='#' role='button'>
          Learn more
        </a>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src=''></img>
            <h4>상품명</h4>
            <p>상품설명 가격</p>
          </div>
          <div className='col-md-4'>
            <h4>상품명</h4>
            <p>상품설명 가격</p>
          </div>
          <div className='col-md-4'>
            <h4>상품명</h4>
            <p>상품설명 가격</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
