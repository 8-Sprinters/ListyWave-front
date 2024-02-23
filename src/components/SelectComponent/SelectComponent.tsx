import Select from 'react-select';

interface OptionsProps {
  value: string;
  label: string;
}

interface SelectProps {
  name: string;
  options: OptionsProps[];
  defaultValue?: OptionsProps;
  isSearchable?: boolean;
  onChange?: any;
}

const selectStyles = {
  control: (provided: object, state: { isFocused: boolean }) => ({
    ...provided,
    maxWidth: '320px',
    backgroundColor: 'white',
    boxShadow: 'none',
    border: 0,
    borderRadius: '8px',
    cursor: 'pointer',
    '&:hover': {
      borderColor: 'none',
      backgroundColor: '#EBF4FF',
    },
  }),
  singleValue: (provided: object) => ({
    ...provided,
    fontSize: '1.3rem',
  }),
  option: (provided: object, { isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }) => ({
    ...provided,
    backgroundColor: isSelected || isFocused ? '#EBF4FF' : 'white',
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

function SelectComponent({ name, options, defaultValue, isSearchable = false, onChange }: SelectProps) {
  return (
    <Select
      id={name}
      instanceId={name}
      options={options}
      styles={selectStyles}
      isSearchable={isSearchable}
      defaultValue={defaultValue}
      onChange={onChange}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
}

export default SelectComponent;
