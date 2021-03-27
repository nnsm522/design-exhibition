import { useEffect, useState } from 'react';
import {Container, Col, Row, } from 'react-bootstrap'
import './Board.scss';

function Board(props){
	let selectedStudent = props.selectedStudent;
	let selectedTitle = props.selectedTitle;
	let [currentTitle, setCurrentTitle] = useState(selectedTitle);
	let [detailWorks, setDetailWorks] = useState(null);
	let isDetail = props.isDetail;
	let setIsDetail = props.setIsDetail;
	
	return (
			<div className="board-container">
				<div className="title-box">
					<p className="title-text">{isDetail===false ? selectedTitle : currentTitle}</p>
					<p className="student-name-text">{selectedStudent.student_name}</p>
				</div>

				<hr className="board-hr"/>

				{
					selectedStudent.works.length === 1
					? <SinglePost image={selectedStudent.works[0]}/>
					: (	isDetail === false
							? <MultiplePost selectedStudent={selectedStudent} setIsDetail={setIsDetail} setDetailWorks={setDetailWorks} setCurrentTitle={setCurrentTitle}/>
							: <DetailPost image={detailWorks} selectedStudent={selectedStudent}/>
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
						props.selectedStudent.works.map(function(works, i){
							return(
								<Col className="multiple-post-poster-box" key={'multiple-post-poster'+i}
									onClick={()=>{props.setIsDetail(true); props.setDetailWorks(works); props.setCurrentTitle(props.selectedStudent.subtitle[i])}}
								>
									<img src={"works/poster/"+props.selectedStudent.student_name+" 포스터.jpg"} alt=""/>
									<p className="multiple-post-title-text">{props.selectedStudent.subtitle[i]}</p>
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