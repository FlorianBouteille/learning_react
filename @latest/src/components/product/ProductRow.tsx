type Product =
{
    name : string,
    category :string, 
    stocked : boolean, 
    price : string
}

export function ProductRow({product} : {product : Product})
{   
    const style = product.stocked ? undefined : {color : "red"}
    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}