import axios from 'axios';
import url from './getURL.js';

const getProductsById = async (id, ) => {
    try {
        const response = await axios.get(url(`products/user/${id}`), {
            withCredentials: true
        });
        return response.data || [];
    } catch (error) {
        console.error(error);
    }
};

export {getProductsById};