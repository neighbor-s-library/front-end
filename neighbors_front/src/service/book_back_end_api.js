import axios from "axios";

class BookBackEndAPI {
async addBook(addBooks) {
    const data = await axios.post("http://localhost:8080/hellobook/books", addBooks)
    return data;
}

async allLoadBooks(page_number) {
    const data = await axios.get(`http://localhost:8080/hellobook/books?page=${page_number}`)
    return data;
} 

async bookDetail(id) {
    const data = await axios.get(`http://localhost:8080/hellobook/books/${id}`);
    return data;
}

async searchBooks(keyword) {
    const data = await axios.get(`http://localhost:8080/hellobook/books/?keyword=${keyword}`)
    return data;
}

async searchUserBooks(id) {
    const data = await axios.get(`http://localhost:8080/hellobook/users/books?user_id=${id}`)
    return data;
}
}

export default BookBackEndAPI;
