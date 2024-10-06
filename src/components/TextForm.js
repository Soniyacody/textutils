import React, { useState } from "react";
export default function TextForm(props) {
    const handleUpClick=()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleOnChange=(e)=>{
        setText(e.target.value);
    }
    const handleLoClick=()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleClear=()=>{
      setText('');
      props.showAlert("Text Cleared ","success");
    }
    const handleCopy=()=>{
      let text=document.getElementById('myBox');
      text.select();
      // text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied ","success");
    }
  const [text,setText] = useState('Enter text here');
    const splitText=()=>{
      let newText=text.split(/\s+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed","success");
    }
  
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#2f2e2e':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="7"></textarea>
          <div className="my-3">
              <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
              <button className="btn btn-primary m-1" onClick={handleLoClick}>Convert to Lowercase</button>
              <button className="btn btn-primary m-1" onClick={handleClear}>Clear Text</button>
              <button className="btn btn-primary m-1" onClick={handleCopy}>Copy Text</button>
              <button className="btn btn-primary m-1" onClick={splitText}>Remove Spaces</button>
          </div>
        </div>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your text Summary</h1>
            <p>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
            {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
            <p>{0.009 * text.split(" ").length} Minutes to read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter text to preview here'}</p>
      </div>
    </>
  );
}
