import styles from "./detail.module.css";
import { useState, useEffect } from "react";

const Detail = ({match, bookBackEndAPI}) => {
    const [bookDetail, setBookDetail] = useState({});
    
    const loadBookDetatil = () => {
        bookBackEndAPI.bookDetail(match.params.id)
        .then((response) => {
            const data = response.data.item;
            setBookDetail(data);
        })
    };

    useEffect(() => {
        loadBookDetatil();
    },[]);
    return (
        <form className={styles.detail}>
            <h1 className={styles.title}>{bookDetail.title}</h1>
            <div className={styles.container}>
                    <img className={styles.img} src={bookDetail.img} />
                <div className={styles.metadatas}>
                    <h3 className={styles.metadata}>{bookDetail.nickname}</h3>
                    <h3 className={styles.metadata}>{bookDetail.writer}</h3>
                    <h3 className={styles.metadata}>{bookDetail.pub}</h3>
                    <h3 className={styles.metadata}>{bookDetail.created_at}</h3>
                    <button className={styles.button} onClick={() => {}}>채팅하기</button>
                </div>
            </div>
            <hr className={styles.middleLine}/>
            <h2 className={styles.descriptionTitle}>상세 설명</h2>
            <div className={styles.description}>{bookDetail.detail}</div>
        </form>
    )
}

export default Detail;