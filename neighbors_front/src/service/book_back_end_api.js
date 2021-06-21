import axios from "axios";

class BookBackEndAPI {
  async addBook(addBooks) {
    try {
      const data = await axios.post("http://localhost:8080/hellobook/books", addBooks)
      return data;
    } catch(error) {
      return error;
    }
  }

  async allLoadBooks(page_number) {
    try {
      const data = await axios.get(`http://localhost:8080/hellobook/books?page=${page_number}`)
      return data;
    } catch(error) {
      return error;
    }
  } 

  async bookDetail(id) {
    try {
      const data = await axios.get(`http://localhost:8080/hellobook/books/${id}`);
      return data;
    } catch(error) {
      return error;
    }
  }
}

export default BookBackEndAPI;