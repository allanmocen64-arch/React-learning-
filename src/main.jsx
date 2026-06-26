import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import UserGreeting from './UserGreeting.jsx'
import './UserGreeting.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserGreeting isLoggedin={true} username={"Trench"} />
  </StrictMode>,
)
