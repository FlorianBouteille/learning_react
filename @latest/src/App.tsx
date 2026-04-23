import { Fragment } from "react/jsx-runtime"
import { useState } from "react"
const grass = "/src/assets/grass.png" 
const aspicot = "/src/assets/aspicot.png"
let letsGo = true
const goals = [
  "Dejouer les plans de la team rocket",
  "Collecter tous les badges",
  "se faire des amis !",
  "defaire le conseil des quatre",
  "les attraper tous",
  "se la péter a la récré"
]

function App() {
  const title = "Try to catch the weedle !"
  const otherTitle = "Attrapez les tous !"
  const [count, setCount] = useState(0)
  
  console.log('render')

  const tryToCatchWeedle = () =>
  {
    const random = Math.random()
    random > 0.8 ? setCount(count + 1) : setCount(count) ;
  }

  return <Fragment>
          {letsGo ? <h1 id="title" style={{color : 'rgb(220, 41, 30)'}} >{title}</h1> : <h2>{otherTitle}</h2>}
          <Img />
          <button onClick={tryToCatchWeedle}>Throw Pokeball !</button>
          <p>Weedles caught : {count}</p>
          <ul>
            {goals.map(goal => (<li key={goal}>{goal}</li>))}
          </ul>
        </Fragment>
}

function Img()
{
  const alertWeedle = (e) =>
  {
    alert('A wild weedle appeared !')
    setImg(aspicot)
  }

  const props =
  {
    id : 'mainImg',
    className: 'pokeImg'
  }

  const [img, setImg] = useState(grass)

  return <img onClick={alertWeedle}
      src={img} {...props}></img>
}
export default App
