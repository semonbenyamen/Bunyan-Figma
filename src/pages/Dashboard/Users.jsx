import { Outlet } from "react-router-dom";
// import TableDashboard from "../../components/ui/TableDashboard/TableDashboard";

function Users() {
    return (
    <section className="py-4">
        {/* <TableDashboard title="User"/> */}
        <Outlet/>
    </section>
    );
}

export default Users;