import { skills } from '../data/content'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <div className="grid grid--skills">
        {skills.map((group) => (
          <div className="card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
