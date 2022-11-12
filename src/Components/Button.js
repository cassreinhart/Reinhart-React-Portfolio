import React from 'react'

const Button = ({ color, text}) => <button className='btn' style={{backgroundColor: color}}>{text}</button>

Button.defaultProps = {
    color: '#dbf4a7',
    text: 'Enter'
}

export default Button