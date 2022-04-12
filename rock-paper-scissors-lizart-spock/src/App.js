
import './App.css';
import Game from './components/Game';
import Img from './img/img.jpg'
import Diagram from './img/diagram.jpeg'

function App() {
  return (
    <div className="App">
     <div className='img'> 
     <img src={Img}/>
     </div>
      
      <Game/>
      <div className='img1'> 
     <img src={Diagram}/>
     </div>
    </div>
  );
}

export default App;
