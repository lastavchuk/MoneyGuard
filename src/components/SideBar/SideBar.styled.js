import styled from 'styled-components';
import currency_desk from '../../assests/images/currency_desk.png';
import currency_desk_2x from '../../assests/images/currency_desk@2x.png';
import currency_table from '../../assests/images/currency_tablet.png';
import currency_table_2x from '../../assests/images/currency_tablet@2x.png';
import currency_mobile from '../../assests/images/currency_mobile.png';
import currency_mobile_2x from '../../assests/images/currency_mobile.png';

import line_desc_1x from '../../assests/images/line_desc_1x.png';
import line_desc_2x from '../../assests/images/line_desc_2x.png';
import line_desc_tab_1x from '../../assests/images/line_desc_tab_1x.png';
import line_desc_tab_2x from '../../assests/images/line_desc_tab_2x.png';
import line_desc_mob_1x from '../../assests/images/line_desc_mob_1x.png';
import line_desc_mob_2x from '../../assests/images/line_desc_mob_2x.png';

export const MainContainer = styled.div`
    @media screen and (min-width: 320px) {
    }

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-around;
    }

    @media screen and (min-width: 1280px) {
        display: block;
        width: 481px;
        height: 641px;
        border-right: 1px solid white;
    }
`;

export const UpperContainer = styled.div`
    @media screen and (min-width: 320px) {
        width: 200px;
    }

    @media screen and (min-width: 768px) {
        width: 400px;
        margin: 0 32px 0 32px;
    }

    @media screen and (min-width: 1280px) {
        padding-bottom: 32px;
        width: 480px;
        height: 246px;
        margin: 0;
    }
`;

export const DownContainer = styled.div`
    @media screen and (min-width: 320px) {
    }

    @media screen and (min-width: 768px) {
        width: 336px;
        height: 214px;
        margin-right: 32px;
        background-color: var(--select-background-color);
        border-radius: 0 0 8px 8px;
    }

    @media screen and (min-width: 1280px) {
        width: 480px;
        height: 360px;
        background-color: var(--select-background-color);
    }
`;

export const Graphics = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (min-width: 320px) {
        /* margin-top: 61px;
        width: 320px;
        height: 214px;
        background-image: url(${currency_mobile});
        @media (min-device-pixel-ratio: 2) {
            background-image: url(${currency_mobile_2x});
        } */
    }

    @media screen and (min-width: 768px) {
        margin-top: 15px;
        width: 336px;
        height: 88px;
        background-image: url(${currency_table});
        @media (min-device-pixel-ratio: 2) {
            background-image: url(${currency_table_2x});
        }
    }

    @media screen and (min-width: 1280px) {
        margin-top: 61px;
        width: 480px;
        height: 167px;
        background-image: url(${currency_desk});
        @media (min-device-pixel-ratio: 2) {
            background-image: url(${currency_desk_2x});
        }
    }
`;

export const Line = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (min-width: 320px) {
        /* position: relative;
        background-image: url(${line_desc_mob_1x});
        width: 480px;
        height: 102px;
        top: -190px;
        @media (min-device-pixel-ratio: 2) {
            background-image: url(${line_desc_mob_2x});
        } */
    }

    @media screen and (min-width: 768px) {
        position: relative;
        background-image: url(${line_desc_tab_1x});
        width: 336px;
        height: 72px;
        top: -100px;
        @media (min-device-pixel-ratio: 2) {
            background-image: url(${line_desc_tab_2x});
        }
    }

    @media screen and (min-width: 1280px) {
        position: relative;
        background-image: url(${line_desc_1x});
        width: 480px;
        height: 102px;
        top: -190px;
        @media (min-device-pixel-ratio: 2) {
            background-image: url(${line_desc_2x});
        }
    }
`;


