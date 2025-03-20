const ButtonControlTimer = ({ title, className, children }) => {
  return (
    <button className={className} title={title}>
      {children}
    </button>
  )
}

export default ButtonControlTimer