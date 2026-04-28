type searchProps =
{
    onInput : (e : React.ChangeEvent<HTMLInputElement>) => void,
    onCheck : () => void
}

export function SearchBar({onInput, onCheck} : searchProps)
{
    return <form>
        <h2>Rechercher</h2>
        <input type="text" onChange={onInput}/><br/>
        <input type="checkbox" name="stocked" onChange={onCheck} />
        <label htmlFor="stocked" >N'afficher que les produits en stock</label>
    </form>
}