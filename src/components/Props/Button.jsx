
const Button = (props) => {
  const {label, className} = props;

  return (
    <button className={`button ${className}`}>{label}</button>
  )
}

export default Button