import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './container/App.tsx';

import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from './app/features/apiSlice.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
);
