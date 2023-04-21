import { BASE_URL } from "../helpers/BaseUrl"
import axios from 'axios';

const AGES_API_BASE_URL = `${BASE_URL}/ages`;

class AgesService {


    all = async (pet_id) => {
        return await axios.get(`${AGES_API_BASE_URL}?pet_id=${pet_id}`);
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AgesService();