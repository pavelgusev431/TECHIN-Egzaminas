import axios from "axios";
import url from "./getURL.js";

const createProduct = async (data) => {
  const { category_id, name, price, description, amount_in_stock, image } =
    data;
  try {
    const newProduct = await axios.post(
      url("products"),
      {
        category_id,
        name,
        price,
        description,
        amount_in_stock,
      },
      { withCredentials: true }
    );
    const { id } = newProduct.data.data;
    const formData = new FormData();
    formData.append("image", image[0]);
    await axios.post(url("upload/images"), formData, {
      withCredentials: true,
    });
    const updatedProduct = await axios.patch(
      url(`products/${id}`),
      { image_url: url(`images/${id}`) },
      { withCredentials: true }
    );
    return updatedProduct.data;
  } catch (error) {
    console.log(error);
  }
};

export default createProduct;
