import { about, stats } from '../data/content'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="about">
        <div className="about__text">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
