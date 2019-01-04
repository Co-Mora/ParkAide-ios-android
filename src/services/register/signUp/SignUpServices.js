import API from '../../API/API';


  const createUser = (URL, credentials) => {
    API().post(`${URL}`, credentials)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        alert(error);
      });
  };

  
  module.exports = {
    createUser,
  }
  