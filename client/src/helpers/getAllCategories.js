import axios from 'axios';
import url from './getURL.js';

const getAllCategories = async () => {
    try {
        const response = await axios.get(url('categories'));
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};

export default getAllCategories;
