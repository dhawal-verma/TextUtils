import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alerts from './components/Alerts';
function App() {

const [alert,setAlert] = React.useState(null)

function showAlert(message,type)
{
  setAlert(
    {
      msg : message,
      type : type
    }
  )
  setTimeout(()=>{
    showAlert(null)
  },1500)
}
  return (
    <>
      <Navbar />
      <Alerts alert={alert}/>
      <Textform showAlert={showAlert} />
    </>
  ) 
  }

export default App;
