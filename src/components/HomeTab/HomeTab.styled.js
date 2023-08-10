import styled from 'styled-components';

export const StyledHomeTab = styled.div`
    width: 100%;
    padding: 0 20px;

    button.add {
        display: flex;
        position: fixed;
        align-items: center;
        justify-content: center;
        bottom: 40px;
        right: 40px;
        width: 44px;
        height: 44px;
        background: var(--gradient-button);
        border-radius: 50%;
        font-size: 30px;
        color: var(--white);
        box-shadow: var(--button-shadow);
    }

    p.animationText {
        font-size: 40px;
        background: linear-gradient(to right, #1f1a36, #ffffff, #332b75);
        background-size: 200% 100%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradientMove 2s linear infinite;
    }

    @media only screen and (min-width: 768px) {
        padding: 0px;

        button.add {
            position: absolute;
        }

        p.animationText {
            font-size: 45px;
            text-align: center;
        }
    }

    @media only screen and (min-width: 1280px) {
        width: 800px;
        padding: 46px 16px 46px 69px;
        p.animationText {
            font-size: 52px;
        }
    }
`;
