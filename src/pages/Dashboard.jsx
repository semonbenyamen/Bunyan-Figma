import Footer from "../components/Dashboard/Footer/Footer.jsx";
import Navbar from "../components/Dashboard/Navbr/Navbar.jsx";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar.jsx";

function Dashboard() {
    return(
        <>
        <Navbar adminName="Semon"/>
        <div className="d-flex">
            <Sidebar/>
            <main className="flex-grow-1">
                <h1>Test Dashboard</h1>
            </main>
        </div>
        <Footer />
        </>
    );
}

export default Dashboard;