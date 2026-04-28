import { Category } from "./Category"
import { FORSALE } from "./Market"

type ProductsProps =
{
    searched : string, 
    stocked : boolean
}

export function Products({searched, stocked} : ProductsProps)
{
    const filtered = FORSALE.filter((product) => 
        product.name.toLowerCase().includes(searched) &&
        (stocked ? product.stocked : true )
    )
    const categories = [...new Set(FORSALE.map(p => p.category))]
    console.log(categories)
    return <ul>
        {categories.map((category) => 
        <Category categoryName={category} key={category} products={filtered} />)}
    </ul>
}