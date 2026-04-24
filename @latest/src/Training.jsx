import { Fragment } from "react/jsx-runtime"
import { useState } from "react"

export let aspicotAppeared = false
export let letsGo = true

export const goals = [
  "Dejouer les plans de la team rocket",
  "Collecter tous les badges",
  "se faire des amis !",
  "defaire le conseil des quatre",
  "les attraper tous",
  "se la péter a la récré"
]

export function Square({green, children})
{
  const red = 255 - green
  const blue = Math.floor(Math.random() * 30) + 80
  const color = 'rgb(' + red + ', ' + green + ', ' + blue + ')'
  const textcolor = 'rgb(' + green + ', ' + red + ', ' + 200 + ')'
  
  return <div className="square" key={green} style={{background : color, color: textcolor}}>{children}</div>
}

export function Goals()
{
  return <ul>
    {goals.map(goal => (<li key={goal}>{goal}</li>))}
  </ul>
}

export function Squares()
{
  const anOtherNumber = () =>
  {
    randomize(Math.floor(Math.random() * 255))
  }
  const [rand, randomize] = useState(Math.floor(Math.random() * 255))
  const list = []
  for (let i = 0; i < rand; i++)
  {
    list.push(<Square key={i} green={i}>i</Square>)
  }
  return <>
          <div onClick={anOtherNumber} className="rand">random Number = {rand}</div>
          <div className="squares">
            {list.map(square => (<Square key={square.key} green={square.key}>{square.key}</Square>))}
          </div>
        </>  
}

export function Pokemon()
{
  const [pokemon, setPokemon] = useState({name:"Pikachu",
                                          type: "electric",
                                          xp : 0,
                                          level: 0
                                })
  const gainXp = () =>
  {
    const newXp = pokemon.xp + Math.floor(Math.random() * 30)
    setPokemon({...pokemon, xp: newXp, level: Math.floor(newXp / 100)})
  }

  const xpToNext = (pokemon.level + 1) * 100 - pokemon.xp
  return <div>
    <h3>{pokemon.name}</h3>
    <h4>{pokemon.type}</h4>
    <p>I am level {pokemon.level}, {xpToNext} xp to go !</p>
    <button onClick={gainXp}>Fight some other Pokemon ! </button>
  </div>
}

export function Box({id, onCheck})
{
  const checked = Math.random() < 0.4 ? true : false 
  return <input type="checkbox" onChange={(e) => onCheck(e.target.checked)} checked={checked} className={id} key={id} />
}

export function Boxes({amount})
{
  let boxes = []
  const [valid, setValid] = useState(0)

  const handleChange = (e) =>
  {
    e.preventDefault()
    setValid(valid + 1)
  }

  for (let i = 0; i < parseInt(amount); i++)
  {
    boxes.push(<Box id={i} onCheck={setValid}/>)
  }
  return <form>
      {boxes}
      <button disabled={valid < 8} onClick={handleChange}>Valider</button>
    </form>
}

export function Form()
{
  const [name, setName] = useState('Mireille')
  const [checked, setChecked] = useState(true)
  let coded = ""
  const handleChange = (e) =>
  {
    setName(e.target.value)
  }

  const toggleCheck = () =>
  {
    setChecked(!checked)
  }

  for (let i = 0; i < name.length; i++)
  {
    if (!checked)
      coded += i * name[i].charCodeAt(0) + 1 + '---'
    else
      coded += name[i]
  }

  return <>
          <form>
            <input type="text" name="Name is your what ?" value={name} onChange={handleChange}/>
            <input type="checkbox" checked={checked} onChange={toggleCheck} />
          </form>
          <p>your coded name : {coded}</p>
        </>

}

export function Accept()
{
  const [accepted, setAccepted] = useState(false)
  return <form>
    <CheckBox checked={accepted} onCheck={setAccepted}/>
    <button disabled={!accepted} type="button">Lets go to the show together</button>
  </form>
}

export function CheckBox({checked, onCheck})
{
  return <input type="checkbox" onChange={(e) => onCheck(e.target.checked)} checked={checked} />
}

export function Img()
{
  const grass = "/src/assets/grass.png" 
  const aspicot = "/src/assets/aspicot.png"
  const alertWeedle = () =>
  {
    if (aspicotAppeared)
      return ;
    alert('A wild weedle appeared !')
    aspicotAppeared = true
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
