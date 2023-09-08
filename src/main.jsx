import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Theme from "./Styles/Theme.jsx";
import GlobalStyle from "./Styles/GlobalStyles.jsx";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>,
)
