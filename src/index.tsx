import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Component
import App from './pages/App';

// Styles
import './styles/font.css';
import './styles/tailwind.css';
import './styles/styles.scss';
import './styles/carroussel.scss';
import './styles/table.scss';
import './styles/utils.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
