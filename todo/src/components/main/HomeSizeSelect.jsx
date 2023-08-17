const HomeSizeSelect = ({ size, changeSize }) => {
    return <select value={size} onChange={changeSize}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
    </select>
}
export default HomeSizeSelect