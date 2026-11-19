import Icon from './Icon'
import { profile } from '../data/content'

const photoUrl = `${import.meta.env.BASE_URL}${profile.photo}`
const resumeUrl = `${import.meta.env.BASE_URL}${profile.resume}`

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__hello">Hi, I'm</p>
          <h1>{profile.name}</h1>
          <h2 className="hero__role">{profile.role}</h2>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#contact">Get in touch</a>
            <a className="btn btn--ghost" href={resumeUrl} download>
              <Icon name="download" size={18} /> Download CV
            </a>
          </div>
          <div className="socials">
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
            <a href={profile.links.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Icon name="leetcode" /></a>
            <a href={profile.links.hackerrank} target="_blank" rel="noreferrer" aria-label="HackerRank"><Icon name="hackerrank" /></a>
          </div>
        </div>
        <div className="hero__photo">
          <div className="hero__photo-ring">
            <img src={photoUrl} alt={`Portrait of ${profile.name}`} />
          </div>
        </div>
      </div>
    </section>
  )
}
