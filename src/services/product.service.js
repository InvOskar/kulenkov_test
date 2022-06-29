import apiEnv from "../env/apiEnv";
import axios from "axios";

const HOST = apiEnv.HOST

class ProductService {
    async getProducts(limit) {
        const response = await axios.get(`${HOST}?limit=${limit}`);
        return response.data;
    }
    async getProduct(id) {
        const response = await axios.get(`${HOST}/${id}`);
        return response.data;
    }
    async getProductsByCategory(category, limit) {
        const response = await axios.get(`${HOST}/category/${category}?limit=${limit}`);
        return response.data;
    }
}   

export default ProductService;