
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter from react-router-dom

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* Wrap the entire app with BrowserRouter */}

      <App />

  </BrowserRouter>
);
