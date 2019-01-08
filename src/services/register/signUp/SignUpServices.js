import API from '../../API/API';


async function createUser(URL, credentials) {
    try {

      const response = await API().post(`${URL}`, credentials)
      return response

    } catch(ex) {
      return ex
    }
   
    
  };
  
  module.exports = {
    createUser,
  }
  