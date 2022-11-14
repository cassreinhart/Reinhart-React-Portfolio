import React from 'react'

const Button = ({ color, text}) => <button className='btn' style={{backgroundColor: color}}>{text}</button>

Button.defaultProps = {
    color: '#2e2f4d',
    text: 'Enter'
}

export default Button