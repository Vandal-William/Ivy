import ReactDOM from 'react-dom/client'
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './global/baseContainer.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
