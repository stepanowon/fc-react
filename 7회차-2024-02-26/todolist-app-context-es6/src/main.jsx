import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoProvider } from './TodoContext';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
)
