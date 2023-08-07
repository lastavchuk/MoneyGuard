import styled from 'styled-components';

import registerImg from '../../assests/img/registr_desktop@1x.jpg';
import registerImg2 from '../../assests/img/registr_desktop@2x.jpg';

export const RegPageContainer = styled.div`
   width: 100%;
  height: 100vh;
  background-image: url(${registerImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  

  @media (max-width: 780px) {
  
    background-image: url(${registerImg2 });
  }
`;

export const LogoStyled = styled.div`    
  /* outline: 1px solid black; */
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