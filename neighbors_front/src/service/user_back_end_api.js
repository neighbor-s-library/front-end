import axios from "axios"

class UserBackEndAPI {
    //로그인
    async login(loginObject) {
        const data = await axios.post("http://3.36.109.233:8080/hellobook/login", loginObject);
        return data;
    }
    
    //회원가입
    async join(joinObject) {
        const data = await axios.post("http://3.36.109.233:8080/hellobook/join", joinObject);
        return data;
    }

    //회원정보 수정
    async change(token, changeObject) { 
        const data = await axios.post("http://3.36.109.233:8080/hellobook/users",changeObject, token);
        return data
    }

    //특정 유저의 회원정보 조회
    async userDetail(id, token) {
        const data = await axios.get(`http://3.36.109.233:8080/hellobook/users/${id}`, token)
        return data;
    }

    //비밀번호 변경시 변경내용 이메일 전송
    async transperFromEmail (userEmail,token) {
        const data = await axios.post("http://3.36.109.233:8080/hellobook/users/pwfind",userEmail,token);
        return data;
    }
}

export default UserBackEndAPI;
