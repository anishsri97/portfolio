import Icon from './Icon'
import Section from './Section'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <p className="contact__lead">
        Open to new opportunities and interesting backend problems. The quickest way to reach me is email or LinkedIn.
      </p>
      <div className="grid grid--contact">
        <a className="card contact__item" href={`mailto:${profile.email}`}>
          <Icon name="mail" size={24} />
          <span>{profile.email}</span>
        </a>
        <a className="card contact__item" href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
          <Icon name="phone" size={24} />
          <span>{profile.phone}</span>
        </a>
        <a className="card contact__item" href={profile.links.linkedin} target="_blank" rel="noreferrer">
          <Icon name="linkedin" size={24} />
          <span>LinkedIn</span>
        </a>
        <a className="card contact__item" href={profile.links.github} target="_blank" rel="noreferrer">
          <Icon name="github" size={24} />
          <span>GitHub</span>
        </a>
      </div>
    </Section>
  )
}
