import React,{useState} from "react";

export default function TextForm(props) {
    const [text, setText]=useState("");
    const handleUpClick=()=>{
        // console.log("button was clicked "+text);
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted the text in the Upper Case!", "success")


    }

    const handleLwClick=()=>{
      // console.log("button was clicked "+text);
      let newText =text.toLowerCase();
      setText(newText);
      props.showAlert("Converted the text in the Lower Case!", "success")


  }


  const handleClear=()=>{
    setText('');
    props.showAlert("Cleard the text !", "success")

  }

  const handleCopy=()=>{
    var text= document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied the code in your clipboard!", "success")
  }
    const handleOnChange=(event)=>{
        // console.log("Change was detected");
        setText(event.target.value)

    }
    return (
        <>
    <div className="container" >
      <div className="mb-3 my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control" style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white'  , color:props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"  value={text} onChange={handleOnChange}>

          </textarea>
      </div>
      <button className="btn btn-primary my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3  my-1 "  onClick={handleLwClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-3 my-1"  onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-3 my-1"  onClick={handleClear}>Clear Text</button>
    </div>

    <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>

        <h1>Your Summary</h1>
        <p>You have {text.split(" ").filter((element)=>{return  element.length!==0}).length} and {text.length} words</p>

        <p>{0.008 * text.split(" ").length} is the time requried to read the text.</p>
    </div>
    </>
  );
}

