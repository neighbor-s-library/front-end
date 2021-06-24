import axios from "axios"

class UserBackEndAPI {
  async login(loginObject) {
    
    try{
      const data = await axios.post("http://3.36.109.233:8080/hellobook/login", loginObject);
      return data;
    } catch(error) {
      return "error";
    }
  }

  async join(joinObject) {
    try {
      const data = await axios.post("http://3.36.109.233:8080/hellobook/join", joinObject);
      return data;
    } catch(error) {
      return "error";
    }
  }

  async change(token, changeObject) { 
    try {
      const data = await axios.put("http://3.36.109.233:8080/hellobook/users",changeObject, token);
      return data
    } catch(error) {
      return "error";
    }
  }

  async userDetail(id, token) {
    try {
      const data = await axios.get(`http://3.36.109.233:8080/hellobook/users/${id}`, token)
      return data
    } catch(error) {
      return "error";
    }
  }
}

export default UserBackEndAPI;
