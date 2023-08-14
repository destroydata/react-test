import { Outlet } from "react-router";
import MyHeader from "./MyHeader";

const Template = () => {
    return <>
        <MyHeader></MyHeader>
        <Outlet></Outlet>
    </>
}

export default Template;