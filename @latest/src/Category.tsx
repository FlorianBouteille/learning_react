type Product = 
{
    category : string,
    price : string, 
    stocked : boolean, 
    name : string
}

type CategoryProps = {
    categoryName : string,
    products: Product[] 
}

export function Category({categoryName, products} : CategoryProps)
{
    const filtered = products.filter((product) => product.category == categoryName)
    return <>
        <h3>{categoryName}</h3>
        <h4>Product                       Price</h4>
        <ul>
            {filtered.map((product) => 
                <li key={product.name} style={{color : product.stocked ? "black" : "red"}} >{product.name}       {product.price}</li>)}
        </ul>
    </>
}