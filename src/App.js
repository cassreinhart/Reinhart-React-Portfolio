import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Button from './Components/Button';
import Project from './Components/Project';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App container">
      <Nav></Nav>
      <div className="content-wrap">
        <Header title="Portfolio"/>
        
        <h2>My Projects</h2>
        <Project></Project>
        <About></About>
        <div className='contact'>
          <ul>
            <li><Button text="Email Me" color="#2e2f4d" href="mailto:cassandrareinhart@gmail.com"/></li>
            <li><Button text="Contact Me" color="#2e2f4d" href="{props.linkedIn}"/></li>
         </ul>
         </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
