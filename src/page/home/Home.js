import {Jumbotron} from 'react-bootstrap'
import './Home.scss';

function Home(){
    return (
        <div>
            <Jumbotron fluid className="home-jumbotron home-jumbotron-top">
                <div className="home-jumbotron-description">
                    <p><span>2020</span> Myoungji University</p>
                    <p>Cartoon Animation Content</p>
                    <p>Online Graduation Exhibition</p>
                </div>
            </Jumbotron>
            <Jumbotron fluid className="home-jumbotron home-jumbotron-center">
                <div className="home-jumbotron-description">
                    <h1>Ciao</h1>
                    <h4>: 피날레는 새로운 오프닝</h4>
                    <p>4년이라는 여정의 피날레에서 우리는 각자의 오프닝을 시작한다.</p>
                    <p>끝과 시작에서 터뜨리는 폭죽의 발광(發光)과 같이 빛나는 잠재력과 가능성을 가지고 새로운</p>
                <p>도약을 위해 준비하는 11인의 열정과 예술적 관념이 담긴 작품들이 모두에게 인사를 건넨다. Ciao!</p>
                </div>
            </Jumbotron>
            <Jumbotron fluid className="home-jumbotron home-jumbotron-bottom">
            </Jumbotron>
            
        </div>
    )
}

export default Home;