import { useSelector } from "react-redux"
import HomeTableData from "./HomeTableData"

const HomeTable = () => {
    const { all } = useSelector((state) => state.all)
    const row = [
        { name: "content", value: "content" },
        { name: "name", value: "userName" },
        { name: "check", value: "isCompleted", type: "checkbox" },
    ]
    return <table>
        <thead>
            <tr>
                {row.map(({ name }) => <th key={name}>{name}</th>)}
            </tr>
        </thead>
        <tbody>
            {all.map(data =>
                <HomeTableData data={data} key={data.id} row={row} />
            )}
        </tbody>
    </table>
}
export default HomeTable