import styled from 'styled-components';

import backgroundMob from '../../assests/img/registr_mobile@1x.jpg';
import backgroundMob2 from '../../assests/img/registr_mobile@2x.jpg';

import backgroundTab from '../../assests/img/registr_tablet@1x.jpg';
import backgroundTab2 from '../../assests/img/registr_tablet@2x.jpg';

import backgroundDeck from '../../assests/img/registr_desktop@1x.jpg';
import backgroundDeck2 from '../../assests/img/registr_desktop@2x.jpg';

export const RegPageContainer = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-image: url(${backgroundMob});
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
        background-image: url(${backgroundTab});
  
        @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${backgroundTab2});
    }
    }

    @media only screen and (min-width: 1280px){
      background-image: url(${backgroundDeck});
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${backgroundDeck2});
    }
    
    }
`;

export const LogoStyled = styled.div`    
  width: 182px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center; 
  
`