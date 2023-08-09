import React, { useEffect } from 'react';
import RegistrationForm from 'components/Forms/Registration/RegistrationForm';
import { RegPageContainer } from './RegistrationPageStyled';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';

function RegistrationPage() {
    const error = useSelector(selectError);

    useEffect(() => {
        if (error) {
            toast.info(error.message);
        }
    }, [error]);

    return (
        <RegPageContainer>
            {/* <LogoStyled>
                <img src={Logotip} alt="Logo MoneyGuard" width="36px" height="36px" />
                <h3>MoneyGuard</h3>
            </LogoStyled> */}
            <RegistrationForm />
        </RegPageContainer>
    );
}

export default RegistrationPage;
