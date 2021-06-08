import styles from "./navbar.module.css"

const Navbar = () => {
    return(
        <navbar className={styles.navbar}>
            <div>
                <img className={styles.img} src="" />
                <i className={styles.title}>이웃집 도서관</i>
            </div>
            <div>
                <ul className={styles.navbarLists}>
                    <li className={styles.navbarButton}>내 주변 서재</li>
                    <li className={styles.navbarButton}>My page</li>
                </ul>
            </div>
        
        </navbar>
    )
}

export default Navbar