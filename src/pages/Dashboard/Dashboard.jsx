import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Footer from "../../components/Dashboard/Footer/Footer.jsx";
import Navbar from "../../components/Dashboard/Navbr/Navbar.jsx";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar.jsx";
import HomeDashboard from "./HomeDashboard.jsx";
import Users from "./Users.jsx";
import Projects from "./Projects.jsx";
import TableDashboard from "../../components/ui/TableDashboard/TableDashboard.jsx";
import FormDashboard from "../../components/ui/CardStatus/FormDashboard/FormDashboard.jsx";
import Developers from "./Developers.jsx";


function Dashboard() {
    
    const [drafts, setDrafts] = useState({
        users: false,
        projects: false,
        developers: false
    });

    const handleDraftChange = (type, value) => {
        setDrafts(prev => ({
            ...prev,
            [type]: value
        }));
    };
    

    return(
        <>
        <Navbar adminName="Semon"/>
        <div className="d-flex">
            <Sidebar drafts={drafts}/>
            <main className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<HomeDashboard/>} />

                    <Route path="/users" element={<Users/>}>
                    {/* first child */}
                    <Route index element={<TableDashboard title="User"/>}/>
                    {/* second child */}
                    
                    {/* Pass draft state updater to Add User form */}
                    <Route path="add" element={<FormDashboard setIsDraft={(value) => handleDraftChange ("users", value)}/>}/>
                    </Route>


                    <Route path="/projects" element={<Projects/>} >
                    <Route index element={<TableDashboard title="Project"/>}
                    />
                    <Route path="add" element={<FormDashboard setIsDraft={(value) => handleDraftChange ("projects", value)}/>}
                    />
                    </Route>

                    <Route path="/developers" element={<Developers/>}>
                    <Route index element={<TableDashboard title="Developer"/>}/>

                    <Route path="add" element={<FormDashboard setIsDraft={(value) => handleDraftChange ("developers", value)}/>}/>

                    
                    </Route>
                </Routes>
            </main>
        </div>
        <Footer />
        </>
    );
}

export default Dashboard;