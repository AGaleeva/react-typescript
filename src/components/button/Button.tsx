import './styles.css'

interface buttonProps {
  name: string; 
  resResults: () => void;
}

function Button({name, resResults}: buttonProps) {
  return (
    <button className='button-component' onClick = {resResults}>
      {name}    
    </button>
  );
}

export default Button;