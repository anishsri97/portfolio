export const profile = {
  name: 'Anish Srivastava',
  role: 'Java Backend Engineer',
  tagline:
    'Software Engineer with ~5 years of experience building scalable REST APIs, microservices and event-driven systems.',
  email: 'siranish97@gmail.com',
  phone: '+91-8318907437',
  location: 'Gurgaon, India',
  photo: 'profile.jpg',
  resume: 'Anish_Srivastava_Resume.pdf',
  links: {
    github: 'https://github.com/anishsri97',
    linkedin: 'https://www.linkedin.com/in/anish-srivastava-20171a156/',
    leetcode: 'https://leetcode.com/u/siranish97/',
    hackerrank: 'https://www.hackerrank.com/profile/siranish97',
  },
}

export const about = [
  'I am a Java backend engineer who enjoys designing reliable, high-throughput services. Over ~6 years I have worked across banking, media, compliance and retail domains, from fund-transfer APIs at Citibank to cricket APIs serving 800+ million hits a day at Hindustan Times.',
  'Currently at EPAM Systems, I work on enterprise pricing and merchandising systems for Canadian Tire Corporation, moving a monolith to event-driven microservices on Azure Service Bus and Event Hubs.',
]

export const stats = [
  { value: '~5', label: 'Years of experience' },
  { value: '400+', label: 'Coding problems solved' },
  { value: '800M+', label: 'API hits per day served' },
  { value: 'AIR 5267', label: 'GATE 2020' },
]

