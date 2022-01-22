import Header from './components/header';
import Home from './components/home';
import Signup from './components/singup';
import './App.css';
import {BrowserRouter as Router,
  Switch,

 } from 'react-router-dom';
function App() {
  return (
    
   <>
   <Router>
     <div>
       <Header />
     </div>
     <div className='App'>
      <Switch>
        <Router exact path='/'>
          <Home></Home>
        </Router>
        <Router path='/home'>
          <Home></Home>
        </Router>
        <Router path='/singup'>
          <Signup></Signup>
        </Router>
      </Switch>
     </div>
   </Router>
   </>
  );
}

export default App;
