import { Outlet } from "react-router";
import TopMenu from "./components/topmenu";

export default function RootLayout(){
    return (
        <div>
            <TopMenu/>
            <Outlet/>
        </div>
    )
}