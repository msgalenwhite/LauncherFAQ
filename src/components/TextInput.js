import React from 'react'

const TextInput = props => {

  return(
    <div>
      <label htmlFor={props.name}>
        {props.label}
      </label>
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default TextInput
