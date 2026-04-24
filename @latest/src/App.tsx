import { Fragment } from "react/jsx-runtime"
import { useState } from "react"
import { aspicotAppeared, letsGo, Img, Squares, Form, Pokemon, Accept, Boxes } from "./Training"
import { FORSALE, Market } from "./Market"

function App() {
  const title = "Try to catch the weedle !"
  const otherTitle = "Attrapez les tous !"
  const [count, setCount] = useState(0)
  
  console.log('render')

  const tryToCatchWeedle = () =>
  {
    if (!aspicotAppeared)
    {
      alert("Nothing to catch here... Maybe look in the grass ?")
      return 
    }
    const random = Math.random()
    random > 0.8 ? setCount(count + 1) : setCount(count) ;
  }


  return <Fragment>
          {/* {letsGo ? <h1 id="title" style={{color : 'rgb(220, 41, 30)'}} >{title}</h1> : <h2>{otherTitle}</h2>}
          <Img />
          <button onClick={tryToCatchWeedle}>Throw Pokeball !</button>
          <p>Weedles caught : {count}</p>
          <Squares />
          <Form />
          <Pokemon />
          <Accept /> */}
          <Market />
        </Fragment>
}

export default App
