import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
      <div className='title'>
        <h1>{props.name}</h1>
        <h2>Software Developer</h2>
      </div>
      <div className='greeting'>
        <p>I learn new things quickly in order to find effective solutions using modern technology.</p>
        <small>a.k.a. I love to learn and I love to teach!</small>
      </div>
    </header>
  )
}

Header.defaultProps = {
    title: "Portfolio",
    name: "Cassandra Reinhart",
    email: 'cassandrareinhart13@gmail.com',
    github: 'https://github.com/cassreinhart',
    linkedIn: 'https://www.linkedin.com/in/cassandra-reinhart/'
}

Header.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string
}

export default Header