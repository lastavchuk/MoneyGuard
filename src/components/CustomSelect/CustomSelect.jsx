import Select, { components } from 'react-select';
import {
  SelectIcon,
  selectStyles,
  selectStylesCategory,
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