import dotenv from 'dotenv';

dotenv.config();

export const config = {
port: process.env.PORT,
asecret: process.env.ACCESS_SECRET_KEY,
rsecret: process.env.REFRESH_SECRET_KEY,
db: {
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        pass: process.env.DB_PASSWORD
    }
};