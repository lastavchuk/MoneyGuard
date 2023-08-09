import styled from 'styled-components';
export const RegContainer = styled.div`
    /* display: flex; */
    /* justify-content: center; */
    width: 100%;
    height: 100vh;
    border-radius: 8px;
    /* form effects */
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);

    h1 {
        /* display: flex; */
        width: 182px;
        height: 40.026px;
        flex-direction: column;
        justify-content: center;
        font-family: Poppins;
        font-size: 26.963px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        margin-bottom: 10px;
    }
    @media only screen and (max-width: 767px) {
    }
    @media only screen and (min-width: 768px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: auto;
        width: 533px;
        height: 613px;
        background: var(--form-color);
        backdrop-filter: blur(50px);
    }
`;

export const RegFormStyled = styled.form`
    padding-top: 50px;
    /* display: flex; */
    flex-direction: column;
    gap: 15px;
    width: 280px;
    margin: 0 auto;

    input {
        padding: 0 20px 8px;
        cursor: pointer;
        border: none;
    }
    h3 {
        margin: 0 auto 40px;
        color: var(--white, #fbfbfb);
        font-size: 27px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    svg {
        margin: 0 0 8px 0;
    }

    @media only screen and (min-width: 768px) {
        width: 409px;

        input {
            height: 36px;
            padding: 0 20px 8px;
            box-sizing: border-box;
        }

        svg {
            margin: 0px 0px 8px 0px;
        }
    }
`;

export const NavBtn = styled.button`
    color: var(--text-button, #623f8b);
    width: 280px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid #4a56e2;
    background: #fcfcfc;
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);

    @media only screen and (min-width: 768px) {
        width: 300px;
        margin: 0 auto;
        display: block;
    }
`;
export const Button = styled.button`
    color: var(--white, #fbfbfb);
    width: 280px;
    height: 50px;
    flex-shrink: 0;
    transition: background-color 0.5s;
    border-radius: 20px;
    display: block;
    background: var(
        --button-gradient,
        linear-gradient(167deg, #ffc727 0%, #9e40ba 61.46%, #7000ff 90.54%)
    );
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    padding: 13px 112px;

    @media only screen and (min-width: 768px) {
        margin: 40px auto 20px;
        width: 300px;

        &.login {
            margin: 12px auto 20px;
        }
    }
`;
