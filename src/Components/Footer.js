import React from 'react'

const Footer = (props) => {
  return (
    <footer>
        <div>
            <a href={props.github}>GitHub</a>
            <a href={props.linkedin}>LinkedIn</a>
            <a href={props.twitter}>Twitter</a>
        </div>
        <small>&#169 2022   Cassandra Reinhart Software Developer</small>
    </footer>
  )
}

export default Footer