import { Fragment } from "react/jsx-runtime"
import { useState } from "react"
import { Products} from "./Products";
import { SearchBar } from "./SearchBar"

export const FORSALE = 
[
    {category : "Weird", price: "$12", stocked:true, name:"Goblin Fart"},
    {category : "Sci-Fi", price: "$122", stocked:false, name:"Light Saber"},
    {category : "Weird", price: "$5", stocked:false, name:"Slime"},
    {category : "Weird", price: "$45", stocked:true, name:"Pataprout"},
    {category : "Sci-Fi", price: "$13", stocked:true, name:"Proton Grenade"},
    {category : "Weird", price: "$48", stocked:false, name:"Vacum Dirtier"},
    {category : "Sci-Fi", price: "$100", stocked:true, name:"Portal gun"},
    {category : "Weird", price: "$3", stocked:true, name:"Cloud shaper"},
]

export function Market()
{
    const [input, setInput] = useState("")
    const [checked, setChecked] = useState(false)

    const getInput = (e : React.ChangeEvent<HTMLInputElement>) =>
    {
        setInput(e.target.value)
    }

    const toggleChecked = () =>
    {
        setChecked(!checked)
    }

    return <>
        <SearchBar onInput={getInput} onCheck={toggleChecked} />
        <Products searched={input} stocked={checked} />
    </>
}