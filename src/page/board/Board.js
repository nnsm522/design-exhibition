import { useState } from 'react';
import {Container, Col, Row, } from 'react-bootstrap'
import './Board.scss';

function Board(props){
	let student = props.selectedStudent;
	let title = student.title;
	let student_name = student.student_name;
	let works = student.works;
	let [detailWorks, setDetailWorks] = useState(null);
	let [isDetail, setIsDetail] = useState(false);
	return (
			<div className="board-container">
				<div className="title-box">
					<p className="title-text">{title}</p>
					<p className="student-name-text">{student_name}</p>
				</div>

				<hr className="board-hr"/>

				{
					works.length === 1
					? <SinglePost image={works[0]}/>
					: (	isDetail === false
							? <MultiplePost student={student} setIsDetail={setIsDetail} setDetailWorks={setDetailWorks}/>
							: <DetailPost image={detailWorks} student={student}/>
						)
				}

			</div>
	)
}

function DetailPost(props){
	return(
		<div className="detail-post-container">
			<img src={"works/"+props.image} alt={props.image}/>
		</div>
	)
}

function MultiplePost(props){
	return(
		<div className="multiple-post-container">
			<Container className="multiple-post-poster-container">
				<Row md={3} sm={2} xs={1}>
					{
						props.student.works.map(function(works, i){
							return(
								<Col className="multiple-post-poster-box" key={'multiple-post-poster'+i}
									onClick={()=>{props.setIsDetail(true); props.setDetailWorks(works)}}
								>
									<img src={"works/poster/"+props.student.student_name+" 포스터.jpg"} alt=""/>
									<p className="multiple-post-title-text">{works}</p>
								</Col>
							)
						})
					}
					
				</Row>
			</Container>
		</div>
	)
}

function SinglePost(props){
	return (
		<div className="single-post-container">
			<img src={"works/"+props.image} alt={props.image}/>
		</div>
	)
}

export default Board;