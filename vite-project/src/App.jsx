import { useState } from 'react'
import './App.css'


function App() {
  // const [rate, setRate] = useState(0)
  // const [textArea, setTextArea] = useState("")

  const [todo, setTodo] = useState("")
  const [list, setList] = useState([])

  // const check = () => {
  //   if (rate <= 2 && textArea == "") {
  //     alert("cant")
  //   } else {
  //     alert("thank you")
  //     console.log("thank you ")

  //   }
  // }


  const Mylist = () => {
    setList([...list, todo])
  }

  return (
    <>
      {/* <input type="range" max="5" min="1" value={rate} onChange={(e) => setRate(e.target.value)} />
      <br></br>
      <textArea value={textArea} onChange={(e) => setTextArea(e.target.value)}>

      </textArea>
      <br></br>
      <button onClick={check}>submit</button> */}

      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <br></br>
      <button onClick={Mylist}> Add</button>
      <ul>
        {list.map((item, key) => (
          <li key={item}> {item} </li>
        )
        )}

      </ul>
    </>
  )
}

export default App
