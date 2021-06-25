import axios from "axios"

class UserBackEndAPI {
async login(loginObject) {
    const data = await axios.post("http://localhost:8080/hellobook/login", loginObject);
    return data;
}

async join(joinObject) {
    const data = await axios.post("http://localhost:8080/hellobook/join", joinObject);
    return data;
}

async change(token, changeObject) { 
    const data = await axios.post("http://localhost:8080/hellobook/users",changeObject, token);
    return data
}

async userDetail(id, token) {
    const data = await axios.get(`http://localhost:8080/hellobook/users/${id}`, token)
    return data;
}
}

export default UserBackEndAPI;
