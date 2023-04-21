import { BASE_URL } from "../helpers/BaseUrl"
import axios from 'axios';

const SURVEYS_API_BASE_URL = `${BASE_URL}/surveys`;

class SurveysServices {


    create = async (body) => {
        return await axios.post(`${SURVEYS_API_BASE_URL}`,body);
    }


    update = async (id,body) => {
        return await axios.put(`${SURVEYS_API_BASE_URL}/${id}`,body);
    }
    

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new SurveysServices();