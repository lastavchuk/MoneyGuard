import React, { useEffect } from 'react';
import LoginForm from 'components/Forms/Login/LoginForm';
import { LoginPageContainer } from './LoginPageStyled';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';

function LoginPage() {
    const error = useSelector(selectError);

    useEffect(() =>{
        if (error) {
            toast.info(error.message);
        }
      },[error])

    return (
        <LoginPageContainer>
            <LoginForm />
        </LoginPageContainer>
    );
}

export default LoginPage;
