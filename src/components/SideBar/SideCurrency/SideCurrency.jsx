import { Table, THead, Category, Currency, Purchase, Sale, CurrencyTable, CurrencyBuy, CurrencySell } from './SideCurrency.styled';

const SideCurrency = () => {
    const MyTry = [
        {
            currency: 'usd',
            buy: 27.55,
            sell: 27.55,
        },
        {
            currency: 'eur',
            buy: 27.55,
            sell: 27.55,
        },
    ];

    return (
        <>
            <Category>
                <Currency>Currency</Currency>
                <Purchase>Purchase</Purchase>
                <Sale>Sale</Sale>
            </Category>
            <Table>
                <tbody>
                    {MyTry.map(({ currency, buy, sell }) => {
                        return (
                            <tr key={currency}>
                                <CurrencyTable>{currency.toUpperCase()}</CurrencyTable>
                                <CurrencyBuy>{buy}</CurrencyBuy>
                                <CurrencySell>{sell}</CurrencySell>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default SideCurrency;
