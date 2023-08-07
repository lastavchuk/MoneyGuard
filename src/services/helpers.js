import { fetchAllTransactions } from './api';

function getYear(date) {
    return date.slice(0, 4);
}

export async function getAllYears() {
    const resp = await fetchAllTransactions();

    let years = [];
    for (const { transactionDate } of resp) {
        if (!years.includes(getYear(transactionDate))) {
            years.push(getYear(transactionDate));
        }
    }
    return years.sort();
}
