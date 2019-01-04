import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'https://sys2.parkaidemobile.com/api2/',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-access-token': ``
        }
    })
}