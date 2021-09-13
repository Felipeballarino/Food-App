import { Route } from 'react-router';
import './App.css';
import Details from './components/detail/detail';
import Home from './components/Home/home';
import LandingPage from './components/landingPage/landingPage';
import Nav from './components/nav/nav';
import RecipeCreator from './components/recipeCreator/recipeCreator';


function App() {
  return (
      <div className="App">
          <Route exact path = '/' component={LandingPage} />
          <Route  path = '/food' component={Nav}/>
          <Route exact path ='/food/home' component={Home}/>
          <Route  path ='/food/detail/:id' component = {Details} />
          <Route exact path ='/create' component = {RecipeCreator}/>
      </div>
  );
}

export default App;
