import styled from 'styled-components';
import { SlArrowDown } from 'react-icons/sl';

const breakpoints = {
  tablet: `@media only screen and (min-width: 768px)`,
  desktop: `@media only screen and (min-width: 1280px)`,
};

export const selectStyles = {
  control: styles => ({
    ...styles,
    width: '280px',
    height: '50px',
    color: '#FBFBFB',
    borderRadius: '8px',
    padding: '12px 20px',
    fontSize: '16px',
    cursor: 'pointer',
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

export const SelectIcon = styled(SlArrowDown)`
  color: ${({ theme }) => theme.colors.primaryFont};
  width: 30px;
  height: 20px;
`;

export const selectStylesCategory = {
  ...selectStyles,
  container: styles => ({
    ...styles,
    width: '100%',
  }),
  control: styles => ({
    ...styles,
    width: '100%',
    border: 0,
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


