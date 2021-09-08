import { Route } from 'react-router';
import './App.css';
import Home from './components/Home/home';
import LandingPage from './components/landingPage/landingPage';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className="App">
      
        <Route exact path = '/' component={LandingPage} />
        <Route path = '/food' component={Nav}/>
        <Route exact path ='/food/home' component={Home}/>

    </div>
  );
}

export default App;
