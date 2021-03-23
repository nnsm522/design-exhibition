import {Container, Row, Col} from 'react-bootstrap';
import './Info.scss';


function Info(props){
    return (
        <div className="info-container">
					<PosterContainer/>
          <ProfessorWords p={props.proffesor}/>
        </div>
    )
}

function ProfessorWords(props){
		return(
			<div>
				
			</div>
		)
}

function PosterContainer(){
	return (
		<div className="poster-container">
			<Container>
				<Row>
					<Col sm={5}>
						<img className="poster-img" src="poster.jpg" alt="poster"/>
					</Col>
					<Col sm={7}>
						<p className="poster-title-text">2020 명지대학교 디자인학부</p>
						<p className="poster-title-text">만화애니콘텐츠학과 졸업전시회</p>
						<p className="poster-subtitle-text">[Ciao : 피날레는 새로운 오프닝]</p>
						<p>Ciao는 이탈리아어로 안녕이라는 뜻을 가지고 있습니다.</p>
						<p>우리는 만남의 끝에서 인사를 하기도 하지만</p>
						<p>새로운 만남의 시작점에서 인사를 나누기도 합니다.</p>
						<br/>
						<p>만화애니콘텐츠학과 졸업전시는 4년이라는 대학생활의 피날레이자</p>
						<p>사회로 나아가는 새로운 오프닝에서 모두에게 건네는 인사입니다.</p>
						<p>우리는 이번 전시를 통해 일러스트레이터로서, 웹툰작가로서,</p>
						<p>혹은 디자이너로서 새로운 도약을 시작합니다.</p>
						<br/>
						<p>2020년 졸업생 11인의 프로젝트를 관람할 수 있는 'WORKS'는</p>
						<p>Concept art, Webtoon, Branding이라는 각각의 작품 카테고리로</p>
						<p>구분되어 있습니다.</p>
						<p>11인 개개인의 관념과 색이 들어간 프로젝트들을 여러분께 소개합니다.</p>
						<br/>
						<p>우리의 마지막 피날레와 새로운 오프닝을 함께해주셔서 고맙습니다. Ciao!</p>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Info;