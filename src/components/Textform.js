import React from 'react'

export default function TextForm(props) {
  
    const [text,setText] = React.useState('')

    const textUpperCase=()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text is coverted to Uppercase","success")
    }
    const textLowerCase= ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Text is converted to Lowercase","success")
    }
    const changeHandle = (event)=>{
        setText(event.target.value)
    }
    function textCopyText()
    {
       
        navigator.clipboard.writeText(text)
        props.showAlert("The text is copied","success")
    }
    function textClearText()
    {
        let text = ''
        setText(text)
        props.showAlert("The text is clear","success")
    }
    return (
    <div className="container my-3" >
        <h3>Enter the text to analyze below</h3>
        <div className="mb-3 my-3">
        <textarea className="form-control" value={text} onChange={changeHandle}id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0}type="button" onClick={textUpperCase}className="btn btn-primary mx-3">Uppercase</button>
        <button disabled={text.length===0}type="button" onClick={textLowerCase} className="btn btn-primary ">Lowercase</button>
        <button disabled={text.length===0}type="button" onClick={textCopyText} className="btn btn-primary mx-3">Copy Text</button>
        <button disabled={text.length===0}type="button" onClick={textClearText} className="btn btn-primary ">Clear Text</button>
        <div className='my-3'>
        <h2>Your Text summary</h2>
        <p>Total words in text {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} and Total characters are {text.length}</p>
        <p>Time required to read the text {text.split(' ').filter((ele)=>{return ele.length!==0}).length * 0.008} min </p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
    </div>
  )
}

