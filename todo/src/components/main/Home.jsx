import { useEffect, useState } from "react";
import { api } from "../../network/api";
import Loading from "../tools/Loading";
import Toast from "../tools/Toast";

const Home = () => {
    const [all, setAll] = useState([]);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const getAll = async () => {
        setMessage("")
        setLoading(true)
        try {
            const data = await api("/api/v1/todos", "GET")
            setLoading(false)
            setMessage('error.response.data')
            setAll(data.content)
        } catch (error) {
            setMessage(error.response.data)
        }
    }
    useEffect(() => {
        getAll();
    }, [])
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
                {all.map(data => <tr>
                    <td>{data.content}</td>
                    <td>{data.user.name}</td>
                    <td><input type="checkbox" readOnly checked={data.isCompleted} /></td>
                </tr>)}
            </tbody>
        </table>}
    </div>
}

export default Home;