import {app} from './app';
import {AppDataSource} from '../omrconfig';
import "reflect-metadata";
require('dotenv').config();

main();

async function main() {
    if(process.env.JWT_SECRET_KEY === undefined && process.env.NODE_ENV!=="production") {
        process.env.JWT_SECRET_KEY = "JWT_SECRET";
    }
    await AppDataSource.initialize();
    console.log('Postgres connection established');
    app.listen(process.env.PORT, () => console.log('Server is running on Port '+process.env.PORT));
}