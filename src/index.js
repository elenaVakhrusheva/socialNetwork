import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

  let postData = [
    {id: 1, message: 'Message1', likesCount: 12},
    {id: 2, message: 'Message2', likesCount: 10}
  ];

  let dialogsData = [
    {id: "1", name: "Elena"},
    {id: "2", name: "Olesya"},
    {id: "3", name: "Andrey"}
  ];

  let messageData = [
    {id: "1", message: 'Hi'},
    {id: "2", message: 'How are you'},
    {id: "3", message: 'Hello'},
  ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      posts={postData} 
      dialogs={dialogsData} 
      message={messageData}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
