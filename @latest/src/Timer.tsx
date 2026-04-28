import { useState, useEffect } from "react"

export function Timer()
{
    const [beginValue, setBeginValue] = useState(5)
    const [value, setValue] = useState(beginValue)

    const handleChange = (value : number) =>
    {
        setBeginValue(value)
        setValue(value)
    }

    useEffect (() => {
        const id = setTimeout(() => {
        setValue(prev => {
            if (prev <= 0.01)
            {
                clearTimeout(id)
                return 0
            }
            return (prev - 0.01)
        })
        }, 10)
        return () => {
            clearTimeout(id)
        }
    }, [value])

    const transformInput = (input: string) =>
    {
        const toInt = parseInt(input)
        if (Number.isNaN(toInt) || toInt == undefined || toInt < 0)
            return (0)
        return (toInt)
    }

    let strValue = value.toFixed(2)
    return  <>
     <input type="text" value={beginValue} onChange={(e) => handleChange(transformInput(e.target.value))} />
     <div style={{fontSize: "600px", border: "10px dotted red"}}>{strValue}</div>
    </>
}