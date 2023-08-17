const HomeTableData = ({ data, row }) => {
    return <tr>
        {row.map(({ value, type }) =>
            type === "checkbox" ? <td>
                <input type="checkbox"
                    readOnly checked={data.isCompleted} />
            </td>
                : <td>{data[value]}</td>
        )}
    </tr >
}
export default HomeTableData