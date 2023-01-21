// api.js
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/user",
  headers: {
    "Content-type": "application/json"
  }
});
export const fetchVetData = async () => {
    const url = 'http://10.0.2.2:5000/user';
    const response = await fetch(url);
    try {
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      console.error(err);
    }
  };
  

  export const getClinicList  = async () => {
    
    const url = 'http://10.0.2.2:5000/clinic';

    const response = await fetch (url);
            try {
                const responseJson = await response.json();
                return responseJson;

            } catch (err) {
                console.error(err);
            }

};



export const getUserList  = async () => {

    const url = 'http://10.0.2.2:5000/user';

    const response = await fetch (url);
            try {
                const responseJson = await response.json();
                return responseJson;

            } catch (err) {
                console.error(err);
            }

};

