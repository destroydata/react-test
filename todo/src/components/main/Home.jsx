import { useEffect, useState } from "react";
import { api } from "../../network/api";
import Loading from "../tools/Loading";
import Toast from "../tools/Toast";
import HomePageButtons from "./HomePageButtons";
import HomeSizeSelect from "./HomeSizeSelect";
import HomeTable from "./HomeTable";
import { useDispatch, useSelector } from 'react-redux'
import { getAllThunk, setAll } from "../../feature/all/allSlice";
const Home = () => {
    const dispatch = useDispatch()

    const size = useSelector(state => state.all.size)
    const page = useSelector(state => state.all.page)
    const error = useSelector(state => state.all.error)
    const status = useSelector(state => state.all.status)
    const getAll = async () => {
        dispatch(getAllThunk())
    }

    useEffect(() => {
        getAll();
    }, [page, size])

    return <div>
        {status === 'loading' && <Loading />}
        {status === 'failed' && <Toast message={error} />}
        {status === 'succeeded' && <HomeTable />}
        <div style={{ display: "flex" }}>
            <HomePageButtons />
            <HomeSizeSelect />
        </div>
    </div>
}

export default Home;