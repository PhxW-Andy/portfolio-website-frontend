// import framer motion
import { motion } from 'framer-motion'

const Skills = ({ skills }) => {
  const { data } = skills

  return (
    <div className="container skills" id="skills">
      <h3>Skills</h3>
      {data.map((item, index) => (
        <div key={index}>
          <strong>{item.attributes.title}:</strong>
          {item.attributes.skills.map((skill, index) => (
            <span key={index}>{skill.name}</span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Skills
