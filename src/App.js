import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Button from './Components/Button';
import ProjectList from './Components/ProjectList';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App container">
      <Nav></Nav>
      <div className="content-wrap">
        <Header title="Portfolio"/>
        
        
        <ProjectList></ProjectList>
        <About></About>
        <div className='contact'>
          <ul>
            <li><Button text="Email Me" color="#2e2f4d" href="mailto:cassandrareinhart@gmail.com"/></li>
            <li><Button text="Contact Me" color="#2e2f4d" href="https://www.linkedin.com/in/cassandra-reinhart/"/></li>
         </ul>
         </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
