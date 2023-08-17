import { useEffect, useState } from "react";
import { api } from "../../network/api";
import Loading from "../tools/Loading";
import Toast from "../tools/Toast";

const Home = () => {
    const [all, setAll] = useState([]);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [totalPages, setTotalPages] = useState(0);
    const getAll = async () => {
        setMessage("")
        setLoading(true)
        try {
            const data = await api(`/api/v1/todos` +
                `?page=${page}&size=${size}`, "GET")
            setLoading(false)
            setAll(data.content)
            setTotalPages(data.totalPages)
        } catch (error) {
            setMessage(error.response.data)
        }
    }
    useEffect(() => {
        getAll();
    }, [page])
    const changePage = (i) => {
        setPage(i)
    }
    return <div>
        {loading && <Loading />}
        {message && <Toast message={message} />}
        {(loading || message) || <table>
            <thead>
                <th>content</th>
                <th>name</th>
                <th>check</th>
            </thead>
            <tbody>
                {all.map(data => <tr key={data.id}>
                    <td>{data.content}</td>
                    <td>{data.user.name}</td>
                    <td><input type="checkbox" readOnly checked={data.isCompleted} /></td>
                </tr>)}
            </tbody>
        </table>}
        <div style={{ display: "flex" }}>
            {Array(totalPages).fill(0).map((el, i) =>
                <button onClick={() => changePage(i)}>{i + 1}</button>
            )}
        </div>
    </div>
}

export default Home;