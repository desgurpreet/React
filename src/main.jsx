import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App1 from './App1.jsx'
import './index.css'
import FormControlFunc from './FormControlFunc.jsx'
import MultiInput from './multiInput.jsx'
import MultiCheckbox from './multiCheckbox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App1 /> */}
    {/* <FormControlFunc/> */}
    {/* <MultiInput/> */}
    <MultiCheckbox/>
    {/* <App/> */}
  </StrictMode>,
)
