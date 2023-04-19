import { BASE_URL } from "../helpers/BaseUrl"
import axios from 'axios';

const NECCESITIES_API_BASE_URL = `${BASE_URL}/necessities`;

class NecessitiesService {


    all = async (pet_id) => {
        return await axios.get(`${NECCESITIES_API_BASE_URL}?pet_id=${pet_id}`);
    }

}

export default new NecessitiesService();