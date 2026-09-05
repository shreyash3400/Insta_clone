import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ContextAPI } from './features/App.Context.jsx'


createRoot(document.getElementById('root')).render(
    <ContextAPI>
      <App/>
    </ContextAPI>
)
