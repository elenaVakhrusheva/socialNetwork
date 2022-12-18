import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile'; 
import {BrowserRouter, Routes, Route} from "react-router-dom"


/* import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting'; */

function App(props) {
 //debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <NavBar/>
        <div className="app-wrapper-content">
          <Routes> 
            <Route path="/profile/" element={
              <Profile state={props.appState.profilePage.postData} />
            }/>
            <Route path="/dialogs/" element={
              <Dialogs state={props.appState.dialogsPage.dialogsData} />
            }/>
          </Routes> 
        </div>
      </div>
     </BrowserRouter>
  );
}

export default App;