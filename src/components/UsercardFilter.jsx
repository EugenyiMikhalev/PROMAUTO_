import React from 'react';
import Select, {components} from 'react-select';

// Добавление чекбокса 
const Option = props => (
  <div>
    <components.Option {...props}>
      <input className='options-checkbox css-checkbox' type="checkbox" checked={props.isSelected} onChange={() => null} />{" "}
      <label>{props.label}</label>
    </components.Option>
  </div>
);

export default function PostFilter({names, value, onChange}) {

  // массив опций для дропдауна
  const options = names.map(name => (
    {value: name,
     label: name}
    ))
    
  return (
    <div>
        <Select
          value={value}
          className="myclass"
          classNamePrefix="myclass"
          // убираем лишний элемент и добавляем опции с чекбоксом
          components={{
            IndicatorSeparator: () => null,
            Option,
          }}
          defaultValue={null}
          // стили
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: state.isFocused || state.isActive || state.menuIsOpen ? '#545454' :'#545454',
              width: '400px',
              borderRadius: '10px !important',
              height: '50px',
              border: state.isFocused || state.isActive || state.menuIsOpen ? '0 !important' : '0 !important',
              boxShadow: state.isFocused ? 0 : 0,
              '&:hover': {
                  border: state.isFocused ? 0 : 0 },
              fontWeight:'600',
              fontSize: '12px',
              lineHeight: '20px',
              fontFamily: "'Roboto', sans-serif",
              color: '#fff !important',
            }),
            placeholder: (baseStyles, state) => ({
              ...baseStyles,
              fontWeight:'600',
              fontSize: '12px',
              lineHeight: '20px',
              color: state.isActive || state.isFocused ? '#545454 !important' : '#fff !important',
              content: "'Select name...'",
              fontFamily: "'Roboto', sans-serif",
            }),
            input:(baseStyles, state) => ({
              ...baseStyles,
              color: state.isFocused ? '#fff !important' : '#fff !important',
              opacity: state.isFocused || state.isActive ? '0 !important' : '1 !important',
              fontFamily: "'Roboto', sans-serif",
              
            }),
            dropdownIndicator:(baseStyles, state) => ({
              ...baseStyles,
              color: state.isFocused ? '#fff !important' : '#fff !important',
              transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'all .2s'
            }),
            menu: (baseStyles, state) => ({
              ...baseStyles,
              width: '400px',
              color: state.isFocused ? '#fff !important' : '#fff !important',
              backgroundColor: state.isFocused ? '#7B7B7B' :'#545454',
              borderRadius: '10px !important',
              padding: '0 !important',
              height: 'fit-content',
              scrollbarWidth: '0',
            }),
            option:(baseStyles, state) => ({
              ...baseStyles,
              color: state.isFocused ? '#fff' : '#fff',
              backgroundColor: state.isFocused ? '#7B7B7B' :'#545454',
              width: '400px',
              height: '40px',
              fontFamily: "'Roboto', sans-serif",
              fontWeight: '600',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 16px',
            }),
            multiValueLabel:(baseStyles, state) => ({
              display: 'none !important'
            }),
            multiValueRemove: (baseStyles, state) => ({
              display: 'none !important'
            }),
            clearIndicator: (baseStyles, state) => ({
              display: 'none !important'
            }),
            multiValue:(baseStyles, state) => ({
              display: 'none !important'
            }),
            
          }}
          
          placeholder='Select a name'
          // изменяем placeholder инпута при фокусе
          onFocus={(e) => {
            e.target.placeholder = "Enter a name"
            
          }}
          // возвращаем placeholder 
          onBlur={(e) => {
            e.target.placeholder = "Select a name"

          }}
          closeMenuOnSelect={true}
          isMulti
          hideSelectedOptions={false}
          options={options}
          onChange={event => {
            onChange(event)}}
        />
      </div>
  )
}