import styled from 'styled-components';

export const ModalWraper = styled.div``;

export const ModalContainer = styled.div`
    padding-top: 15px;
    @media only screen and (max-width: 768px) {
        padding-top: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const Title = styled.p`
    margin-bottom: 52px;
    text-align: center;
    font-size: 18px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;

export const CloseBtn = styled.button``;

export const LogotipStyled = styled.div`
    display: none;
    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-bottom: 52px;

        h3 {
            color: var(--white, #fbfbfb);
            font-size: 27px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
`;
