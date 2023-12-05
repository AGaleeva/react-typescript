import { InputProps } from './types'
import { InputContainer, InputLabel, InputComponent } from './styles'

function Input({ 
  placeholder, 
  disabled, 
  label, 
  name, 
  value, 
  onChange,
  type 
}: InputProps) {

  const inputID = `${name}-${Math.random()}`;

  return (
    <InputContainer>
      <InputLabel htmlFor={inputID}>{label}</InputLabel>
      <InputComponent
        value={value}
        onChange={onChange}        
        id={inputID}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        type = {type}
      />
    </InputContainer>
  );
}

export default Input;