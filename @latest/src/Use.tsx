import { Checkbox } from "./components/forms/Checkbox"
import { Input } from "./components/forms/Input"
import { useEffect, useState } from "react"

export function Use()
{
    const [planet, setPlanet] = useState('')
    const [depth, setDepth] = useState(0)
    const [depthActive, setDepthActive] = useState(false)
    let srcImg = null

    useEffect(() => {
        document.title = planet
    }, [planet])

    useEffect(() => {
        if (!depthActive)
            return
        const handler = () =>
        {
            console.log('going deeper')
            setDepth(window.scrollY)
        }
        window.addEventListener('scroll', handler)
        return () => {
            window.removeEventListener('scroll', handler)
        }
                
    }, [depthActive])

    switch (planet)
    {
        case ('pluton'):
            srcImg = "/src/assets/pluto.png"
            break
        case ('mars'):
            srcImg = "/src/assets/mars.png"
            break
        case ('neptune'):
            srcImg = "/src/assets/neptune.png"
            break
        case ('saturne'):
            srcImg = "/src/assets/saturn.png"
            break
        default:
            srcImg = "/src/assets/what.png"
            break
    }
    return <>
        <Input placeholder="quelle planete ?" onChange={setPlanet} value={planet}/>
        <img src={srcImg} style={{width: "30%"}} alt="nope" />
        <Checkbox checked={depthActive} label="godeeper" id="depth" onCheck={() => setDepthActive(!depthActive)}/>
        {depthActive && <div className="depth">Depth = {depth}</div>}
        <div style={{height : '300vh'}}></div>
    </>
}