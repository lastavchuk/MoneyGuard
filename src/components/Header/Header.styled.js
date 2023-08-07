import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    height: 60px;
    padding: 12px 20px;
    background: var(--header-background-color);
    box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
        0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;
    display: flex;
    align-items: center;

    div {
        text-align: center;
        width: 115px;
        margin-right: auto;
    }

    p {
        font-size: 13px;
    }

    svg {
        display: inline-block;
        /* height: 22px;
  width: 23px;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor; */
    }

    span {
        margin-right: 8px;
        color: var(--white-60);
    }

    button {
        width: 18px;
        height: 18px;
        background-color: transparent;
        color: var(--white-60);
        box-shadow: none;
        text-align: right;
    }

    @media only screen and (min-width: 768px) {
        height: 80px;
        padding: 16px;
        p {
            font-size: 17px;
        }
        span {
            margin-right: 12px;
        }
        button {
            width: 69px;
            height: 30px;
            border-left: 1px solid var(--white-60);
        }
    }
`;