export const skills = [
  {
    title: 'Languages & Core',
    items: ['Java 8','Java 17','OOPs', 'Collections', 'Data Structures & Algorithms', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Architecture',
    items: ['Spring Framework', 'Spring Boot', 'Spring Data JPA', 'REST APIs', 'Microservices', 'Event-Driven Architecture', 'JWT',
      'Apache Avro'
    ],
  },
  {
    title: 'Databases & Caching',
    items: ['MySQL', 'MongoDB', 'Redis', 'Stored Procedures'],
  },
  {
    title: 'Cloud & Messaging',
    items: ['Azure Service Bus', 'Azure Event Hubs', 'Azure Blob Storage', 'Docker', 'AKS'],
  },
  {
    title: 'AI-Assisted Development',
    items: ['GitHub Copilot', 'AI-Assisted Coding'],
  },
  {
    title: 'Tools & Practices',
    items: ['JUnit 5', 'Maven', 'Git', 'Bitbucket', 'JIRA', 'Postman', 'Kibana', 'Agile/Scrum'],
  },
]

export const experience = [
  {
    role: 'Software Engineer – Java Backend Developer',
    company: 'EPAM Systems',
    location: 'Gurgaon, India',
    period: 'July 2024 – Present',
    client: 'Client: Canadian Tire Corporation (CTC), Canada — enterprise-scale pricing and merchandising applications',
    points: [
      'Developed and enhanced the Maestro Core application to detect domain changes and publish standardized JSON events to Azure Service Bus (ASB) for downstream Enterprise Services (ES) consumers.',
      'Built and maintained event-driven workflows for pricing domains including Promotional Price, Deal, Deal Date, Core Charge, and other pricing-related events.',
      'Developed RESTful microservices using Java 18, Spring Boot, MySQL, and Docker, following clean architecture and enterprise coding standards.',
      'Worked extensively with Azure Service Bus and Azure Event Hubs to build reliable asynchronous communication between distributed systems.',
      'Contributed to the Promo Pricing Engine (PPE) and Pricer Translation Service, validating incoming events against business contracts before routing them to the appropriate Azure Service Bus queue or Event Hub.',
      'Participated in transforming a monolithic application into an event-driven microservices architecture, creating independent services for each pricing event to improve scalability and maintainability.',
      'Implemented transformation and validation logic for events targeted to Blue Yonder (BY), ensuring contract compliance and seamless integration.',
      'Developed unit tests using JUnit 5 and actively participated in code reviews, debugging, production support, and Agile sprint ceremonies.',
    ],
    tech: ['Java 18', 'Spring Boot', 'REST APIs', 'Microservices', 'Azure Service Bus', 'Azure Event Hubs', 'MySQL', 'Docker', 'JUnit 5', 'Maven', 'Git', 'JSON', 'Agile'],
  },
  {
    role: 'Software Development Engineer – Backend',
    company: 'Hindustan Times Media Pvt Ltd',
    location: 'Delhi, India',
    period: 'Jan 2024 – June 2024',
    points: [
      'Worked in the Cricket Team, developing REST APIs for player search, live commentary, ICC rankings, and WTC points tables, and schedulers for scorecards, serving 800+ million hits per day.',
      'Refactored and optimized existing APIs, improving overall application performance.',
      'Actively contributed to sprint tasks and provided support during live IPL matches.',
      'Developed an automated scheduler running daily at 5 AM to collect server 5xx errors and send email notifications to the team, saving 2 hours of manual effort daily; built a supporting API to trigger 5xx error reports via email for a specified time frame.',
    ],
    tech: ['Java 8', 'REST Services', 'Microservices', 'Spring Boot', 'MongoDB', 'Redis', 'Bitbucket', 'JIRA', 'SQL'],
  },
  {
    role: 'Java Developer – Backend',
    company: 'GoAudits',
    location: 'Hyderabad, India',
    period: 'Dec 2022 – Dec 2023',
    points: [
      'Contributed to the backend of GoAudit, a product enabling paperless audit inspections and compliance report generation.',
      'Wrote REST API endpoints per product requirements, tested using Postman, and deployed services to test servers; fixed client-reported bugs.',
      'Implemented key features including bulk user account creation via Excel upload, multi-factor authentication, and compliance report generation.',
      'Applied Agile development methodology and company engineering standards.',
      'Applied Data Structures and Algorithms to improve API performance.',
    ],
    tech: ['Java 8', 'MySQL', 'Spring Boot', 'Stored Procedures', 'Spring Data JPA', 'JWT', 'Redis', 'Kibana'],
  },
  {
    role: 'Project Engineer – Backend',
    company: 'Wipro Ltd',
    location: 'Noida, India',
    period: 'Dec 2020 – Dec 2022',
    client: 'Client: Citibank — Net Settlement Information form',
    points: [
      'Worked as backend developer for client Citibank on the Net Settlement Information form, supporting high-traffic account-to-account fund transfer operations.',
      'Contributed as part of the core development team of an enterprise-level application, handling modules with complex business logic and performance enhancements using solid OOP practices.',
      'Designed and implemented REST APIs using modern development tools and procedures to ensure optimal system performance.',
      'Promoted code to higher-stage environments, enabling accessibility for the testing team, and generated build artifacts via Jenkins job configuration.',
    ],
    tech: ['HTML', 'CSS', 'OJET', 'Java', 'Spring Boot', 'MySQL'],
  },
]

export const education = [
  {
    title: 'B.Tech, Computer Science and Engineering',
    score: '7.55 / 10',
    place: 'University Institute of Engineering and Technology, Kanpur, Uttar Pradesh, India',
  },
  {
    title: 'Senior Secondary (CBSE) — 86.4%  |  Higher Secondary (CBSE) — 8.2 CGPA',
    score: '',
    place: 'D.P. Vidyaniktan School, Kanpur, Uttar Pradesh, India',
  },
]

export const achievements = [
  'Qualified GATE 2020 with AIR 5267.',
  'Solved 400+ coding problems across platforms including GeeksforGeeks, LeetCode, and HackerRank.',
  'Selected for WIPRO NTH 2020 and TCS NQT 2020.',
  'One-time Insta Award winner.',
  'Silver Medalist in NSO and NCO.',
]
