import * as dotenv from "dotenv";
import { createConnection } from "typeorm";
import { hotels_csv } from "./Hotels_Csv";

dotenv.config();

createConnection({
    url: process.env.URI,
    entities: [hotels_csv],
    type: "postgres",
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})