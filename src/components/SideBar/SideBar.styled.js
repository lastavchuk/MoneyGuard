import styled from 'styled-components';
import currency_desk from '../../assests/images/currency_desk.png';
import line_desc_1x from '../../assests/images/line_desc_1x.png'

export const MainContainer = styled.div`
    background-color: var(--background);
`;

export const UpperContainer = styled.div`
    padding-bottom: 32px;
    width: 480px;
    height: 246px;
    position: relative;
    z-index: 2;
`;

export const DownContainer = styled.div`
    width: 480px;
    height: 360px;
    position: relative;
    z-index: 2;
`;

export const ElipceOne = styled.div`
    position: absolute;
    width: 739px;
    height: 745px;
    left: -220px;
    top: -170px;

    background: linear-gradient(
        219.62deg,
        rgba(109, 84, 235, 0.6) 28.31%,
        rgba(101, 35, 146, 0.6) 66.76%
    );
    filter: blur(200px);
    z-index: 1;
`;

export const ElipceTwo = styled.div`
    position: absolute;
    width: 760px;
    height: 766px;
    left: -193px;
    top: 263px;
    background: linear-gradient(207.18deg, #341fa0 46.11%, #652392 63.65%);
    filter: blur(200px);
    z-index: 1;
`;

export const Graphics = styled.div`
    margin-top: 61px;
    width: 480px;
    height: 167px;
    background-image: url(${currency_desk});
`;

export const Line = styled.div`
    position: absolute;
    background-image: url(${line_desc_1x});
    width: 480px;
    height: 102px;
    top: 200px;
`
