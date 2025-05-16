import axios from 'axios';
import url from './getURL.js';

const deleteProduct = async (id) => {
    const response = await axios.delete(url(`products/${id}`), {
        withCredentials: true,
    });
    return response;
};

export default deleteProduct;
