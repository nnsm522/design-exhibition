import { useEffect, useState } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './App.scss';
import Home from './page/home/Home.js';
import Info from './page/info/Info.js';
import Works from './page/works/Works.js';
import Board from './page/board/Board.js';
import professorData from './data/professor.js';
import studentData from './data/student.js';
import committeeData from './data/committee.js';
import partsData from './page/works/parts.js';


function App() {
  let [page, setPage] = useState("home");
  let [professor, setProfessor] = useState(professorData);
  let [student, setStudent] = useState(studentData.sort(function(a,b){  //이름으로 정렬
    return a.student_name < b.student_name ? -1 : a.student_name > b.student_name ? 1 : 0;
  }));
  let [committee, setCommittee] = useState(committeeData);
  let [isBoard, setIsBoard] = useState(false);
  let [selectedStudent, setSelectedStudent] = useState({});
  let [selectedParts, setSelectedParts] = useState(partsData[0]);
  let [selectedTitle, setSelectedTitle] = useState("");
  let [isDetail, setIsDetail] = useState(false);


  useEffect(()=>{
    setSelectedTitle(selectedStudent.title);
  },[selectedStudent])
  
  return (
    <div className="App container">
      <div className="fixed-top container">
        <Navbar bg="white" expand="lg">
          {
            isBoard === true
            ? <img src="back-arrow.png" alt=""
              className="navbar-back-arrow-img"
              onClick={()=>{isDetail===true ? setIsDetail(false) : setIsBoard(false)}}
              />
            : <Navbar.Brand href="#home" onClick={()=>{setIsBoard(false); setPage("home");}}>Ciao</Navbar.Brand>
          }
          <Nav className="ml-auto">
            <Nav.Link href="#info" onClick={()=>{setIsBoard(false); setPage("info");}}>INFO</Nav.Link>
            <Nav.Link href="#works" onClick={()=>{setIsBoard(false); setPage("works");}}>WORKS</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div className="mg-top">
        
        {
          isBoard === true
          ? <Board
              setIsBoard={setIsBoard}
              selectedStudent={selectedStudent}
              selectedTitle={selectedTitle}
              setSelectedTitle={setSelectedTitle}
              isDetail={isDetail}
              setIsDetail={setIsDetail}
              >
            </Board>
          : {
              "home" : <Home></Home>,
              "info" : <Info professor={professor}
                  student={student} committee={committee}
                  setSelectedStudent={setSelectedStudent}
                  setIsBoard={setIsBoard}
                  >
                </Info>,
              "works" : <Works student={student}
                  setSelectedStudent={setSelectedStudent}
                  setIsBoard={setIsBoard}
                  selectedParts={selectedParts}
                  setSelectedParts={setSelectedParts}
                  >
                </Works>
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
