import logo from './logo.svg';
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import prds from './data.js';
import Detail from './Detail.js';

function App() {
  let [prd, fnPrd] = useState(prds);
  return (
    <div className='App'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand>
            <Link to='/'>Mind Bridge</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/about'>
                About
              </Nav.Link>
              <NavDropdown title='Detail' id='basic-nav-dropdown'>
                <NavDropdown.Item>
                  <Link to='/detail/0'>상품0</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to='/detail/1'>상품1</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to='/detail/2'>상품2</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        {/* 메인 페이지 */}
        <Route exact path='/'>
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
          <div className='container products'>
            <div className='row'>
              {prd.map((v, i) => {
                return <Product prd={v} i={i} key={i}></Product>;
              })}
            </div>
          </div>
        </Route>
        {/* 디테일 페이지 */}
        <Route path='/detail/:id'>
          <Detail prd={prd}></Detail>
        </Route>
      </Switch>
    </div>
  );
}

function Product(props) {
  return (
    <div className='col-md-4'>
      <img
        src={`https://eunsuneun.github.io/react-shop/src/img/prd0${props.i}.jpg`}
      />
      <h4>{props.prd.title}</h4>
      <p>{props.prd.content}</p>
      <p className='price'>{props.prd.price}won</p>
    </div>
  );
}

export default App;
