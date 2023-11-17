import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Login from './Components/Login';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import Message from './Components/Message';
import Alert from "./Components/Alert"


function App() {

  const [loggedin, setLoggedin] = useState();
  const [reciever, setReciever] = useState();
  const [AlertType, setAlertType] = useState();
  const [AlertMessage, setAlertMessage] = useState();


  return (
    <>
    <Router>
    <Navbar loggedin={loggedin} setLoggedin={setLoggedin}/>
      <Routes>
      <Route path='/' element={<Home setAlertType={setAlertType} setAlertMessage={setAlertMessage} setReciever={setReciever} setLoggedin={setLoggedin} loggedin={loggedin}/>}/>
        <Route path='/signup' element={<Signup setAlertType={setAlertType} setAlertMessage={setAlertMessage}  setLoggedin={setLoggedin} loggedin={loggedin}/>}/>
        <Route path='/login' element={<Login setAlertType={setAlertType} setAlertMessage={setAlertMessage}  setLoggedin={setLoggedin} loggedin={loggedin}/>}/>
        <Route path='/Message' element={<Message setAlertType={setAlertType} setAlertMessage={setAlertMessage}  recieverEmail={reciever} setLoggedin={setLoggedin} loggedin={loggedin}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
