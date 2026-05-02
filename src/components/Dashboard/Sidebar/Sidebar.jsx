import styles from './Sidebar.module.css'
function Sidebar() {

    const links = [
        {icon: "fa-chart-line", title: "Status"},
        {icon: "fa-users", title: "Users management"},
        {icon: "fa-building", title: "Projects management"},
        {icon: "fa-building", title: "Developers management"},
        {icon: "fa-globe", title: "CMS"},
        {icon: "fa-message", title: "Live chat"},
    ];

    return (
        <>
   <aside className={`${styles.sidebar} min-vh-100 py-4`}>
    <div>DASHBOARDS</div>
    <nav>
        {links.map((item, index) => ( 
             <div className="navItem" key={index}>
            <i className={`fa-solid ${item.icon}`}></i>
            <span className="title">{item.title}</span>
        </div>
        ))}
       
    </nav>
   </aside>
        </>
    )
}
export default Sidebar