import { ButtonComponent } from './styles';
import { ButtonProps } from './types';

function Button({disabled = false, name, isRedFont = false, type = 'button', onClick}: ButtonProps) {
  return (
    <ButtonComponent disabled = {disabled} className='button-component' type={type} $isRedFont = {isRedFont} onClick = {onClick}>
      {name}    
    </ButtonComponent>
  );
}

export default Button;