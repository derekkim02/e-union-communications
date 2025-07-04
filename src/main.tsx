import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Providers  from '@/context/providers'
import '@/index.css'
import App from '@/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
)
