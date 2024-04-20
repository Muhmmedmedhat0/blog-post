interface ButtonProps {
  className: string;
  type: 'button' | 'submit' | 'reset';
  title: string;
}

function Button({ className, type, title }: ButtonProps) {
  return (
    <button className={className} type={type}>
      {title} &rarr;
    </button>
  );
}

export default Button;
