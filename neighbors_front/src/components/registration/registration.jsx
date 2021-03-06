import styles from "./registration.module.css";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

const Registration = ({match, imageUploader, bookBackEndAPI, user}) => {
    const history = useHistory();
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
        const config = {
            headers: {
                Token: window.localStorage.getItem(user)
            }
        }

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

        bookBackEndAPI.addBook(book,config)
        .then((response) => {
            history.push(`/detail/${response.data.id}`)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <form className={styles.detail}>
            <div className={styles.container}>
                {viewImage ?
                    <div className={styles.fileBox} onClick={onImageClick}>
                        <img className={styles.image} src={viewImage} alt="??????"></img>
                        <input ref={inputRef} onChange={onFileChange} className={styles.file} type="file" accept="image/*" name="file" />
                    </div>
                    :
                    <div className={styles.fileBox} onClick={onImageClick}>
                        ?????? ?????????
                        <input ref={inputRef} onChange={onFileChange} className={styles.file} type="file" accept="image/*" name="file" />
                    </div>
                }
                
                <div className={styles.metadata}>
                    <h2 className={styles.inputTitle}>????????? ??????</h2>
                    <div className={styles.box}>
                        <select ref={genreRef} className={styles.select} name="genre" placeholder="????????????">
                            <option value="fiction">Fiction</option>
                            <option value="nonfiction">Non fiction</option>
                            <option value="comic">Comic</option>
                        </select>
                        <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="??????"></input>
                        <input ref={writerRef} className={styles.input} type="text" name="writer" placeholder="?????????"></input>
                        <input ref={pubRef} className={styles.input} type="text" name="pub" placeholder="?????????"></input>
                        <input ref={depositRef} className={styles.input} type="number" name="deposit" placeholder="?????? ?????????"></input>
                    </div>
                </div>
            </div>
            <textarea ref={detailRef} className={styles.textBox} name="detail" cols="30" rows="10" placeholder="????????????"></textarea>
            <button className={styles.button} onClick={onAddBook}>??? ??? ??? ???</button>
        </form>
    )
}

export default Registration;