import axios from "axios";

class BookBackEndAPI {
    //책 등록하기
    async addBook(addBooks) {
        const data = await axios.post("http://3.36.109.233:8080/hellobook/books", addBooks)
        return data;
    }

    //등록된 책 전체 조회
    async allLoadBooks(page_number) {
        const data = await axios.get(`http://3.36.109.233:8080/hellobook/books?page=${page_number}`)
        return data;
    } 

    //특정 도서의 상세 페이지
    async bookDetail(id) {
        const data = await axios.get(`http://3.36.109.233:8080/hellobook/books/${id}`);
        return data;
    }

    //검색어로 등록된 책들 조회
    async searchBooks(keyword) {
        const data = await axios.get(`http://3.36.109.233:8080/hellobook/books/?keyword=${keyword}`)
        return data;
    }

    //자신의 user_id으로 본인이 등록한 책 조회
    async searchUserBooks(id) {
        const data = await axios.get(`http://3.36.109.233:8080/hellobook/users/books?user_id=${id}`)
        return data;
    }

    //대여 목록 조회 - Owner (빌려준 목록 조회)
    async searchUserRent(id,token) {
        const data = await axios.get(`http://3.36.109.233:8080/hellobook/owner/${id}`, token);
        return data;
    }

    //대여 목록 조회 - Renter (빌린 목록 조회)
    async searchUserLend(id,token) {
        const data = await axios.get(`http://3.36.109.233:8080/hellobook/renter/${id}`, token);
        return data;
    }
}

export default BookBackEndAPI;
