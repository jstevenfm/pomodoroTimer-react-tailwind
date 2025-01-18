const RadioButton = ({ htmlFor, id, text, checked}) => {
  return (
    <label className="rounded-full px-4 py-4 font-semibold cursor-pointer text-center" htmlFor={htmlFor}>
      <input className="hidden" type="radio" name="status" id={id} defaultChecked={checked}/>
      {text}
    </label>
  )
}

export default RadioButton