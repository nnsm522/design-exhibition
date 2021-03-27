import {Jumbotron, Container, Col, Row, } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import './Works.scss';
import parts from './parts.js';

function Works(props){
	let selectedPart = props.selectedParts;
	let setSelectedPart = props.setSelectedParts;
	let [part, setPart] = useState(selectedPart.part)
	let [explanation, setExplanation] = useState(selectedPart.explanation)

	return (
		<div className="works-container">
			<Jumbotron fluid className="works-jumbotron">
				<div className="works-jumbotron-description">
					<p className="part-text">{part}</p>
					<p className="contour">-</p>
					<p className="part-explanation">{explanation}</p>
				</div>
			</Jumbotron>

			<Container className="part-container">
				<Row xs={3} md={4} lg={6}>
					{
						parts.map(function(p, i){
							return(
								<Col className="part-btn-box" key={'part'+i}>
									<button
										name={p.part}
										className={part===p.part ? "part-btn part-btn-active" : "part-btn"}
										onClick={()=>{setPart(p.part);
																	setExplanation(p.explanation);
																	setSelectedPart(p);
														}}
									>{p.part}</button>
								</Col>
							)
						})
					}
				</Row>
			</Container>

			<Container className="works-poster-container">
				<Row md={3} sm={2} xs={1}>
					{
						props.student.map(function(s, i){
							if (s.part === part){
								return(
									<Col className="works-poster-box" key={'works-poster'+i}
										onClick={() => {props.setSelectedStudent(s); props.setIsBoard(true);}}
									>
										<img src={"works/poster/"+s.student_name+" 포스터.jpg"} alt=""/>
										<p className="works-title-text">{s.title}</p>
										<p className="works-student-name-text">{s.student_name}</p>
									</Col>
								)
							}
						})
					}
					
				</Row>
			</Container>
		</div>
	)
}

function setActive(part){
	let current = document.getElementsByClassName("part-btn-active");
	current[0].className = current[0].className.replace(" part-btn-active", "");
	let change = document.getElementsByName(part);
	change[0].className += " part-btn-active";
}

export default Works;