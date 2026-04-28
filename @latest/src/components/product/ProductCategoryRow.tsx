type productCategoryRowProps =
{
    name : string
}

export function ProductCategoryRow({name} : productCategoryRowProps)
{
   return <tr>
    <td colSpan = {2}><strong>{name}</strong></td>
   </tr> 
}