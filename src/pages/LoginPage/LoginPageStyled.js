import styled from 'styled-components';

import loginImg from '../../assests/img/login_deskt@1x.jpg';
import loginImg2 from '../../assests/img/login_deskt@2x.jpg';

export const LoginPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${loginImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  @media (max-width: 780px) {
    width: 600px;
    background-image: url(${loginImg2});
  }
`;

export const LogotipStyled = styled.div`    
    width: 182px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;  
    h3 {
    margin: 0 auto;
    color: var(--white, #fbfbfb);    
    font-size: 27px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  } 
  `