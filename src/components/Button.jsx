const Button = ({color,texto,onClick}) => {
    return (
        <button onClick={onClick} style={{backgroundColor: color}}className='btn'>{texto}</button>
    )
  }
  
export default Button
  