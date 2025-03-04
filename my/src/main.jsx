
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {StrictMode} from 'react' // Import BrowserRouter from react-router-dom

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Wrap the entire app with BrowserRouter */}

      <App />

  </StrictMode>
);
