import styled from 'styled-components';

export const StyledSelectors = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;
    .react-select {
        &__control {
            width: 182px !important;
            height: 50px !important;
            flex-shrink: 0 !important;
            border-radius: 8px !important;
            border: 1px solid rgba(255, 255, 255, 0.6) !important;
            background: rgba(74, 86, 226, 0.1) !important;
        }
        &__menu {
            width: 182px !important;
            color: black;
        }
        &__indicator-separator {
            display: none !important;
        }

        &__single-value {
            color: #fbfbfb;
        }
    }
`;
