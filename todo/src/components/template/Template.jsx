import { Outlet } from "react-router";
import MyHeader from "./MyHeader";

const Template = () => {
    return <div>
        <MyHeader></MyHeader>
        <Outlet></Outlet>
    </div>
}

export default Template;