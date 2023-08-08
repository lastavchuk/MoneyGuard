import styled from 'styled-components';

export const StyledMain = styled.main`
  flex-grow: 1;

  @media only screen and (min-width: 1280px) {
    background: rgb(73, 32, 101);
    background: linear-gradient(
        338deg,
        rgba(56, 44, 123, 1) 12%,
        rgba(62, 30, 90, 1) 48%,
        rgba(35, 28, 61, 1) 87%
      ),
      linear-gradient(
        300deg,
        rgba(56, 45, 126, 1) 26%,
        rgba(65, 32, 96, 1) 64%,
        rgba(65, 32, 96, 1) 65%
      );
  }
`;
