import styles from "./registration.module.css";
import { useState, useRef } from "react";

const Registration = ({match, imageUploader, bookBackEndAPI, user}) => {
    //add book form.
    const titleRef = useRef();
    const writerRef = useRef();
    const pubRef = useRef();
    const detailRef = useRef();
    const genreRef = useRef();
    const inputRef = useRef();
    const depositRef = useRef();
    const [viewImage, setViewImage] = useState("");
    const [saveImage, setSaveImage] = useState();
    
    const onFileChange = (event) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            setViewImage(event.target.result)
        }
        reader.readAsDataURL(event.target.files[0]);
        setSaveImage(event.target.files[0]);
    }

    const onImageClick = () => {
        inputRef.current.click();
    }
    
    const onAddBook = async (event) => {
        event.preventDefault();
        const uploaded = await imageUploader.upload(saveImage);

        const book = {
            title : titleRef.current.value || "",
            writer : writerRef.current.value || "",
            pub : pubRef.current.value || "",
            deposit: depositRef.current.value || "",
            detail : detailRef.current.value || "",
            genre : genreRef.current.value || "",
            img : uploaded.url,
            user_id: user
        }

        console.log(book);
        bookBackEndAPI.addBook(book)
        .then((response) => {
            console.log(response);
        })
    }

    return (
        <form className={styles.detail}>
            <div className={styles.container}>
                {viewImage ?
                    <div className={styles.fileBox} onClick={onImageClick}>
                        <img className={styles.image} src={viewImage} alt="사진"></img>
                        <input ref={inputRef} onChange={onFileChange} className={styles.file} type="file" accept="image/*" name="file" />
                    </div>
                    :
                    <div className={styles.fileBox} onClick={onImageClick}>
                        사진 넣어줘
                        <input ref={inputRef} onChange={onFileChange} className={styles.file} type="file" accept="image/*" name="file" />
                    </div>
                }
                
                <div className={styles.metadata}>
                    <h2 className={styles.inputTitle}>등록할 정보</h2>
                    <div className={styles.box}>
                        <select ref={genreRef} className={styles.select} name="genre" placeholder="카테고리">
                            <option value="fiction">Fiction</option>
                            <option value="nonfiction">Non fiction</option>
                            <option value="comic">Comic</option>
                        </select>
                        <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="제목"></input>
                        <input ref={writerRef} className={styles.input} type="text" name="writer" placeholder="지은이"></input>
                        <input ref={pubRef} className={styles.input} type="text" name="pub" placeholder="출판사"></input>
                        <input ref={depositRef} className={styles.input} type="number" name="deposit" placeholder="최소 보증금"></input>
                    </div>
                </div>
            </div>
            <textarea ref={detailRef} className={styles.textBox} name="detail" cols="30" rows="10" placeholder="상세설명"></textarea>
            <button className={styles.button} onClick={onAddBook}>등 록 하 기</button>
        </form>
    )
}

export default Registration;