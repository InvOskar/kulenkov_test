import apiEnv from "../env/apiEnv";
import axios from "axios";

const HOST = apiEnv.HOST

class CategoryService {
    async getAllCategories() {
        const response = await axios.get(`${HOST}/categories`);
        return response.data;
    }
}   

export default CategoryService;