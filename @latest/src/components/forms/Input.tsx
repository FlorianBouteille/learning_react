type InputProps = 
{
    placeholder : string,
    value : string, 
    onChange : (s: string) => void
}

export function Input({placeholder, value, onChange} : InputProps)
{
    return <div>
        <input  type="text" 
                className="form-control"
                value = {value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)} 
                />
    </div>
}