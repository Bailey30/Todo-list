import { useState } from "react";

const TodoList = () => {
    const [input, setInput] = useState([""]) ///input bar
    const [text, setText] = useState([])    //// text to go on list
    const [btnDisabled, setBtnDisabled] = useState(true)
    

    const changeHandler = (event) => {
        setInput(event.target.value)
        //text from input box is stored by the onchange event in the value "input"  
    }
    const btnChange = (event) => {
        //prevent item being add when text field empty
        setBtnDisabled(!event.target.value)
    }
    const addHandler = () => {
        
        //clicking the button pushes the value of input onto the text array then rerenders the list       
        const storedText = [...text]
        storedText.push(input)
        setText(storedText)
        setInput("")
        setBtnDisabled(true)
    }

    const removeHandler = (index) => {
        const storedText = [...text]
        storedText.splice(index, 1)
        setText(storedText)
    }
    const clearText = () => {
        //clear input field
        setInput("")
    }
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !btnDisabled) {
            addHandler()
            setInput("")
            console.log(event);

        }
        setBtnDisabled(true)
    })



    return (
        <div className="container">
            <h1>ToDo List</h1>
            {/* input box */}
            <div className="inputcont">
                <input className="input" placeholder="type here and press enter" type="text" value={input} onChange={e => { changeHandler(e); btnChange(e) }} />
                {/* clear button */}
                <button onClick={clearText} className="clearbtn"><div className="clear"></div></button>
                {/* add button  */}
                <button onClick={addHandler} className="add" disabled={btnDisabled}><div className="vert"></div><div className="plushori"></div></button>
            </div>

            {text.map((text, index) => {
                return (
                    <div className="itemcont">
                    <div className="item">
                        <h2 className="todo" key={index} >{text}</h2>
                        {/* remove button  */}
                        {text && <button onClick={() => removeHandler(index)} key={index} className="remove"><div className="hori"></div></button>}
                    </div>
                    </div>
                )
            })
            }
        </div >
    )
}

export default TodoList