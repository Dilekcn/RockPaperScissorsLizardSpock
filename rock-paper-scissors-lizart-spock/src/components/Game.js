import React,{useState,useEffect} from 'react'
import './Game.css'

function Game() {
    const [computerSelection, setComputerSelection] = useState(null);
    const [userSelection, setUserSelection] = useState(null);
    const [finalOutput, setFinalOutput] = useState(null);
    const [countUser, setCountUser] = useState(0);
    const [countComputer, setCountComputer] = useState(0);

    const images = ["🧱", "📰", "✂️", "🦎", "🖖"];

    const clickHandler = (value) => {
        setUserSelection(value);
        randomChoiceGenerator();

      };
      const randomChoiceGenerator = () => {
        const randomSelection =
        images[Math.floor(Math.random() * images.length)];
        setComputerSelection(randomSelection);
      }

      useEffect(() => {
        {
          switch (userSelection + computerSelection) {
            case "✂️📰":
            case "🧱✂️":
            case "📰🧱":
            case "🦎📰":
            case "🖖✂️":
            case "🧱🦎":
            case "📰🖖":
            case "🖖🧱":
            case "✂️🦎":
            case "🦎🖖":
              setFinalOutput("YOU WON! 🎉");
              setCountUser(countUser + 1)
              break;
            case "📰✂️":
            case "✂️🧱":
            case "🧱📰":
            case "📰🦎":
            case "✂️🖖":
            case "🦎🧱":
            case "🖖📰":
            case "🧱🖖":
            case "🦎✂️":
            case "🖖🦎":
              setFinalOutput("YOU LOSE! 👎 ");
              setCountComputer(countComputer + 1)

              break;
            case "🧱🧱":
            case "📰📰":
            case "✂️✂️":
            case "🦎🦎":
            case "🖖🖖":
              setFinalOutput("ITS A DRAW! 💥 ");
              break;
          }
        }
      }, [computerSelection, userSelection]);
  return (
    <div className='main-container'>
         <h1>Rock, paper, scissor, lizard and Spock</h1>
        <div className='container'>
            <div className='section'>
                <div className='title'>
                    <h3>You</h3>
                </div>
             
                <div className='image'>{userSelection}</div>
            </div>

            <div className='section'>
                <div className='title'>
                    <h3>Computer</h3>
                </div>
                <div className='image'>{computerSelection}</div>
            </div>

        </div>

       <div className='info-output'>
       <h2>{finalOutput}</h2>

<h2>Score: You = {countUser}  /  Computer = {countComputer}   </h2>
       </div>
        <div className="image-btn">
          {images.map((select,i) => (
            <button key={i} onClick={() => clickHandler(select)}>{select}</button>
          ))}
        </div>
   
        
    </div>
  )
}

export default Game