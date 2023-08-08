import { getCurrency } from 'services/helpers';
import Loader from 'components/Loader/Loader';
import {
    Table,
    Category,
    Currency,
    Purchase,
    Sale,
    CurrencyTable,
    CurrencyBuy,
    CurrencySell,
} from './SideCurrency.styled';
import { useEffect, useState } from 'react';

const SideCurrency = () => {
    const [dataCurrency, setDataCurrency] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const localDataCurrency = localStorage.getItem('currency');

        if (!localDataCurrency) {
            const fetchCurrency = async () => {
                try {
                    setIsLoading(true);
                    const data = await getCurrency();
                    const stringifiedCurrency = JSON.stringify(data);
                    localStorage.setItem('currency', stringifiedCurrency);
                    setDataCurrency(data);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchCurrency();
        } else {
            const parsedCurrency = JSON.parse(localDataCurrency);
            return setDataCurrency(parsedCurrency);
        }
    }, []);

    console.log(dataCurrency);

    return (
        <>
            <Category>
                <Currency>Currency</Currency>
                <Purchase>Purchase</Purchase>
                <Sale>Sale</Sale>
            </Category>
            <Table>
                {isLoading && <Loader />}
                {error && <>{error.message}</>}
                <tbody>
                    {dataCurrency &&
                        !isLoading &&
                        dataCurrency.map(({ currency, buy, sell }) => (
                            <tr key={currency}>
                                <CurrencyTable>
                                    {currency.toUpperCase()}
                                </CurrencyTable>
                                <CurrencyBuy>{buy}</CurrencyBuy>
                                <CurrencySell>{sell}</CurrencySell>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </>
    );
};

export default SideCurrency;
