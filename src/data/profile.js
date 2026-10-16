// Central source of truth for personal / contact information.
// Values are taken from the latest "Software Developer" resume.
//
// Asset URLs use import.meta.env.BASE_URL so they keep working whether the site
// is served from the root (Vercel, local) or a sub-path (GitHub Pages).
const base = import.meta.env.BASE_URL

export const profile = {
  name: 'Lokeshwaran K.',
  shortName: 'Lokeshwaran',
  role: 'Software Developer',
  tagline: 'Building useful applications with clean code and practical engineering.',
  location: 'Chennai, India',
  email: 'lokeshwarankrishnasamy0107@gmail.com',
  phone: '+91-99521-46912',
  github: 'https://github.com/lokesh1725',
  linkedin: 'https://www.linkedin.com/in/lokeshwaran-k/',
  // Profile photo shown on the left of the hero section.
  photo: `${base}profile/lokeshwaran.jpg`,
  photoAlt: 'Portrait of Lokeshwaran K',
  // Drop the final resume PDF at this path before deploying.
  resumeUrl: `${base}resume/Lokeshwaran_K_Resume.pdf`,
  availability: 'Open to relocation across India · Available for immediate joining',
  heroText:
    "I'm a software developer with hands-on experience in building responsive web interfaces, integrating APIs, and developing database-driven applications.",
  about: [
    'I am a B.E. Electronics and Communication Engineering graduate (2026) from Jeppiaar Engineering College, Chennai, working as a software developer. My focus is on practical, well-structured applications rather than over-engineered ones.',
    'On the frontend I build responsive interfaces with React.js, JavaScript, HTML5 and CSS3. On the backend I work with Java, Spring Boot, Python and Flask to develop REST APIs, and I integrate databases such as SQL, SQLite and MongoDB.',
    'I am comfortable with Git and GitHub for version control and use Linux as my daily development environment. I enjoy debugging, reading existing codebases, and turning unclear requirements into maintainable, working features.',
    'I am currently looking for entry-level Software Developer, Frontend Developer, React Developer, or Full-Stack Developer opportunities where I can contribute and keep growing.',
  ],
  highlights: [
    'Practical software development experience through internships',
    'Frontend development with React.js and JavaScript',
    'Backend development using Spring Boot, REST APIs and Python',
    'Database integration with SQL, SQLite and MongoDB',
    'Version control and development on Git, GitHub and Linux',
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Medsy', href: '#medsy' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
