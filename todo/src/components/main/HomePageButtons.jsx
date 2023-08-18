const HomePageButtons = ({ totalPages, changePage }) => {
    return Array(totalPages >= 10 ? 10 : totalPages).fill(0).map((el, i) =>
        <button onClick={() => changePage(i)} key={i}>{i + 1}</button>
    )
}
export default HomePageButtons;