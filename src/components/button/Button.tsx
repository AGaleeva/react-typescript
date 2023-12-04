import './styles.css'

interface ButtonProps {
  name: string; 
  resResults: () => void;
}

function Button({name, resResults}: ButtonProps) {
  return (
    <button className='button-component' onClick = {resResults}>
      {name}    
    </button>
  );
}

export default Button;