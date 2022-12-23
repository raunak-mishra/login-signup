import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { useState } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import { Route, Routes} from "react-router";


function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element=
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          />
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
            
          {/* </Route> */}
          <Route path="/register" element={<Register/>}/>
            {/* <Register /> */}
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
