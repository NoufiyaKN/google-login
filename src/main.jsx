import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
// import './bootstrap.min.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="345634435346-8ar3sebs6geksab502gsk6cnej3j8rqh.apps.googleusercontent.com">
    <BrowserRouter><App /></BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)