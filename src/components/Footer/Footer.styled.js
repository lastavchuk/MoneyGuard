import styled from 'styled-components';

export const StyledFooter = styled.footer`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: absolute; */
    bottom: 0;
    width: 100%;

    @media only screen and (min-width: 768px) {
        position: absolute;
        font-size: 17px;
    }
    
`;
export const FooterText = styled.p`
    color: var(--white-60);
    font-size: 13px;
    @media only screen and (min-width: 768px) {
        font-size: 17px;
    }
`;

export const FooterLink = styled.a`
    margin-left: 10px;
    font-size: 13px;
    color: white;
    /* color: var(--white-60); */

    &:hover {
        color: aquamarine;
    }
    @media only screen and (min-width: 768px) {
        font-size: 17px;
    }
`;
