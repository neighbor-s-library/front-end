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
            <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.container}>
                    <img className={styles.img} src={data.images} />
                <div className={styles.metadatas}>
                    <h3 className={styles.metadata}>{data.owner}</h3>
                    <h3 className={styles.metadata}>{data.author}</h3>
                    <h3 className={styles.metadata}>{data.maker}</h3>
                    <h3 className={styles.metadata}>{data.deadline}</h3>
                    <button className={styles.button} onClick={() => {}}>채팅하기</button>
                </div>
            </div>
            <hr className={styles.middleLine}/>
            <h2 className={styles.descriptionTitle}>상세 설명</h2>
            <div className={styles.description}>{data.description}</div>
        </form>
    )
}

export default Detail;