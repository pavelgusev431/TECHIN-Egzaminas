// @ts-check
import app from './app.js';
import dotenv from 'dotenv';
import { createAdmin } from '../controllers/userController.js';
import {createCategories} from "../controllers/categoryController.js";

dotenv.config();
/**@type {string | undefined}*/
const port = process.env.PORT;

const setup = async () => {
    await createAdmin();
    await createCategories();
}

app.listen(port, async () => {
    await setup()
    .then(() => {
        console.log(
            `\x1b[36mServer started on port \x1b[35m${port}`,
            '\x1b[0m'
        );
    })
});