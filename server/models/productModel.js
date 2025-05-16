// @ts-check
import { DataTypes, Model } from 'sequelize';
import sq from '../database/sequelize.js';
import User from './userModel.js';
import Category from "./categoryModel.js";
import AppError from '../utilities/AppError.js';

/**@type {import("sequelize").ModelStatic<Model<any, any>>}*/
const Product = sq.define(
    'Product',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        category_id: { type: DataTypes.INTEGER, allowNull: false },
        name: { type: DataTypes.STRING(255), allowNull: false },
        price: { type: DataTypes.FLOAT, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: false },
        image_url: { type: DataTypes.TEXT, allowNull: true },
    },
    {
        tableName: 'products',
        timestamps: false,
    }
);

User.hasMany(Product, { foreignKey: 'user_id' });
Product.belongsTo(User, { foreignKey: 'user_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

try {
    /**@type {object}*/
    const syncOptions = {
        /**@type {boolean}*/
        truncate: true,
        /**@type {boolean}*/
        force: true,
    };
    await Product.sync(syncOptions);
    console.log('\x1b[35mProduct\x1b[34m table created\x1b[0m');
} catch (error) {
    throw new AppError(`Error while creating Product model: ${error}`, 500);
}
export default Product;