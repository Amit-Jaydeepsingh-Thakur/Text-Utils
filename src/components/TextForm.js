import React, { useState } from 'react'

function TextForm() {
    const [text, setText] = useState('Enter the Text for Analysis');
    const [numberOfCharacters, setNumberOfCharacters] = useState(0);
    const [numberOfWords, setNumberOfWords] = useState(0);

    const convertToUpperCase = () => {
        var enteredText = text;
        setText(enteredText.toUpperCase());
    }

    const displayText = (event) => {
        setText(event.target.value);
    }

    const getTextSummary = () => {
        var enteredText = text;
        var words = enteredText.split(/\s+/);
        setNumberOfCharacters(enteredText.length);
        setNumberOfWords(words.length);
    }

    return (
        <>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={displayText}id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={convertToUpperCase}>Convert to Upper Case</button>
            <div className='container my-3'></div>
            <button className="btn btn-primary" onClick={getTextSummary} type="button" data-bs-toggle="collapse" data-bs-target="#summaryElement" aria-expanded="false" aria-controls="summaryExample">
                Get Text Summary
            </button>
            <div className='container my-3'>
                <div className="collapse" id="summaryElement">
                    <div className="card card-body">
                        <span>The Number of characters in the entered text are {numberOfCharacters}!!</span>
                        <span>and</span>
                        <span>The Number of words in the entered text are {numberOfWords}!!</span>
                    </div>
                </div>
            </div>
		    
        </>
    )
}

export default TextForm;
