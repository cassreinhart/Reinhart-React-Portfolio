import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Button from './Components/Button';
import Project from './Components/Project';
import Footer from './Components/Footer';
import About from './Components/About';

function App() {
  return (
    <div className="App container">
      <Nav></Nav>
      <Header title="Portfolio"/>
      <Button text="Click Me" color="#2e2f4d"/>
      <Project></Project>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
