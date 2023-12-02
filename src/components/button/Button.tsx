import './styles.css'

interface buttonProps {
  name: string;
  type: string;
  onClick: () => void;
}

function Button({name, type, onClick}: buttonProps) {
  return (
    <button className='button-component'>
      {name}
    </button>
  );
}

export default Button;