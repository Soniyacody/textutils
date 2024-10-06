import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import Abouts from './components/Abouts';
// import{
//   BrowserRouter,
//   Route,
//   Routes,
// }from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='black';
      showAlert("Dark mode enabled","success");
      document.title="Textutil - Darkmode"
    }
    else {
      setMode('light');
      document.body.style.background='white';
      showAlert("Light mode enabled","success");
      document.title="Textutil - Light mode"
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
            {/* <Routes> */}
              {/* <Route  path="/about" element={<Abouts/>}/> */}
              {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>}/> */}
            {/* </Routes> */}
            <TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
