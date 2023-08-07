import styled from 'styled-components';
export const RegContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    display: flex;
    justify-content: center;
    width: 533px;
    height: 613px;
    border-radius: 8px;
    background: var(--form-color, rgba(255, 255, 255, 0.1));

    /* form effects */
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    h1 {
        display: flex;
        width: 182px;
        height: 40.026px;
        flex-direction: column;
        justify-content: center;
        /* color: var(--white, #fbfbfb); */
        font-family: Poppins;
        font-size: 26.963px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        margin-bottom: 10px;
    }
`;

export const RegFormStyled = styled.form`
    /* background: var(--form-color, rgba(255, 255, 255, 0.1)); */
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    label {
    }

    input {
        stroke-width: 1px;
        stroke: rgba(255, 255, 255, 0.4);
        padding: 10px 15px;
        cursor: pointer;
        border: none;
        border-bottom: 1px solid black;
    }
`;

export const NavBtn = styled.button`
    color: var(--text-button, #623f8b);
    width: 300px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid #4a56e2;
    background: #fcfcfc;
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
`;
export const Button = styled.button`
    color: var(--white, #fbfbfb);
    width: 300px;
    height: 50px;
    flex-shrink: 0;
    transition: background-color 0.5s;
    border-radius: 20px;
    background: var(
        --button-gradient,
        linear-gradient(167deg, #ffc727 0%, #9e40ba 61.46%, #7000ff 90.54%)
    );
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
    margin-top: 10px;
    padding: 13px 112px;
`;
