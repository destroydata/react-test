import { useEffect, useState } from "react";
import { api } from "../../network/api";
import Loading from "../tools/Loading";
import Toast from "../tools/Toast";
import HomePageButtons from "./HomePageButtons";
import HomeSizeSelect from "./HomeSizeSelect";
import HomeTable from "./HomeTable";

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
    }, [page, size])
    const changePage = (i) => {
        setPage(i)
    }
    const changeSize = (e) => {
        setSize(e.target.value)
        setPage(0)
    }
    return <div>
        {loading && <Loading />}
        {message && <Toast message={message} />}
        {(loading || message) || <HomeTable all={all} />}
        <div style={{ display: "flex" }}>
            <HomePageButtons
                totalPages={totalPages}
                changePage={changePage} />
            <HomeSizeSelect
                changeSize={changeSize}
                size={size} />
        </div>
    </div>
}

export default Home;