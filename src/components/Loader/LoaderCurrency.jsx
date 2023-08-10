import Logotip from '../../assests/images/loaderMoney.svg';
import { LoaderCurrencyStyled } from './LoaderCurrency.styled';

export default function LoaderCurrency() {
    return (
        // <LoaderCurrencyStyled />
        <LoaderCurrencyStyled
            src={Logotip}
            alt="Loader"
            width="100px"
            height="100px"
        />
    );
}
