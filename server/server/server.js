// @ts-check
import app from './app.js';
import dotenv from 'dotenv';
import { createAdmin } from '../controllers/userController.js';

dotenv.config();
/**@type {string | undefined}*/
const port = process.env.PORT;

app.listen(port, async () => {
    await createAdmin()
    .then(() => {
        console.log(
            `\x1b[36mServer started on port \x1b[35m${port}`,
            '\x1b[0m'
        );
    })
});