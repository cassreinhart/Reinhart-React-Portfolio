import React from 'react'

const Footer = (props) => {
  return (
    <footer style={{backgroundColor: '#4f536f'}}>
        <ul>
            <li><a href={props.github}>GitHub</a></li>
            <li><a href={props.linkedin}>LinkedIn</a></li>
            <li><a href={props.twitter}>Twitter</a></li>
        </ul>
        <small> &#169; 2022   {props.name}</small>
    </footer>
  )
}

Footer.defaultProps = {
  title: "Portfolio",
  name: "Cassandra Reinhart",
  email: 'cassandrareinhart13@gmail.com',
  github: 'https://github.com/cassreinhart',
  linkedin: 'https://www.linkedin.com/in/cassandra-reinhart/',
  twitter: 'https://twitter.com/cassandra_codes'
}

export default Footer