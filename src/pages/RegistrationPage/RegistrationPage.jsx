import React from 'react';
import RegistrationForm from 'components/Forms/Registration/RegistrationForm';
import { RegPageContainer } from './RegistrationPageStyled';

function RegistrationPage() {
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
