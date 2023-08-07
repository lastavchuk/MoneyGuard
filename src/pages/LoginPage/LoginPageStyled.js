import styled from 'styled-components';

import loginImg from '../../assests/img/login_tab@1x.jpg';
import loginImg2 from '../../assests/img/login_tab@2x.jpg';

import backgroundMob from '../../assests/img/login_mob@1x.jpg';
import backgroundMob2 from '../../assests/img/login_mob@2x.jpg';

import backgroundDesk from '../../assests/img/login_deskt@1x.jpg';
import backgroundDesk2 from '../../assests/img/login_deskt@2x.jpg';

export const LoginPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundMob });
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
   
    @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${backgroundMob2});
    }

    @media only screen and (max-width: 767px) {
      backdrop-filter: blur(50px);
}
    @media only screen and (min-width: 768px) {
        background-image: url(${loginImg});
 

        @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${loginImg2});
    }
    }
    @media only screen and (min-width: 1280px){
      background-image: url(${backgroundDesk});
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${backgroundDesk2});
    }
    
    }
`;


