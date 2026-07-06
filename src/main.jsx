import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

{
  /*import UserGreeting from './UserGreeting.jsx'
import './UserGreeting.css'*/
}
{
  /*import List from './List.jsx'
import ListApp from './ListApp.jsx'*/
}
{
  /*import Button from './Button.jsx'
import PandaPic from './PandaPic.jsx'*/
}
{
  /*import MyComponentApp from './MyComponentApp.jsx'*/
}
{
  /*import CounterApp from "./CounterApp.jsx";
import "./Counter.css";*/
}
{
  /*import OnChangeApp from "./OnChangeApp.jsx";*/
}

{
  /*import ColorPickerApp from "./ColorPickerApp.jsx";
import "./ColorPicker.css";*/
}
import StateUpdatesApp from "./StateUpdatesApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*<UserGreeting isLoggedin={true} username={"Trench"} />*/}
    {/*<Button />*/}
    {/*<PandaPic />*/}
    {/*<MyComponentApp />*/}
    {/*<CounterApp />*/}
    {/*<OnChangeApp />*/}
    {/*<ColorPickerApp />*/}
    <StateUpdatesApp />
  </StrictMode>,
);
