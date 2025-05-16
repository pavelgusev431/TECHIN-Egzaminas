import ProductEditModal from './ProductEditModal.jsx';
import ProductDeleteModal from './ProductDeleteModal.jsx';
import { useEffect, useState } from 'react';
import getCategory from "../../../helpers/getCategory.js"

const MyProduct = ({ product, setUpdate }) => {
    const { id, name, description, category_id, price, image_url } = product;
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [category, setCategory] = useState("");
    const handleEdit = () => {
        setShowEdit(!showEdit);
    };
    const handleDelete = () => {
        setShowDelete(!showDelete);
    };

    useEffect(() => {
        const fetch = async () => {
            const foundCategory = await getCategory(category_id);
            setCategory(foundCategory.data);
        }
        fetch();
    },[category_id]);

    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col sm:flex-row items-center gap-4 p-4 my-4">
            {/* Product Image */}
            <img
                src={image_url}
                alt={name}
                className="w-40 h-40 object-cover rounded-lg border border-gray-200"
            />

            {/* Product Info */}
            <div className="flex flex-col flex-1 text-center sm:text-left">
                <p className="text-xl font-semibold text-gray-800">
                    {name}
                </p>
                <p className="text-gray-600 mt-1">
                    {description}
                </p>
                <p className="text-red-500 font-bold text-lg mt-2">${price}</p>
                <p className="text-gray-500 font-bold text-lg mt-2">{category}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
                <button
                    onClick={handleEdit}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md transition"
                >
                    Edit
                </button>
                <button
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md transition"
                >
                    Delete
                </button>
            </div>

            {/* Modals */}
            {showEdit && (
                <ProductEditModal
                    id={id}
                    toggleShow={handleEdit}
                    setUpdate={setUpdate}
                    productInfo={product}
                />
            )}
            {showDelete && (
                <ProductDeleteModal
                    id={id}
                    toggleShow={handleDelete}
                    setUpdate={setUpdate}
                />
            )}
        </div>
    );
};

export default MyProduct;
