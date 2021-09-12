import { BrowserRouter as Router, Route } from 'react-router-dom';
import Counter from '../components/Counter/Counter';
import NavBar from '../components/NavBar/NavBar';
import ToDo from '../components/ToDo/ToDo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Route exact path='/todo' component={ToDo} />
          <Route path='/counter' component={Counter} />
      </Router>
    </div>
  );
}

export default App;
