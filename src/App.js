import logo from './logo.svg';
import './App.css';

function App() {
  const myName = "IAN __"
  const profession = "Software Engineer"
  const myNumbers = [1, 2, 3, 4, 5, 6,7];

  const handleNames = ()=>{
    const names = ["IAN", "KEN", "MARTIN", "JOHNSON", "KIMBERLY", "RUPERT"];
    const randomInt = Math.floor(Math.random()*3);
    return names[randomInt];
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNames()}!
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          {/* Learn React
        </a> */}
        {/* <p>My name is {myName} and I am a {profession} and I own the below {myNumbers}</p> */}
      </header>
    </div>
  );
}

export default App;
