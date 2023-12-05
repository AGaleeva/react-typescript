import { InputProps } from './types'
import { InputContainer, InputLabel, InputComponent } from './styles'

function Input({ placeholder, disabled, label, name }: InputProps) {
  const inputID = `${name}-${Math.random()}`;
  return (
    <InputContainer>
      <InputLabel htmlFor={inputID}>{label}</InputLabel>
      <InputComponent
        id={inputID}
        name={name}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
      />
    </InputContainer>
  );
}

export default Input;