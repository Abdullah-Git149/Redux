import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, } from "react-router-dom"
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Navbar />
          <Route path="/" exact component={Home} />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
