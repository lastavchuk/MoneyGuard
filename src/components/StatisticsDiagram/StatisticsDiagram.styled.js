import styled from 'styled-components';

export const StyledDiagram = styled.div`
    position: relative;
    display: flex;
    width: 288px;
    height: 288px;
    @media only screen and (min-width: 768px) {
        width: 336px;
        height: 336px;
    }
    @media only screen and (min-width: 1280px) {
        width: 288px;
        height: 288px;
    }
`;
export const StyledSpan = styled.span`
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
`;
