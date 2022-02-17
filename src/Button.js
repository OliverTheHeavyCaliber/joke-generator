function Button(props) {
  return (
    <button onClick={() => props.fetchData()}>Get new joke</button>
  )
}

export default Button;