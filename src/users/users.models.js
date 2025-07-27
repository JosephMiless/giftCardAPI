import { executeQuery } from "../config/database.js";


export const createUsersTable = async () => {
    try {

        const query = `
        CREATE TABLE IF NOT EXISTS users(
        id VARCHAR(300) NOT NULL PRIMARY KEY,
        email VARCHAR(200) UNIQUE NOT NULL,
        password VARCHAR(300)
        );
        `;

        await executeQuery(query, []);
        
    } catch (error) {
        console.error("Error creating user table", error);
    }
};