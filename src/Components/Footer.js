import React from 'react'

const Footer = (props) => {
  return (
    <footer style={{backgroundColor: '#4f536f'}}>
        <ul>
            <li><a href={props.github}>GitHub</a></li>
            <li><a href={props.linkedin}>LinkedIn</a></li>
            <li><a href={props.twitter}>Twitter</a></li>
        </ul>
        <small> &#169; 2022   Cassandra Reinhart</small>
    </footer>
  )
}

export default Footer