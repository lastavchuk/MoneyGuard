import { selectFinanceTotalBalance } from 'redux/selectors';
import { BalanceDiv, BalanceText, Balance } from './SideBalance.styled';
import { useSelector } from "react-redux";



const SideBalance = () => {
    const balance = useSelector(selectFinanceTotalBalance);

    return (
        <BalanceDiv>
            <BalanceText>Your balance</BalanceText>

            <Balance>₴ {balance}</Balance>
        </BalanceDiv>
    );
};

export default SideBalance;
