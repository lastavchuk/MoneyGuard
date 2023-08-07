import { fetchAllTransactions } from './api/api';
import { getMonoCurrency, getPrivatCurrency } from './api/apiCurrency';

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

function parseMono(arr) {
    const rez = [
        {
            currency: 'usd',
        },
        {
            currency: 'eur',
        },
    ];

    arr.forEach((el, idx) => {
        rez[idx].buy = el.rateBuy.toFixed(2);
        rez[idx].sell = el.rateSell.toFixed(2);
    });

    return rez;
}
function parsePrivat(arr) {
    const rez = [
        {
            currency: 'usd',
        },
        {
            currency: 'eur',
        },
    ];

    let i = 1;
    arr.forEach(el => {
        rez[i].buy = el.buy.slice(0, 5);
        rez[i].sell = el.sale.slice(0, 5);
        i--;
    });

    return rez;
}

export async function getCurrency() {
    try {
        const data = await getMonoCurrency();
        return parseMono(data.slice(0, 2));
    } catch (error) {
        try {
            return parsePrivat(await getPrivatCurrency());
        } catch (error) {
            return [
                {
                    currency: 'usd',
                    buy: 0,
                    sell: 0,
                },
                {
                    currency: 'eur',
                    buy: 0,
                    sell: 0,
                },
            ];
        }
    }
}
