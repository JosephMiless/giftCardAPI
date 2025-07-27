import { createCardsTAble } from "../giftCards/giftCard.models.js";
import { createTransactionsTable } from "../transactions/transactions.models.js";
import { createUsersTable } from "../users/users.models.js"


export const tables = async () => {
    await createUsersTable();
    await createCardsTAble();
    await createTransactionsTable();
};