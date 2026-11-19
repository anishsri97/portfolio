import { experience } from '../data/content'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" title="Work experience">
      <div className="timeline">
        {experience.map((job) => (
          <article className="timeline__item" key={`${job.company}-${job.period}`}>
            <span className="timeline__dot" />
            <div className="card">
              <div className="job__head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="job__company">{job.company} · {job.location}</p>
                </div>
                <span className="job__period">{job.period}</span>
              </div>
              {job.client && <p className="job__client">{job.client}</p>}
              <ul>
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="chips">
                {job.tech.map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
