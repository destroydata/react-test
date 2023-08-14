import { Outlet } from "react-router";
import MyFooter from "./MyFooter";
import MyHeaders from "./MyHeaders";

const Template = () => {
    return <div className="App-header">
        <MyHeaders></MyHeaders>
        <Outlet></Outlet>
        <MyFooter></MyFooter>
    </div>
}
export default Template;