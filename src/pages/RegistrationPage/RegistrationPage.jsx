import React from 'react';
import RegistrationForm from 'components/Forms/Registration/RegistrationForm';
import { RegPageContainer } from './RegistrationPageStyled';


function RegistrationPage() {
   
    return (
        <RegPageContainer>
            <RegistrationForm />
        </RegPageContainer>
    );
}

export default RegistrationPage;
