import styled from 'styled-components';
export const LogContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    border-radius: 8px;
    /* background-color: var(--background); */

    /* form effects */
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    /* backdrop-filter: blur(50px); */
    /* background: var(--form-color); */
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

    @media only screen and (min-width: 768px) {
        width: 533px;
        height: 570px;
        background: var(--form-color);
        backdrop-filter: blur(50px);
    }
`;
export const LogFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;

    input {
        padding: 10px 15px;
        cursor: pointer;
        border: none;
    }

    @media only screen and (max-width: 767px) {
    }
    @media only screen and (min-width: 768px) {
        padding-top: 50px;
    }
`;
export const LogotipStyled = styled.div`
    
    margin-top:97px;
    margin-bottom:52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        margin: 0 auto;
        color: var(--white, #fbfbfb);
        font-size: 19px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    @media only screen and (min-width: 768px) {
        font-size: 27px;
       
        margin: 0 auto;
        width: 182px;
    }
`;
