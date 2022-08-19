const Skills = () => {
  return (
    <div className="container skills" id="skills">
      <h3>Skills</h3>
      {skills.map((skill, index) => (
        <div key={index}>
          <strong>{skill.title}:</strong>
          {skill.list.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;

const skills = [
  {
    title: "Frontend",
    list: [
      "HTML",
      "CSS",
      "SCSS / LESS",
      "Vanilla JS",
      "React",
      "Next JS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    list: ["Node JS", "Express", "MongoDB", "Strapi CMS", "GraphQL", "REST"],
  },
  {
    title: "Sonstiges",
    list: ["GIT", "Adobe XD", "Photoshop", "VS Code"],
  },
];
