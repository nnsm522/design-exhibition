import { useState } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './App.scss';
import Home from './page/home/Home.js';
import Info from './page/info/Info.js';
import Works from './page/works/Works.js';
import Board from './page/board/Board.js';
import professorData from './data/professor.js';
import studentData from './data/student.js';
import committeeData from './data/committee.js';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

function App() {
  let [page, setPage] = useState("home");
  let [professor, setProfessor] = useState(professorData);
  let [student, setStudent] = useState(studentData.sort(function(a,b){  //이름으로 정렬
    return a.student_name < b.student_name ? -1 : a.student_name > b.student_name ? 1 : 0;
  }));
  let [committee, setCommittee] = useState(committeeData);
  let [isBoard, setIsBoard] = useState(false);
  let [selectedStudent, setSelectedStudent] = useState({});
  
  return (
    <div className="App container">
      <div className="fixed-top container">
        <Navbar bg="white" expand="lg">
          <Navbar.Brand href="/">Ciao</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#info" onClick={()=>{setIsBoard(false); setPage("info");}}>INFO</Nav.Link>
            <Nav.Link href="#works" onClick={()=>{setIsBoard(false); setPage("works");}}>WORKS</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div className="mg-top">
        
        {
          isBoard === true
          ? <Board setIsBoard={setIsBoard} selectedStudent={selectedStudent}></Board>
          : {
              "home" : <Home></Home>,
              "info" : <Info professor={professor} student={student} committee={committee} setSelectedStudent={setSelectedStudent} setIsBoard={setIsBoard}></Info>,
              "works" : <Works student={student} setSelectedStudent={setSelectedStudent} setIsBoard={setIsBoard}></Works>
            }[page]
        }

      </div>
      
      <div className="footer">
        <p>Copyright (c) MYOUNGJI UNIVERSITY. All Right Reserved.</p>
      </div>

    </div>
  );
}

export default App;
