type checkProps =
{
    checked: boolean,
    onCheck : (check: boolean) => void,
    label : string,
    id: string
}

export function Checkbox({checked, onCheck, label, id} : checkProps)
{
    return <div className="form-check">
        <input  type="checkbox" 
                className="form-check-input" 
                checked={checked}
                onChange={(e) => onCheck(e.target.checked)}
                id={id}  />
        <label  htmlFor={id} className="form-check-label">{label}</label>
    </div>
}