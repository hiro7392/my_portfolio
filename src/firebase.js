import React, { useState } from "react"
import { pushMessage } from "../firebase"

const App = () => {
    const [name, setName] = useState("default")
    const [text, setText] = useState("text")
    return (
    <>
        <input
        type="text"
        value={name}
        onChange={(e) => setName((name) => (name = e.target.value))}
        />
        <input
        type="text"
        value={text}
        onChange={(e) => setText((text) => (text = e.target.value))}
        />
        <button onClick={() => pushMessage({ name: name, text: text })}>
        {" "}
        push{" "}
        </button>
    </>
    )
}

export default App