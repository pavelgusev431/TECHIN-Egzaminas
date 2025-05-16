import Product from "../models/productModel.js";
import AppError from "../utilities/AppError.js";

const createProduct = async (req, res, next) => {
  try {
    const user_id = res.locals.id;
    const { name, description, price, category_id } = req.body;
    const newProduct = await Product.create({
      name,
      description,
      category_id,
      user_id,
      price,
    });
    res.status(200).json({
        status: "success",
        data: newProduct
    })
  } catch (error) {
    next(error);
  }
};

const getUserProducts = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    if (!userId) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const products = await Product.findAll({
      where: { user_id: userId },
    });

    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found for this user" });
    }

    return res.json({ data: products });
  } catch (error) {
    console.error("Error fetching user products:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const editProduct = async (req, res, next) => {
  try {
      const { id } = res.locals;
      const { productId } = req.params;
      const {
          category_id,
          name,
          price,
          description,
          image_url,
      } = req.body;
      const foundProduct = await Product.findByPk(productId);
      if (!foundProduct) {
          throw new AppError('Product not found', 404);
      } else if (foundProduct.user_id !== id) {
          throw new AppError(
              "Forbidden to change other user's products",
              403
          );
      } else {
          foundProduct.category_id = category_id || foundProduct.category_id;
          foundProduct.name = name || foundProduct.name;
          foundProduct.price = price || foundProduct.price;
          foundProduct.description = description || foundProduct.description;
          foundProduct.image_url = image_url || foundProduct.image_url;
          await foundProduct.save();
          res.status(200).json({
              status: 'success',
              message: 'Changed product successfully',
              data: foundProduct.dataValues,
          });
      }
  } catch (error) {
      next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
      const { id } = res.locals;
      const { productId } = req.params;
      const foundProduct = await Product.findByPk(productId);
      if (!foundProduct) {
          throw new AppError('Product not found', 404);
      } else if (foundProduct.user_id !== id) {
          throw new AppError(
              "Forbidden to delete other user's products",
              403
          );
      } else {
          await foundProduct.destroy();
          res.status(203).send();
      }
  } catch (error) {
      next(error);
  }
};

export { getUserProducts, createProduct, editProduct, deleteProduct };
