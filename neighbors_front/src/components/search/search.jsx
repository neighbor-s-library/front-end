import styles from "./search.module.css";
import { useRef } from "react";

const Search = () => {
  const searchRef = useRef();

  //해야할 일
  //REST API get 메소드를 통해 밸류값에 해당하는 json형태를 request.
  const onSubmit = (event) => {
    const searchBook = {
      title : searchRef.current.value || ""
    }
    event.preventDefault(); //리랜더링 방지
    searchRef.current.value = ""; //검색 후 텍스트 초기화
    console.log(searchBook); //json 통신을 위한 객채 밸류 값
  }

  return (
    <div className={styles.search}>
      <form className={styles.form}>
        <input ref={searchRef} className={styles.input} type="text" placeholder="검색"/>
        <button className={styles.button}  type="submit" onClick={onSubmit}>검색</button>
      </form>
    </div>
  )
}

export default Search;