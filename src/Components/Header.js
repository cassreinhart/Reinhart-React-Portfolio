import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
        <h1>Welcome to My {props.title}</h1>
        <h1 style={{ color: '#9b70bb', backgroundColor: '#2d2633'}}>{props.name}</h1>
      <h2>Software Developer</h2>
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