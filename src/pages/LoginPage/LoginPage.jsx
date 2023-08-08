import React from 'react';
import LoginForm from 'components/Forms/Login/LoginForm';
import { LoginPageContainer } from './LoginPageStyled';

function LoginPage() {
    return (
        <LoginPageContainer>
            <LoginForm />
        </LoginPageContainer>
    );
}

export default LoginPage;
