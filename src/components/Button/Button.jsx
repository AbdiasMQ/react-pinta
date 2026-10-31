import './Button.css';
const Button = ({text, className , callback}) => {
  return (
    <button className={className} onClick={callback}>
      {text} 
    </button>
  );
};

export default Button
