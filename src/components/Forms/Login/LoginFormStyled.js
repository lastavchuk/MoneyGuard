import styled from 'styled-components';
export const LogContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    display: flex;
    justify-content: center;
    width: 533px;
    height: 570px;
    border-radius: 8px;
    background: var(--form-color, rgba(255, 255, 255, 0.3));

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
export const LogFormStyled = styled.form`
    /* background: var(--form-color, rgba(255, 255, 255, 0.1)); */
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;

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
