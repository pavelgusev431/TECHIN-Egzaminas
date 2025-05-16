import Category from "../models/categoryModel.js";

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({
      status: "success",
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

const createCategories = async () => {
  await Category.create({ name: "Tech" });
  await Category.create({ name: "Services" });
  await Category.create({ name: "Home Utility" });
  await Category.create({ name: "Wear" });
  await Category.create({ name: "Miscelaneous" });
};

const getCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    res.status(200).json({
      status: "success",
      data: category.dataValues.name,
    })
  } catch (error) {
    next(error);
  }
};

export { getCategories, createCategories, getCategoryById };
