//Import de axios (npm install axios dans un terminal)
import axios from "axios";
//Module a exporter
export default axios.create({
    //Url de jsonserver
    baseURL: 'http://localhost:3000',
    //Options de requète HTTP
    headers:{
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "application/json"
    }

})