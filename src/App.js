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
 
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <NavBar/>
        <div className="app-wrapper-content">
          <Routes> 
            <Route path="/*" element={
              <Profile posts={props.posts} />
            }/>
            <Route path="/dialogs/" element={
              <Dialogs 
                dialogs={props.dialogs} 
                messages={props.message}
              />
            }/>
            </Routes> 
        </div>
      </div>
     </BrowserRouter>
  );
}

export default App;