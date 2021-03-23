import { useState } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './App.scss';
import Home from './page/home/Home.js';
import Info from './page/info/Info.js';
import professorData from './data/professor.js';

function App() {
  let [page, setPage] = useState("home");
  let [professor, setProfessor] = useState(professorData);
  
  return (
    <div className="App container">
      <div className="fixed-top container">
        <Navbar bg="white" expand="lg">
          <Navbar.Brand href="/">Ciao</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#info" onClick={()=>{setPage("info")}}>INFO</Nav.Link>
            <Nav.Link href="#works" onClick={()=>{setPage("works")}}>WORKS</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div className="mg-top">
        {
          page === "home"
          ? (<Home></Home>)
          : (<Info professor={professor}></Info>)
        }
      </div>
      
      
      <div className="footer">
        <p>Copyright (c) MYOUNGJI UNIVERSITY. All Right Reserved.</p>
      </div>

    </div>
  );
}

export default App;
