import React from 'react';
import { createRoot } from 'react-dom/client';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Loader from './routes/loader'
import Watcher from './routes/watcher'

Amplify.configure(config);

const container = document.getElementById('root');
const root = createRoot(container);
root.render (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="loader" element={<Loader />} />
      <Route path="watcher" element={<Watcher />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
