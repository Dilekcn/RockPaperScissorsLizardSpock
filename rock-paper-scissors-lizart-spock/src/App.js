
import './App.css';
import Game from './components/Game';
import Img from './img/img.jpg'

function App() {
  return (
    <div className="App">
     <div className='img'> 
     <img src={Img}/>
     </div>
      
      <Game/>
    </div>
  );
}

export default App;
