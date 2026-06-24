import Student from "./Student.jsx";
import  './student.css';


function App(){

  return(
    <>
    <Student name="Spiral" age={20} isStudent={true} />
    <Student name="James" age={40} isStudent={false}/>
    <Student name="Gavin" age={35} isStudent={false}/>
    <Student name="Bloke" age={23} isStudent={true}/>
    <Studentss/>
    
    </>
  );
}
export default App