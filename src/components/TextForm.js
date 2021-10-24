import React, { useState } from 'react'

function TextForm() {
    const [text, setText] = useState('Enter the Text for Analysis');

    const convertToUpperCase = () => {
        var enteredText = text;
        setText(enteredText.toUpperCase());
    }

    const displayText = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={displayText}id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={convertToUpperCase}>Convert to Upper Case</button>
        </>
    )
}

export default TextForm;
