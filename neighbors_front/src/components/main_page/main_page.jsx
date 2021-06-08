import styles from "./main_page.module.css"
import Book from "../book/book";

const MainPage = ({data}) => {
    console.log(data);
    return(
        <div className={styles.lists}>
            {data.map((book,index) => {
                return <Book key={index} book={book}/>
            })}
        </div>
    )
}

export default MainPage;