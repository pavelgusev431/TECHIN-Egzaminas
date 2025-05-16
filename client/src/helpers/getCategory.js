import axios from 'axios';
import url from './getURL.js';

const getCategory = async (id) => {
    try {
        const response = await axios.get(url(`categories/${id}`));
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        return undefined;
    }
};

export default getCategory;
