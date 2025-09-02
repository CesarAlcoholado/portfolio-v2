
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./utils/i18n/index.ts";
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
