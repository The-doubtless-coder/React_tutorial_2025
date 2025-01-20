// import logo from './logo.svg';
// import './App.css';
import Header from './Header'
import Content from './Content';
import Footer from './Footer';
import './index.css';

function App() { 
  return (
    <div className="App">
      <Header/>
      <Content></Content>
      {/* <header className="App-header">
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
      {/* </header> */} */
       <Footer></Footer>
    </div>
//     <div>
// /
//     </div>
    );
}

export default App;
