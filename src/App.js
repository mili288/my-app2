import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Art from './components/pages/Art';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Navbar from './components/Navbar';
import Manga from './components/pages/Manga';



function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Home' component={Home} />
      <Route path='/Art' component={Art} />
      <Route path='/Manga' component={Manga}/>
      <Route path='/About' component={About} />
      <Route path='/Contact' component={Contact} />
        </Switch>
    </Router>
    </div>
  

  );
}

export default App;
