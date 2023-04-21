import { BASE_URL } from "../helpers/BaseUrl"
import axios from 'axios';

const PETS_API_BASE_URL = `${BASE_URL}/pets`;

class PetsServices {


    all = async () => {
        return await axios.get(PETS_API_BASE_URL);
    }

}
// eslint-disable-next-line import/no-anonymous-default-export
export default new PetsServices();