import styles from "./main_page.module.css"
import Book from "../book/book";
import Search from "../search/search";

const MainPage = ({data}) => {
    return(
        <>
        <Search />
        <div className={styles.lists}>
            {data.map((book,index) => {
                return <Book key={index} id={index} book={book}/>
            })}
        </div>
        </>
    )
}

export default MainPage;