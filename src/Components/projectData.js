import hackOrSnooze from './hack-or-snooze.png'
import imgman from './imgman.png'
import boggle from './boggle.png'

const projects = [
    {
        id: 1,
        title: 'Hack or Snooze',
        image: hackOrSnooze,
        video: null,
        url: 'https://cassreinhart.github.io/hack-or-snooze/#',
        tech: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        github: 'https://github.com/cassreinhart/hack-or-snooze'
    },
    {
        id: 2,
        title: 'imgman',
        image: imgman,
        video: 'https://youtu.be/krUEr4EccdY',
        url: 'https://imgman.herokuapp.com/',
        tech: ['JavaScript', 'Bootstrap', 'CSS', 'HTML', 'Django Templates'],
        github: 'https://github.com/cassreinhart/imgman'
    },
    {
        id: 3,
        title: 'Project Management App',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg',
        video : null,
        url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=2220s',
        tech: ['Python/Flask', 'SQLAlchemy', 'PostgreSQL', 'RESTful APIs', 'JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/cassreinhart/Capstone-1'
    },
    {
        id: 4,
        title: 'Boggle',
        image: boggle,
        video: 'https://www.google.com',
        url: null,
        tech: ['Python/Flask', 'JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/cassreinhart/flask-boggle'
    },
]

export {projects} from './projectData';