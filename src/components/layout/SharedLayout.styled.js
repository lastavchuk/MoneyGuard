import styled from 'styled-components';
import backgroundGradient from '../../assests/images/home_desk@1x.webp';
import backgroundGradientRetina from '../../assests/images/home_desk@2x.webp';
import backgroundGradientTab from '../../assests/images/gradient_tab@1x.webp';
import backgroundGradientTabRetina from '../../assests/images/gradient_tab@2x.webp';
import backgroundGradientMob from '../../assests/images/gradient_mob@1x.webp';
import backgroundGradientMobRetina from '../../assests/images/gradient_mob@2x.webp';

export const StyledSharedLayout = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-image: url(${backgroundGradientMob});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: var(--background);

    @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${backgroundGradientMobRetina});
    }

    @media only screen and (min-width: 768px) {
        background-image: url(${backgroundGradientTab});

        @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url(${backgroundGradientTabRetina});
        }
    }

    @media only screen and (min-width: 1280px) {
        background-image: url(${backgroundGradient});

        @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url(${backgroundGradientRetina});
        }
    }
`;
