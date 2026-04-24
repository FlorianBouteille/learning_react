import { Fragment } from "react/jsx-runtime"
import { useState } from "react"

export const FORSALE = 
[
    {category : "Weird", price: "$12", stocked:true, name:"Goblin Fart"},
    {category : "Sci-Fi", price: "$122", stocked:false, name:"Light Saber"},
    {category : "Weird", price: "$5", stocked:false, name:"Slime"},
    {category : "Weird", price: "$45", stocked:true, name:"Pataprout"},
    {category : "Sci-Fi", price: "$13", stocked:true, name:"Proton Grenade"},
    {category : "Weird", price: "$48", stocked:false, name:"Vacum Dirtier"},
    {category : "Sci-fi", price: "$100", stocked:true, name:"Portal gun"},
    {category : "Weird", price: "$3", stocked:true, name:"Cloud shaper"},
]

export function Market()
{
    return <>
        <SearchBar />
        <Products />
    </>
}
function Products()
{
    return <ul>
        {FORSALE.map((product) => <li key={product.name}>{product.name}</li>)}
    </ul>
}
function SearchBar()
{
    return <form>
        <h2>Rechercher</h2>
        <input type="text" /><br/>
        <input type="checkbox" name="stocked"/>
        <label htmlFor="stocked">N'afficher que les produits en stock</label>
    </form>
}