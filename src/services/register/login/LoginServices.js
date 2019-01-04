import API from '../../API/API';


  const loginUser = (URL, credentials) => {
    API().post(`${URL}`, credentials)
  };
  
  
  module.exports = {
    loginUser,
  }