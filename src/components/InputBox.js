import React, {useState} from 'react'

export default function InputBox() {
   
    const handleUpcaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowcaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleClearText = () => {
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text,setText] = useState(" ");
    
    return (
        <main>
            <textarea id="input-box" value={text} onChange={handleOnChange}></textarea>
            <p id="text-summary"> {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <button className="btn" onClick = {handleUpcaseClick}>Convert To Uppercase</button>
            <button className="btn" onClick = {handleLowcaseClick}>Convert To Lowercase</button>
            <button className="btn" onClick = {handleExtraSpaces}>Remove Extra Space</button>
            <button className="btn" onClick = {handleClearText}>Clear Text</button>
        </main>
    )
}
