import { InputProps } from './types'
import { InputComponent } from './styles'

function Input({ placeholder, disabled, label }: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <InputComponent
        type="text"
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
}

export default Input;