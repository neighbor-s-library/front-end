import styles from "./registration.module.css";

const Registration = ({match}) => {
    return (
        <form className={styles.detail}>
            <div className={styles.container}>
                <div className={styles.fileBox}>
                    <input className={styles.file} type="file" />
                </div>
                <div className={styles.metadata}>
                    <input className={styles.input} type="text" placeholder="도서 등록자 이름"></input>
                    <input className={styles.input} type="text" placeholder="제목 예시1"></input>
                    <input className={styles.input} type="text" placeholder="지은이: xxx"></input>
                    <input className={styles.input} type="text" placeholder="출판사: xxx"></input>
                    <input className={styles.input} type="text" placeholder="대여 기간"></input>
                </div>
            </div>
            <textarea className={styles.textBox} name="" id="" cols="30" rows="10" placeholder="상세설명"></textarea>
            <button className={styles.button} onClick={() => {}}>등록</button>
        </form>
    )
}

export default Registration;