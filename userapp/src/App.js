import React from "react";
// import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
// import Users  from './components/Users';
// import UserLogin from './components/UserLogin';
// import PrivateRoute from './components/PrivateRoute';
// import UserRegister from './components/UserRegister';
import LoginButton from './components/LoginButton';
 


const App = () => {
  
  
  return (
    <div className="App">
 
  
  {/* <Link to='/login'>Login</Link>
  <Link to='/register'>Register</Link>
  <Link to='/userlist'>Users</Link> */}
 
        
       <header className="App-header">
      
       
       {/* <div className="loginForm">
       <Route path='/login' exact  component={UserLogin} />
        <Route path='/register' exact component={UserRegister} />
      </div> */}
        
        
      {/* <Switch> */}
      
{/*    s */}
       {/* </Switch> */}
       </header>
       <LoginButton />
    </div>
  );
}

export default App;