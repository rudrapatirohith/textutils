import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log('Uppercase was Clic ked'+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to UpperCase','success');
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase','success');
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert('Cleared the Text','success');
    }
    const handleCopyText=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied to Clipboard','success');
    }
const handleOnChange=(event)=>{
    // console.log('On Change');
    setText(event.target.value);
}
const handleExtraSpace = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert('Cleared the Text', 'success');
  }
  
const[text, setText]=useState('');

  return (
    <>
    <div className='container'>
        <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode==='dark'?'#3a4750':'white',color: props.mode==='light'?'black':'white'}} id="myBox" rows="8" ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary gap mx-1 my-1" onClick={handleUpClick} >Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove ExtraSpace</button>


    </div>

    <div className={`container my-3 text-${props.mode==='dark'?'light':'dark'}`} style={{"padding-bottom": "150px"}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} words and {text.length} characters</p>
        <p>Can read in {0.008 * text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes read</p>
        <h3>PREVIEW</h3>
        <p>{text.length>0?text:'Nothing to Preview!'}</p>
    </div>
    </>
  )
}
