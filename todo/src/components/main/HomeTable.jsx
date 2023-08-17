import HomeTableData from "./HomeTableData"

const HomeTable = ({ all }) => {
    return <table>
        <thead>
            <tr>
                <th>content</th>
                <th>name</th>
                <th>check</th>
            </tr>
        </thead>
        <tbody>
            {all.map(data =>
                <HomeTableData data={data} key={data.id} />
            )}
        </tbody>
    </table>
}
export default HomeTable