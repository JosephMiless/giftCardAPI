import { executeQuery } from "../config/database.js";

export const createTransactionsTable = async () => {
  try {

        const query = `
        CREATE TABLE IF NOT EXISTS transactions(
        id VARCHAR(300) NOT NULL PRIMARY KEY,
        card_id VARCHAR(300) UNIQUE NOT NULL,
        amount FLOAT NOT NULL,
        date DATE DEFAULT(CURRENT_TIMESTAMP),
        FOREIGN KEY (card_id) REFERENCES giftCards(id)
        );
        `;

        await executeQuery(query, []);
        
    } catch (error) {
        console.error("Error creating transactions table", error);
    }  
};