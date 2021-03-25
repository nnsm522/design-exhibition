import {Container, Row, Col} from 'react-bootstrap'
import './Profile.scss';

function Profile(props){
	return(
		<div className="profile-container">
			<Container>
				<Row xs={2} sm={4} md={4} lg={6}>
					{
						props.student.map(function(s, i){
							return (
								<Col className="profile-box" key={'profile' + i}
									onClick={()=>{props.setSelectedStudent(s);
										props.setIsBoard(true);
									}}
								>
									<img className="profile-img" src={'profile/'+s.student_name+'.jpg'} alt="profile-img" key={"profile-img"+i}/>
									<div className="profile-overlay">
										<div className="profile-name">{s.student_name}</div>
									</div>
								</Col>
							)
						})
					}
					
				</Row>
			</Container>
		</div>
	)
}


export default Profile;