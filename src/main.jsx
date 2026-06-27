import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

{/*import UserGreeting from './UserGreeting.jsx'
import './UserGreeting.css'*/}
import List from './List.jsx'
import ListApp from './ListApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<UserGreeting isLoggedin={true} username={"Trench"} />*/}

    
   
      <ListApp/>
    
  </StrictMode>,
)

