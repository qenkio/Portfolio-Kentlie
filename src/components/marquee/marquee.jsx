import './marquee.css'
import reactLogo from '../../assets/skills/react.png'
import nextLogo from '../../assets/skills/nextjs.png'
import laravelLogo from '../../assets/skills/laravel.png'
import figmaLogo from '../../assets/skills/figma.png'
import phpLogo from '../../assets/skills/php.png'
import mysqlLogo from '../../assets/skills/mysql.png'
import wordpressLogo from '../../assets/skills/wordpress.png'
import bootstrapLogo from '../../assets/skills/bootstrap.png'
import flutterLogo from '../../assets/skills/flutter.png'
import dartLogo from '../../assets/skills/dart.png'

function Marquee() {
  const skills = [
    {
      name: 'REACT',
      icon: <img src={reactLogo} alt="React" className="skill-icon" />
    },
    {
      name: 'NEXT.JS',
      icon: <img src={nextLogo} alt="Next.js" className="skill-icon" />
    },
    {
      name: 'LARAVEL',
      icon: <img src={laravelLogo} alt="Laravel" className="skill-icon" />
    },
    {
      name: 'FIGMA',
      icon: <img src={figmaLogo} alt="Figma" className="skill-icon" />
    },
    {
      name: 'PHP',
      icon: <img src={phpLogo} alt="PHP" className="skill-icon" />
    },
    {
      name: 'MYSQL',
      icon: <img src={mysqlLogo} alt="MySQL" className="skill-icon" />
    },
    {
      name: 'WORDPRESS',
      icon: <img src={wordpressLogo} alt="WordPress" className="skill-icon" />
    },
    {
      name: 'BOOTSTRAP',
      icon: <img src={bootstrapLogo} alt="Bootstrap" className="skill-icon" />
    },
    {
      name: 'FLUTTER',
      icon: <img src={flutterLogo} alt="Flutter" className="skill-icon" />
    },
    {
      name: 'DART',
      icon: <img src={dartLogo} alt="Dart" className="skill-icon" />
    },
  ]

  // Duplicate items untuk seamless infinite loop
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills]

  return (
    <div className="marquee-container">
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {duplicatedSkills.map((skill, index) => (
            <div key={index} className="marquee-item">
              {skill.icon}
              <span className="marquee-text">{skill.name}</span>
              {index < duplicatedSkills.length - 1 && (
                <span className="marquee-star"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marquee
