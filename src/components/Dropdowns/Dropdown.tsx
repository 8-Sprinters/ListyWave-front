import Select from 'react-select';

interface OptionsProps {
  value: string;
  label: string;
}

interface DropdownProps {
  name: string;
  options: OptionsProps[];
  isSearchable?: boolean;
  onChange?: any;
}

const selectStyles = {
  control: (provided: object, state: { isFocused: boolean }) => ({
    ...provided,
    maxWidth: '200px',
    backgroundColor: 'white',
    boxShadow: 'none',
    border: state.isFocused ? '1px solid lightgray' : '1px solid white',
    borderRadius: '8px',
    cursor: 'pointer',
    '&:hover': {
      borderColor: 'none',
    },
  }),
  singleValue: (provided: object) => ({
    ...provided,
    fontSize: '1.3rem',
  }),
  option: (provided: object, { isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }) => ({
    ...provided,
    backgroundColor: isSelected || isFocused ? 'lightgray' : 'white',
    color: 'black',
    fontSize: '1.3rem',
  }),
  menu: (provided: object) => ({
    ...provided,
    maxWidth: '320px',
    boxShadow: '0px 2px 12px 0px rgba(0, 0, 0, 0.08)',
    borderRadius: '8px',
    border: `1px solid gray`,
  }),
};

function Dropdown({ name, options, isSearchable = false, onChange }: DropdownProps) {
  return (
    <Select
      id={name}
      instanceId={name}
      options={options}
      styles={selectStyles}
      isSearchable={isSearchable}
      defaultValue={options[0]}
      onChange={onChange}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
}

export default Dropdown;
