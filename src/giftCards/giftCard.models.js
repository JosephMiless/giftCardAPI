import { executeQuery } from "../config/database.js";

export const createCardsTAble = async () => {
  try {

        const query = `
        CREATE TABLE IF NOT EXISTS giftCards(
        id VARCHAR(300) NOT NULL PRIMARY KEY,
        user_id VARCHAR(200) NOT NULL,
        card_type VARCHAR(100) NOT NULL,
        value FLOAT,
        status VARCHAR(50),
        FOREIGN KEY (user_id) REFERENCES users(id)
        );
        `;

        await executeQuery(query, []);
        
    } catch (error) {
        console.error("Error creating cards table", error);
    };  
};