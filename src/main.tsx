import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/components/arc/foundation.css'
import './index.css'
import App from './App.tsx'

document.documentElement.setAttribute('data-accent', 'coral')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
