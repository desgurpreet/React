import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App1 from './App1.jsx'
import './index.css'
import FormControlFunc from './FormControlFunc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App1 /> */}
    <FormControlFunc/>
    {/* <App/> */}
  </StrictMode>,
)
