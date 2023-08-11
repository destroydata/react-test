

const ColorInput = ({ onChangeColor }) => {
    console.log(onChangeColor)
    return <input
        type="color"
        onChange={onChangeColor}
    />
}

export default ColorInput