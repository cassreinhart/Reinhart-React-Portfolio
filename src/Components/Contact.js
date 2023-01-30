import React from 'react'
import Button from './Button';

const Contact = (props) => {
  return (
    <div className='contact'>
      <ul>
            <li><Button text="Email Me" color="#2e2f4d" href="mailto:cassandrareinhart@gmail.com"/></li>
            <li><Button text="Contact Me" color="#2e2f4d" href="https://www.linkedin.com/in/cassandra-reinhart/"/></li>
         </ul>
    </div>
  )
}

Contact.defaultProps = {
    name: "Cassandra Reinhart",
    email: 'cassandrareinhart13@gmail.com',
    github: 'https://github.com/cassreinhart',
    linkedIn: 'https://www.linkedin.com/in/cassandra-reinhart/'
}

export default Contact