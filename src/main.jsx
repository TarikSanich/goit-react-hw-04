import React from 'react'
import ReactDOM from 'react-dom/client'
// Імпорт стилів нормалізації
import "modern-normalize";
import './index.css'
import App from './Componentes/App/App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
