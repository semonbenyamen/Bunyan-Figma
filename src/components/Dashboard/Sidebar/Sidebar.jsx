import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css'

// Receiving props
function Sidebar() {

    const links = [
        {icon: "fa-chart-line", title: "Status", path: "/"},
        {icon: "fa-users", title: "Users management", path: "users"},
        {icon: "fa-building", title: "Projects management", path: "/projects"},
        {icon: "fa-building", title: "Developers management"},
        {icon: "fa-globe", title: "CMS"},
        {icon: "fa-message", title: "Live chat"},
    ];

    return (
        <aside className={`min-vh-100 py-4 ${styles.sidebar} `}>
        <div className="fw-semibold px-3 fs-4 mb-2">DASHBOARDS</div>
        <nav>
            {links.map((item, index) => ( 
                <NavLink
                to={item.path}
                className={`${styles.navItem} d-flex align-items-center gap-3`} key={index}>
                <i className={`fa-solid ${item.icon} fs-5`}></i>
                <span className="fs-5">{item.title}</span>
                </NavLink>
                ))}
       
        </nav>
        </aside>

    )
}
export default Sidebar