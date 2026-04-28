type rangeProps = 
{
    value : string,
    label : string, 
    onChange : (val : string) => void
}

export function RangeInput({value, label, onChange} : rangeProps)
{
    return <div>
        <input  type="range" 
                id="rangeInput" 
                value={value} 
                min="0"
                max="122"
                onChange={(e) => onChange(e.target.value)}/>
        <label htmlFor="rangeInput" className="label">{label} : {value}</label>
    </div>
}