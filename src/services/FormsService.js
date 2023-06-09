import { BASE_URL } from "../helpers/BaseUrl"
import axios from 'axios';

const FORM_API_BASE_URL = `${BASE_URL}/forms`;

class FormsService {


    get = async (params) => {
        return await axios.get(`${FORM_API_BASE_URL}?${params}`);
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FormsService();