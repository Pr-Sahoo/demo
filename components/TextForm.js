import React, {useState} from 'react'


export default function TextForm(props) {
    const HandleUpCase = () => {
        // console.log("this button is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "warning");
    };
    const HandleOnChange = (event) => {
        // console.log("Onchange is fired");
        // let newText = text.toUpperCase();
        setText(event.target.value);
    };
    const toClear = () => {
        let text = " ";
        setText(text);
        props.showAlert("Text has been cleared", "primary");
    }
    const toLow = () => {
        let lower = text.toLowerCase();
        setText(lower);
        props.showAlert("converted to lower case", "secondary");
    }
    const copyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied", "danger");
    }
    const remove = () => {
        setText(text.trim().replace(/\s+/g, " "));
        props.showAlert("White space has been removed", "danger");
    }
    // const theme = () => {
    //     // document.body.style.backgroundColor = "#042743";
    //     if (setColor === "dark") {
    //         document.body.style.backgroundColor = "#042743"
    //     }else {
    //         document.body.style.backgroundColor = "White"
    //     }
    // }
    // const [color, setColor] = useState("dark");
    // const theme2 = () => {
    //     document.body.style.backgroundColor = "white";
    // }
    const [text, setText] = useState("Enter your text here");
    // text = "Homelander"; // wrong way to set text
    // setText("Homelander is great");

    return (
        <>
        <div className='container' style={{color: props.mode==="dark" ? "white": "#042743"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={HandleOnChange} id="myBox" style={{backgroundColor: props.mode==="dark" ? "grey": "white" , color: props.mode==="dark" ? "white": "#042743"}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={HandleUpCase}>Change to upperCase</button>
            <button className='btn btn-success mx-2' onClick={toLow}>To lowercase</button>
            <button className="btn btn-warning mx-2" onClick={toClear}>Clear</button>
            <button className="btn btn-secondary mx-2" onClick={copyText}>copy text</button>
            <button className="btn btn-info mx-2" onClick={remove}>Remove space</button>
            {/* <button className='btn btn-success mx-2' onClick={theme}>change theme</button> */}
            {/* <button className='btn btn-warning mx-2' onClick={theme2}>white</button> */}
        </div>
        <div className="container my-2" style={{color: props.mode==="dark" ? "white": "#042743"}}>
            <h2>your text here</h2>
            <p>{text.split(" ").length} words and {text.length} letters</p>
            <p>time to read {text.split(" ").length * 0.008} minutes</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"enter something to preview here"}</p>
        </div>
        </>
    )
}

// import React, {useState} from 'react'

// export default function TextForm(props) {
//     const [color, setColor] = useState("#042743");
//     const change = () => {
//         setColor(prev => (prev === "#042743" ? "blue" : "green"));
//     }

//     return (
//         <div>
//             <h1 style={{color: color }}>{props.heading}</h1>
//             <div className="mb-3">
//                 <textarea className="form-control" style={{color: color}} id="myBox" rows="8"></textarea>
//             </div>
//             <button className="btn btn-danger" onClick={change}>toUpperCase</button>
//         </div>
//     )
// }

// import React, {useState} from 'react'

// export default function TextForm(props) {
// const upper = () => {
//     let newText = text.toUpperCase();
//     setState(newText);
// }
//     const change = (evt) => {
//         // let newText = text.toUpperCase();
//         let newText = evt.target.value.toUpperCase();
//         // setState(newText);
//         // setState(evt.target.upper);
//         setState(newText);
//     };

//     const[text,setState] = useState("Input the Text");
//     return (
//         <div>
//             <h1>{props.heading}</h1>
//             <div className="mb-3">
//                 <textarea className="form-control" value={text} onChange={change} id="myBox" rows="8"></textarea>
//             </div>
//             <button className="btn btn-warning" >magic</button>
//         </div>
//     )
// }

// import React, {useState} from 'react'

// export default function TextForm(props) {
//     const[text, setText] = useState("blue");
//     const[color, setColor] = useState("#042743");

//     const colorChange = (evt) => {
//         let newStyle = evt.target.value;
//         setColor(newStyle);
//     }
//     const change = (evt) => {
//         let newColor = evt.target.value;
//         setText(newColor);
//     };
//     return (
//         <div>
//             <h1>{props.heading}</h1>
//             <div className="mb-3">
//                 <textarea className="form-control" value={text} onChange={change} style={{color: color}} id="myBox" rows="8"></textarea>
//             </div>

//             <div className='mb-3'>
//                 <label>select text color</label>
//                 <input type='color' value={color} onChange={colorChange}/>
//             </div>
//         </div>
//     )
// }
