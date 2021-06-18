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
}

export default BookBackEndAPI;