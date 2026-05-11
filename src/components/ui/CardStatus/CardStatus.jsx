import styles from "./cardStatus.module.css";

function cardStatus ({counter, title, icon}) {
    return (
        <>
            {/* Parent Card */}
        <div className={`${styles.cardStatus} d-flex align-items-center`}>
            {/* Icon Parent */}
            <div className={`${styles.icon} d-flex align-items-center justify-content-center  w-100`}>
                {/* Change here for icon */}
            <i class={icon}></i>
            </div>
            {/* Info */}
            <div className={`${styles.info} w-100 d-flex flex-column align-items-md-center gap-2`}>
            <span className={styles.counter}>{counter}</span>
            <span className={styles.title}>{title}</span>
            </div>
        </div>
        </>
    )
}

export default cardStatus;