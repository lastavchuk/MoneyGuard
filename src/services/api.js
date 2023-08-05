import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://wallet.goit.ua/api',
});

export const setToken = token => {
    instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
    instance.defaults.headers.Authorization = '';
};

//=== User ===
export async function loginUser(userData) {
    const { data } = await instance.post('/auth/sign-in', userData);
    return data;
}

export async function registerUser(userData) {
    const { data } = await instance.post('/auth/sign-up', userData);
    setToken(data.token);
    return data;
}

export async function logOutUser() {
    const { data } = await instance.delete('/auth/sign-out');
    clearToken();
    return data;
}

export async function currentUser() {
    const { data } = await instance.get('/users/current');
    return data;
}

//=== Transactions ===
export async function createTransaction(transaction) {
    const { data } = await instance.post('/transactions', transaction);
    return data;
}
export async function fetchAllTransactions() {
    const { data } = await instance.get('/transactions');
    console.log(data);
    return data;
}

/*{
    transactionId: '682e9639-4677-4c92-b86f-eedc303cb7e5',
    transactionDate: '2021-07-01',
    type: 'INCOME',
    categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
    comment: 'xcx',
    amount: 500,
 }*/
export async function updTransaction({ transactionId, ...transactionData }) {
    const { data } = await instance.patch(
        `/transactions/${transactionId}`,
        transactionData
    );
    return data;
}

export async function delTransaction(id) {
    const { data } = await instance.delete(`/transactions/${id}`);
    return data;
}

export async function getTransactionCategories() {
    const { data } = await instance.get('/transaction-categories');
    return data;
}

/*{
    month: 8,
    year: 2023,
} */
// export async function getSummaryTransaction(month, year) {
export async function getSummaryTransaction({ month = null, year = null }) {
    const { data } = await instance.get('/transactions-summary', {
        params: { month, year },
    });
    return data;
}
