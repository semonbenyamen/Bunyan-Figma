import { Routes, Route } from "react-router-dom";
import Footer from "../../components/Dashboard/Footer/Footer.jsx";
import Navbar from "../../components/Dashboard/Navbr/Navbar.jsx";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar.jsx";
import HomeDashboard from "./HomeDashboard.jsx";
import Users from "./Users.jsx";
import Projects from "./Projects.jsx";


function Dashboard() {
    return(
        <>
        <Navbar adminName="Semon"/>
        <div className="d-flex">
            <Sidebar/>
            <main className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<HomeDashboard/>} />
                    <Route path="/users" element={<Users/>} />
                    <Route path="/projects" element={<Projects/>} />
                </Routes>
            </main>
        </div>
        <Footer />
        </>
    );
}

export default Dashboard;