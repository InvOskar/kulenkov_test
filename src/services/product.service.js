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
    async deleteProduct(id) {
        const response = await axios.delete(`${HOST}/${id}`);
        return response.data;
    }
    async createProduct(product) {
        const response = await axios.post(`${HOST}`, product);
        return response.data;
    }
    async updateProduct(id, product) {
        const response = await axios.put(`${HOST}/${id}`, product);
        return response.data;
    }
}   

export default ProductService;