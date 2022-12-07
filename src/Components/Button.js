import React from 'react'

const Button = ({ color, text, href}) => <a href={href} target="_blank" className='btn' style={{backgroundColor: color}}>{text}</a>

Button.defaultProps = {
    color: '#dbf4a7',
    text: 'Enter'
}

export default Button