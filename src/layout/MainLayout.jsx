import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

const MainLayout = () => {
    return (
        <div className="flex ">
            <div >
                <Sidebar />
            </div>
            <div className="w-full">
                <div className="">
                    <Navbar />
                </div>
                <div className="max-w-7xl p-2 mx-auto">

                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainLayout