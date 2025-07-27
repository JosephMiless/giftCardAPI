import { executeQuery } from "../config/database.js";

export const findUserByEmail = async(email) => {
    try {

        const query = `
        SELECT * FROM users WHERE email = $1;
        `;

        const values = [email];

        const results = await executeQuery(query, values);

        return results;
        
    } catch (error) {
        console.error("Error finding user by email", error);
    }
};

export const registerUser = async (id, email, password) => {
    try {

        const query = `
        INSERT INTO users(id, email, password)
        VALUES($1,$2,$3)
        RETURNING *;
        `;

        const values = [id, email, password];

        const result = await executeQuery(query, values);

        return result;
        
    } catch (error) {
        console.error("Error inserting into users table", error);
    }

};

export const findEntityByEmailOrID = async(tableName, entityID, email, ID) => {
    try {

        const query = `
        SELECT * FROM ${tableName} WHERE email = $1 OR ${entityID}= $2;
        `;

        const values = [email, ID];

        const results = await executeQuery(query, values);

        return results;
        
    } catch (error) {
        console.error("Error finding entity by email or ID", error);
    }
};