import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ItemsProvider } from './contexts/ItemsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </React.StrictMode>
);
