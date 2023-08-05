import { SlArrowDown } from 'react-icons/sl';
import styled from 'styled-components';


const breakpoints = {
  tablet: `@media only screen and (min-width: 768px)`,
  desktop: `@media only screen and (min-width: 1280px)`,
};

export const selectStyles = {
  control: styles => ({
    ...styles,
    width: '280px',
    height: '50px',
    padding: '12px 20px',
    fontSize: '16px',
    color: '#FBFBFB',
    cursor: 'pointer',
    backgroundColor: 'rgba(74, 86, 226, 0.10)',
    border: '1px solid rgba(255, 255, 255, 0.60)',
    borderRadius: '8px',
    [breakpoints.tablet]: {
      width: '160px',
    },
    [breakpoints.desktop]: {
      width: '182px',
    },
  }),
  valueContainer: styles => ({ ...styles, padding: '0', margin: '0' }),
  indicatorSeparator: styles => ({ ...styles, display: 'none' }),
  dropdownIndicator: (styles, state) => ({
    ...styles,
    padding: '0',
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),
  singleValue: styles => ({ ...styles, margin: '0', color: '#FBFBFB' }),
  input: styles => ({ ...styles, padding: '0', margin: '0' }),
  menu: styles => ({
    ...styles,
    top: '90%',
    width: '280px',
    height: '157px',
    borderRadius: '8px',
    background: `linear-gradient(
      360deg,
      rgba(83, 61, 186, 0.7) 0%,
      rgba(80, 48, 154, 0.7) 35.94%,
      rgba(106, 70, 165, 0.52) 61.04%,
      rgba(133, 93, 175, 0.13) 100%
    )`,
    backdropFilter: `blur(50px)`,
    overflow: 'auto',
    [breakpoints.tablet]: {
      width: '160px',
    },
    [breakpoints.desktop]: {
      width: '182px',
    },
  }),
  menuList: styles => ({
    ...styles,
    width: '280px',
    height: '157px',
    [breakpoints.tablet]: {
      width: '160px',
    },
    [breakpoints.desktop]: {
      width: '182px',
    },
    '::-webkit-scrollbar': {
      width: '7px',
      height: '0px',
      borderRadius: '8px',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(255, 255, 255, 0.10)',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#734AEF',
    },
    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#623F8B',
    },
  }),
  option: (styles, state) => ({
    ...styles,
    cursor: 'pointer',
    color: state.isSelected ? '#FF868D' : null,
    backgroundColor: state.isSelected ? 'rgba(255, 255, 255, 0.10)' : null,
    ':hover': {
      color: '#FF868D',
      backgroundColor: 'rgba(255, 255, 255, 0.10)',
    },
  }),
};

export const selectStylesCategory = {
  ...selectStyles,
  container: styles => ({
    ...styles,
    width: '100%',
  }),
  control: styles => ({
    ...styles,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px',
    color: '#FBFBFB',
    border: 0,
    textAlign: 'left',
    height: '35px',
    padding: '8px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.60)',
    backgroundColor: 'transparent',
    boxShadow: 'none',

    cursor: 'pointer',
  }),
  menu: styles => ({
    ...styles,
    top: '90%',
    width: '100%',
    height: '300px',
    borderRadius: '8px',
    background: `linear-gradient(
      360deg,
      rgba(83, 61, 186, 0.7) 0%,
      rgba(80, 48, 154, 0.7) 35.94%,
      rgba(106, 70, 165, 0.52) 61.04%,
      rgba(133, 93, 175, 0.13) 100%
    )`,
    backdropFilter: `blur(50px)`,
    overflow: 'auto',
  }),
  menuList: styles => ({
    ...styles,
    width: '100%',
    height: '300px',
    '::-webkit-scrollbar': {
      width: '7px',
      height: '0px',
      borderRadius: '8px',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(255, 255, 255, 0.10)',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#734AEF',
    },
    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#623F8B',
    },
  }),
};

export const SelectIcon = styled(SlArrowDown)`
  color: ${({ theme }) => theme.colors.primaryFont};
  height: 20px;
  width: 30px;
`;
