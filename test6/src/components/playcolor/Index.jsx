import { useState } from "react";
import ColorInput from "./ColorInput";
import BoxInput from "./BoxInput";

const PlayColor = () => {
    const [color, setColor] = useState("black")
    const onChangeColor = (e) => setColor(e.target.value)
    const [width, setWidth] = useState(100)
    const onChangeWidth = (e) => setWidth(e.target.value)
    const [height, setHeight] = useState(100)
    const onChangeHeight = (e) => setHeight(e.target.value)
    return (<>
        <div style={{
            backgroundColor: color
            , width: `${width}px`
            , height: `${height}px`
        }} />
        {/* <ColorInput onChangeColor={onChangeColor} /> */}
        <BoxInput onChange={onChangeColor}
            value={color} type={"color"} />
        <BoxInput onChange={onChangeWidth}
            value={width} type={"number"} />
        <BoxInput onChange={onChangeHeight}
            value={height} type={"number"} />
    </>)
}
export default PlayColor;