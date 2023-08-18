const HomeTableData = ({ data, row }) => {
    return <tr>
        {row.map(({ value, type }) =>
            <td key={data.id + value}>
                {type === "checkbox" ?
                    <input type="checkbox"
                        readOnly checked={data.isCompleted} />
                    : data[value]}
            </td>
        )}
    </tr >
}
export default HomeTableData