import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import {
  SelectIcon,
  selectStylesCategory,
  selectStyles,
} from './CustomSelect.styled';

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <SelectIcon />
      </components.DropdownIndicator>
    )
  );
};

export const CustomSelect = ({ options, onChange, nameOfSelect, defValue }) => {
  return (
    <>
      {nameOfSelect === 'category' ? (
        <Select
          components={{ DropdownIndicator }}
          defaultValue={defValue ? defValue : options[0]}
          options={options}
          styles={selectStylesCategory}
          onChange={onChange}
          name={nameOfSelect}
        />
      ) : (
        <Select
          components={{ DropdownIndicator }}
          defaultValue={defValue ? defValue : options[0]}
          options={options}
          styles={selectStyles}
          onChange={onChange}
          name={nameOfSelect}
        />
      )}
    </>
  );
};

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  nameOfSelect: PropTypes.string.isRequired,
  defValue: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};
