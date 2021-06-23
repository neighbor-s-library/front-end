import axios from "axios"

class UserBackEndAPI {
  async login(loginObject) {
    try{
      const data = await axios.post("/hellobook/login", loginObject);
      return data;
    } catch(error) {
      return error;
    }
  }

  async join(joinObject) {
    try {
      const data = await axios.post("/hellobook/join", joinObject);
      return data;
    } catch(error) {
      return  error;
    }
  }

  
}

export default UserBackEndAPI;