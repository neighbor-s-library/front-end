import axios from "axios"

class UserBackEndAPI {
    //로그인
    async login(loginObject) {
        const data = await axios.post("http://localhost:8080/hellobook/login", loginObject);
        return data;
    }
    //회원가입
    async join(joinObject) {
        const data = await axios.post("http://localhost:8080/hellobook/join", joinObject);
        return data;
    }
    //회원정보 수정
    async change(token, changeObject) { 
        const data = await axios.post("http://localhost:8080/hellobook/users",changeObject, token);
        return data
    }
    //특정 유저의 회원정보 조회
    async userDetail(id, token) {
        const data = await axios.get(`http://localhost:8080/hellobook/users/${id}`, token)
        return data;
    }

}

export default UserBackEndAPI;
