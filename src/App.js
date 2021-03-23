import { useState } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './App.scss';
import Home from './page/home/Home.js';

function App() {
  let [page, setPage] = useState("home");
  return (
    <div className="App container">
      <div className="fixed-top container">
        <Navbar bg="white" expand="lg">
          <Navbar.Brand href="/">Ciao</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#info">INFO</Nav.Link>
            <Nav.Link href="#works">WORKS</Nav.Link>
          </Nav>
        </Navbar>
      </div>

      <Home></Home>
      
      <div className="footer">
        <p>Copyright (c) MYOUNGJI UNIVERSITY. All Right Reserved.</p>
      </div>

    </div>
  );
}

export default App;
