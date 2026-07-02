import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

{/*import UserGreeting from './UserGreeting.jsx'
import './UserGreeting.css'*/}
{/*import List from './List.jsx'
import ListApp from './ListApp.jsx'*/}
import Button from './Button.jsx'
import PandaPic from './PandaPic.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<UserGreeting isLoggedin={true} username={"Trench"} />*/}

    
      <Button/>
      <PandaPic/>

      
    
  </StrictMode>
)

