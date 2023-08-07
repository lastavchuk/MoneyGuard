import axios from 'axios';

export async function getMonoCurrency() {
    const { data } = await axios.get('https://api.monobank.ua/bank/currency1');
    return data;
}

/*
https://api.privatbank.ua/#p24/exchange
https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5
 */
export async function getPrivatCurrency() {
    const { data } = await axios.get(
        'https://api.allorigins.win/raw?url=https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
    );
    return data;
}
