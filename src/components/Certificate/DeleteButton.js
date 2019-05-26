import React from 'react';

const Button = React.memo(props => {
  return (
    <button onClick={props.clicked} data={props.data} >{props.label}</button>
  )
});

export default Button;