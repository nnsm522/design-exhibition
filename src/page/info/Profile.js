import {Container, Row, Col} from 'react-bootstrap'
import './Profile.scss';

function Profile(props){
	return(
		<div className="profile-container">
			<Container>
				<Row>
					{
						props.student.map(function(s, i){
							return (
								<Col md={2} sm={6} xs={6} className="profile-box">
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