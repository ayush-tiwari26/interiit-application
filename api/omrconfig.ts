import { DataSource } from "typeorm";
import { UserEntity } from './src/models/entity/UserEntity';
import {FileEntity} from "./src/models/entity/FileEntity";

if(process.env.DB_URL === undefined || process.env.NODE_ENV!=="production") {
    process.env.DB_URL = "postgres://postgres:postgres@localhost:5432/postgres";
}

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DB_URL,
    synchronize: true,
    entities: [UserEntity, FileEntity]
})