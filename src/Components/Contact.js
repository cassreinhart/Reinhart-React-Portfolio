import React from 'react'
// import Button from './Components/Button';

const Contact = (props) => {
  return (
    <div className='contact'>
        <h2>Contact Me</h2>
        {/* <ul>
            <li><Button text="Email Me" color="#2e2f4d" href="mailto:cassandrareinhart@gmail.com"/></li>
            <li><Button text="Contact Me" color="#2e2f4d" href="{props.linkedIn}"/></li>
        </ul> */}
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