import API from '../../API/API';


  const verifyUser = (URL, credentials) => {
    API().post(`${URL}`, credentials)
  };
  
  
  module.exports = {
    verifyUser,
  }