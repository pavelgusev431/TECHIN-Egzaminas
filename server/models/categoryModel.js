// @ts-check
import { DataTypes, Model } from 'sequelize';
import sq from '../database/sequelize.js';
import AppError from "../utilities/AppError.js";

/**@type {import("sequelize").ModelStatic<Model<any, any>>}*/
const Category = sq.define(
    'Category',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        timestamps: false,
        tableName: 'categories',
    }
);

try {
    await Category.sync({ alter: true, force: true });
    console.log('\x1b[35mCategory\x1b[34m table created\x1b[0m');
} catch (error) {
    throw new AppError(`Error while creating category model: ${error}`, 500);
}

export default Category;
