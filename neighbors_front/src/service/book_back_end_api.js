import axios from "axios";

class BookBackEndAPI {
  async addBook(addBooks) {
    try {
      const data = await axios.post("/hellobook/books", addBooks)
      return data;
    } catch(error) {
      return error;
    }
  }

  async allLoadBooks(page_number) {
    try {
      const data = await axios.get(`/hellobook/books?page=${page_number}`)
      return data;
    } catch(error) {
      return error;
    }
  } 

  async bookDetail(id) {
    try {
      const data = await axios.get(`/hellobook/books/${id}`);
      return data;
    } catch(error) {
      return error;
    }
  }

  async searchBooks(keyword) {
    try {
      const data = await axios.get(`/hellobook/books/?keyword=${keyword}`)
      return data;
    } catch(error) {
      return error;
    }
  }

  async searchUserBooks(id) {
    try {
      const data = await axios.get(`/hellobook/users/books?user_id=${id}`)
      return data;
    } catch(error) {
      return error;
    }
  }

  async searchUserRend(id) {
    try {
      const data = await axios.get(`/hellobook/books?rent=true&user_id=${id}`)
      return data;
    } catch(error) {
      return error;
    }
  }
  
}

export default BookBackEndAPI;