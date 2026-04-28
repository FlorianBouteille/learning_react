import { useState } from "react"
import { aspicotAppeared, Img, Squares, Pokemon, Accept } from "./Training"
import { Index } from "./Index"
import { Market } from "./Market"
import { Market2 } from "./Market2"
import { Use } from "./Use"
import { TicTacToe } from "./Tictactoe"
import { Timer } from "./Timer"

function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState('index')
  

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

  let pageContent = null

  console.log('render')
  switch (page)
  {
    case ('index'):
      pageContent = <p>Choisis une page dans le menu ci-dessus.</p>
      break
    case ('weedle'):
      pageContent = <>
          <Img />
          <button onClick={tryToCatchWeedle}>Throw Pokeball !</button>
          <p>Weedles caught : {count}</p>
          </>
      break
    case ('squares'):
      pageContent = <Squares />
      break
    case ('poke'):
      pageContent = <Pokemon />
      break
    case ('accept'):
      pageContent = <Accept />
      break
    case ('myMarket'):
      pageContent = <Market />
      break
    case ('cleanMarket'):
      pageContent = <Market2 />
      break
    case ('planets'):
      pageContent = <Use />
      break
    case ('tictactoe'):
      pageContent = <TicTacToe />
      break
    case ('timer'):
      pageContent = <Timer />
      break
    default:
      pageContent = <p>Page inconnue.</p>
  }

  return <>
          <Index page={page} switchPage={setPage}/>
          {pageContent}
        </>
}

export default App
