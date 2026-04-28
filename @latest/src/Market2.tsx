import { useState } from "react";
import { Checkbox } from "./components/forms/Checkbox";
import { Input } from "./components/forms/Input";
import { ProductCategoryRow } from "./components/product/ProductCategoryRow";
import { ProductRow } from "./components/product/ProductRow";
import { RangeInput } from "./components/forms/RangeInput";

export const FORSALE = 
[
    {category : "Weird", price: "$12", stocked:true, name:"Goblin Fart"},
    {category : "Weird", price: "$3", stocked:true, name:"Cloud shaper"}, 
    {category : "Weird", price: "$5", stocked:false, name:"Slime"},
    {category : "Weird", price: "$45", stocked:true, name:"Pataprout"},
    {category : "Weird", price: "$48", stocked:false, name:"Vacum Dirtier"},
    {category : "Sci-Fi", price: "$100", stocked:true, name:"Portal gun"},
    {category : "Sci-Fi", price: "$122", stocked:false, name:"Light Saber"},
    {category : "Sci-Fi", price: "$13", stocked:true, name:"Proton Grenade"},
]

type Product = 
{
    name: string, 
    price: string,
    stocked: boolean, 
    category : string
}

type showStockOnlyProps = 
{
    showStockOnly : boolean,
    onCheck : (e : boolean) => void
    searchVal : string, 
    onChange : (e : string) => void,
    maxPrice : string,
    onChangeInput : (e : string) => void
}

export function Market2()
{
    const [showStockOnly, setShowStockOnly] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [maxPrice, setMaxPrice] = useState("122")
    const visibleProducts = FORSALE.filter((product) => {
        if (showStockOnly && !product.stocked)
            return false
        if (inputValue && !product.name.includes(inputValue))
            return false
        if (parseInt(product.price.substring(1)) > parseInt(maxPrice))
            return false
        return true
    })

    return <div className="container my-3">
        <SearchBar2 showStockOnly={showStockOnly} onCheck={setShowStockOnly} searchVal={inputValue} onChange={setInputValue} maxPrice={maxPrice} onChangeInput={setMaxPrice}/>
        <ProductTable products={visibleProducts} />
    </div>
}
function ProductTable({products} : {products : Product[]})
{
    const rows = []
    let lastCategory = null

    for (let product of products)
    {
        if (product.category != lastCategory)
            rows.push(<ProductCategoryRow key={product.category} name={product.category}/>)
        lastCategory = product.category
        rows.push(<ProductRow key={product.name} product={product}/>)
    }

    return <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}
function SearchBar2({showStockOnly, onCheck, searchVal, onChange, maxPrice, onChangeInput} : showStockOnlyProps)
{
    console.log(maxPrice)
    return <div>
        <div className="mb-3">
            <Input value={searchVal} onChange={onChange} placeholder="Rechercher"/>
            <Checkbox id="stocked" checked={showStockOnly} onCheck={onCheck} label="N'afficher que les produits en stock"/>
            <RangeInput value={maxPrice} onChange={onChangeInput} label="prix maximum"/>
        </div>
    </div>
}