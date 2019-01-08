import API from '../../API/API'



async function fetchAllData(token, URL) {
    try {

        const response = await API(token).get(`${URL}`)
        return response

    } catch(ex) {
        return ex
    }
   
    
  };
  
  module.exports = {
    fetchAllData,
  }
  