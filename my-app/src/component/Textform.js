//rfc
import React, { useState } from 'react'


import '../App.js';

export default function Textform(props) {
    const [text, settext] = useState("Enter1");

    const handelUpclick = () => {
        console.log("uparvase vwas clicked" + text);
        let newText = text.toUpperCase();
        settext(newText)
        props.showAlert("converted to upercase")



    }
    const handelLowerclick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        settext(newText)
        props.showAlert("converted to Lowercase")



    }
    const handelOnchange = (event) => {
        console.log("on change");
        settext(event.target.value);

        
        
    }
    const handcopy = () => {


        // Get the text field
        var copyText = document.getElementById("myBox");

        // Select the text field
        copyText.select();
        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        // Alert the copied text
        alert("Copied the text: " + copyText.value);
        props.showAlert("copytext")

    }

    //remove extra space
    const handelExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "));
        props.showAlert("Remove extra space","success")

    }
    // setText("new");
    // const [text, setText] = useState("Enter Text Here");
    //setText("enter new text");

    return (
        <>
            <div className='container'>

                <h1>{props.heading} </h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handelOnchange} id="myBox" rows="20"></textarea>
                </div>
                <button className="btn btn primary  mx-1 my-1" onClick={handelUpclick} >Convert to upercase</button>
                <button className="btn btn primary mx-1 my-1" onClick={handelLowerclick} >Convert to LOwercase</button>
                <button className="btn btn primary mx-1 my-1" onClick={handcopy} >copy text</button>
                <button className="btn btn primary mx-1 my-1" onClick={handelExtraSpace} >Remove Extra Space</button>

            </div>
            <div className="container my3">
                <h1>your text summery</h1>
                <p>  {text.trim().split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
