import { BASE_URL } from "../helpers/BaseUrl"
import axios from 'axios';

const SIZES_API_BASE_URL = `${BASE_URL}/sizes`;

class SizesServices {


    all = async (pet_id) => {
        return await axios.get(`${SIZES_API_BASE_URL}?pet_id=${pet_id}`);
    }

}

export default new SizesServices();