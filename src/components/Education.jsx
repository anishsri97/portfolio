import { education, achievements } from '../data/content'
import Section from './Section'

export default function Education() {
  return (
    <Section id="education" title="Education & achievements">
      <div className="grid grid--two">
        <div className="card">
          <h3>Education</h3>
          {education.map((e) => (
            <div className="edu" key={e.title}>
              <p className="edu__title">
                {e.title}{e.score && <span> — {e.score}</span>}
              </p>
              <p className="edu__place">{e.place}</p>
            </div>
          ))}
        </div>
        <div className="card">
          <h3>Achievements</h3>
          <ul>
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
