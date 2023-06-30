import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//To view the database, click on this line:
// https://console.firebase.google.com/u/0/project/registration-form-85863/database/registration-form-85863-default-rtdb/data