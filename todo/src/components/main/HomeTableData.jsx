const HomeTableData = ({ data }) => {
    return <tr key={data.id}>
        <td>{data.content}</td>
        <td>{data.user.name}</td>
        <td><input type="checkbox"
            readOnly checked={data.isCompleted} /></td>
    </tr>
}
export default HomeTableData