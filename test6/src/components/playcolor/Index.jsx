import { useState } from "react";
import BoxInput from "./BoxInput";

const PlayColor = () => {
    const [color, setColor] = useState("black")
    const onChangeColor = (e) => {
        setColor(e.target.value)
        setIsSelect(true)
    }
    const [width, setWidth] = useState(100)
    const onChangeWidth = (e) => setWidth(e.target.value)
    const [height, setHeight] = useState(100)
    const onChangeHeight = (e) => setHeight(e.target.value)
    const [isSelect, setIsSelect] = useState(false);

    return (<>
        <div style={{
            backgroundColor: color
            , width: `${width}px`
            , height: `${height}px`
        }} />
        <BoxInput onChange={onChangeColor}
            value={color} type={"color"} />
        {isSelect ? <>
            <BoxInput onChange={onChangeWidth}
                value={width} type={"number"} />
            <BoxInput onChange={onChangeHeight}
                value={height} type={"number"} />
        </> : null}

    </>)
}
export default PlayColor;