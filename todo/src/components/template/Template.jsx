import { Outlet } from "react-router";
import MyHeader from "./MyHeader";

const Template = ({ me, setMe }) => {
    return <div>
        <MyHeader me={me} setMe={setMe}></MyHeader>
        <Outlet></Outlet>
    </div>
}

export default Template;