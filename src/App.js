import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Button from './Components/Button';
import Project from './Components/Project';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App container">
      <Nav></Nav>
      <Header title="Portfolio"/>
      <Button text="Click Me" color=""/>
      <Project></Project>
      <Footer></Footer>
    </div>
  );
}

export default App;
