import styles from "./detail.module.css";

const Detail = ({match}) => {
    const data = {
        "title": "드래곤 볼",
        "author": "지은이",
        "owner": "김영일",
        "images": "/images/book.png",
        "maker": "출판사",
        "deadline": "최대 대여 기간",
        "description": "설명ㅁㅇ 블라블라"
    }

    return (
        <form className={styles.detail}>
            <div className={styles.container}>
                <div className={styles.imageBox}>
                    <img className={styles.img} src={data.images} />
                </div>
                <div className={styles.metadatas}>
                    <h3 className={styles.metadata}>{data.owner}</h3>
                    <h3 className={styles.metadata}>{data.title}</h3>
                    <h3 className={styles.metadata}>{data.author}</h3>
                    <h3 className={styles.metadata}>{data.maker}</h3>
                    <h3 className={styles.metadata}>{data.deadline}</h3>
                </div>
            </div>
            <div className={styles.description}>{data.description}</div>
            <button className={styles.button} onClick={() => {}}>채팅하기</button>
        </form>
    )
}

export default Detail;