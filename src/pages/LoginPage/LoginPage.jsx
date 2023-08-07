import React from 'react';
import LoginForm from 'components/Forms/Login/LoginForm';
import { LoginPageContainer } from './LoginPageStyled';

function LoginPage() {
    return (
        <LoginPageContainer>
            {/* <LogotipStyled>
                <img
                    src={Logotip}
                    alt="Logo Money Guard "
                    width="36px"
                    height="36px"
                />
                <h3>MoneyGuard</h3>
            </LogotipStyled> */}
            <LoginForm />
        </LoginPageContainer>
    );
}

export default LoginPage;
