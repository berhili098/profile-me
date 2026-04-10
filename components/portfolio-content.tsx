import type { Locale, Messages } from '@/lib/i18n'
import { FlutterIcon } from '@/components/flutter-icon'
import { getSiteUrl } from '@/lib/site'
import { Navbar } from '@/components/navbar'
import { ScrollReveal } from '@/components/scroll-reveal'

interface PortfolioContentProps {
  locale: Locale
  messages: Messages
}

export function PortfolioContent ({ locale, messages: t }: PortfolioContentProps) {
  const siteUrl = getSiteUrl()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Oussama Berhili',
    url: siteUrl,
    image: `${siteUrl}/assets/og-image.png`,
    sameAs: [
      'https://github.com/berhili098',
      'https://www.linkedin.com/in/oussama-berhili/'
    ],
    jobTitle: locale === 'fr' ? 'Développeur Mobile Senior' : 'Senior Mobile Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Credit agricole du maroc'
    },
    description: t.meta.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MA',
      addressLocality: 'Rabat'
    },
    knowsAbout: [
      'Flutter Development',
      'Swift Development',
      'iOS Development',
      'Mobile App Development',
      'Cross-platform Development'
    ],
    skills: [
      'Flutter',
      'Swift',
      'iOS Development',
      'Mobile Development',
      'Cross-platform Development',
      'UI/UX Design',
      'REST APIs',
      'Firebase'
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Ecole supérieure de technologie Meknès'
    }
  }

  const year = new Date().getFullYear()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar
        locale={locale}
        navigation={t.navigation}
        personName={t.hero.name}
      />
      <header className="hero-section" id="hero">
        <div className="hero-bg-pattern" aria-hidden />
        <div className="hero-orb hero-orb--1" aria-hidden />
        <div className="hero-orb hero-orb--2" aria-hidden />
        <div className="hero-orb hero-orb--3" aria-hidden />
        <div className="hero-device-frame" aria-hidden />
        <div className="container hero-inner">
          <div className="hero-content">
            <div
              className="hero-tech-row"
              aria-label="Flutter, Swift, Apple, Android"
            >
              <FlutterIcon />
              <i className="fab fa-swift" title="Swift" />
              <i className="fab fa-apple" title="iOS" />
              <i className="fab fa-android" title="Android" />
            </div>
            <h1 className="name">{t.hero.name}</h1>
            <h2 className="title">{t.hero.title}</h2>
            <p className="bio">{t.hero.bio}</p>
            <div className="hero-cta">
              <a
                href="/assets/oussamaBerhiliFinal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t.hero.downloadCV}{' '}
                <i className="fas fa-download" />
              </a>
              <a href="#contact" className="btn btn-secondary">
                {t.hero.contactMe}{' '}
                <i className="fas fa-envelope" />
              </a>
            </div>
            <div className="social-links-hero">
              <a
                href="https://github.com/berhili098"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/oussama-berhili/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="/assets/oussamaBerhiliFinal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Download my CV"
              >
                <i className="fas fa-file-alt" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="site-main">
        <ScrollReveal>
        <section id="about" className="about-section section-padding">
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">{t.navigation.about}</span>
              <h2 className="section-title">{t.about.title}</h2>
            </div>
            <div className="about-content">
              <div className="about-text about-panel">
                <p>{t.about.paragraph1}</p>
                <p>{t.about.paragraph2}</p>
                <p>{t.about.keyStrengths}</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />{' '}
                    <span>{t.about.strength1}</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />{' '}
                    <span>{t.about.strength2}</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />{' '}
                    <span>{t.about.strength3}</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />{' '}
                    <span>{t.about.strength4}</span>
                  </li>
                </ul>
                <p>{t.about.hobbies}</p>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section id="experience" className="experience-section section-padding">
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">{t.navigation.experience}</span>
              <h2 className="section-title">{t.experience.title}</h2>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>{t.experience.nativeDeveloper.title}</h3>
                  <p className="company-duration">
                    {t.experience.nativeDeveloper.company}
                  </p>
                  <ul>
                    <li>{t.experience.nativeDeveloper.description1}</li>
                    <li>{t.experience.nativeDeveloper.description2}</li>
                    <li>{t.experience.nativeDeveloper.description3}</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>{t.experience.flutterSwiftDeveloper.title}</h3>
                  <p className="company-duration">
                    {t.experience.flutterSwiftDeveloper.company}
                  </p>
                  <ul>
                    <li>{t.experience.flutterSwiftDeveloper.description1}</li>
                    <li>{t.experience.flutterSwiftDeveloper.description2}</li>
                    <li>{t.experience.flutterSwiftDeveloper.description3}</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>{t.experience.mobileWebDev1.title}</h3>
                  <p className="company-duration">
                    {t.experience.mobileWebDev1.company}
                  </p>
                  <ul>
                    <li>{t.experience.mobileWebDev1.description1}</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>{t.experience.mobileWebDev2.title}</h3>
                  <p className="company-duration">
                    {t.experience.mobileWebDev2.company}
                  </p>
                  <ul>
                    <li>{t.experience.mobileWebDev2.description1}</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>{t.experience.mobileDev1.title}</h3>
                  <p className="company-duration">
                    {t.experience.mobileDev1.company}
                  </p>
                  <ul>
                    <li>{t.experience.mobileDev1.description1}</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>{t.experience.mobileWebDev3.title}</h3>
                  <p className="company-duration">
                    {t.experience.mobileWebDev3.company}
                  </p>
                  <ul>
                    <li>{t.experience.mobileWebDev3.description1}</li>
                    <li>{t.experience.mobileWebDev3.description2}</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>{t.experience.webDesktopDev.title}</h3>
                  <p className="company-duration">
                    {t.experience.webDesktopDev.company}
                  </p>
                  <ul>
                    <li>{t.experience.webDesktopDev.description1}</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>{t.experience.mobileWebDev4.title}</h3>
                  <p className="company-duration">
                    {t.experience.mobileWebDev4.company}
                  </p>
                  <ul>
                    <li>{t.experience.mobileWebDev4.description1}</li>
                    <li>{t.experience.mobileWebDev4.description2}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section id="projects" className="projects-section section-padding">
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">{t.navigation.projects}</span>
              <h2 className="section-title">{t.projects.title}</h2>
            </div>
            <div className="projects-grid">
              <div className="project-card">
                <h4>{t.projects.wiggli.title}</h4>
                <p>{t.projects.wiggli.description}</p>
                <p className="project-card__tools">
                  <strong>{t.projects.wiggli.tools}</strong>
                  Flutter (DDD, Riverpod, video call), CI/CD with GitHub Actions
                  &amp; Fastlane.
                </p>
              </div>
              <div className="project-card">
                <h4>{t.projects.orange.title}</h4>
                <p>{t.projects.orange.description}</p>
                <p className="project-card__tools">
                  <strong>{t.projects.orange.tools}</strong>
                  Flutter, Riverpod, Firebase, Laravel, Google Maps.
                </p>
              </div>
              <div className="project-card">
                <h4>{t.projects.motopickup.title}</h4>
                <p>{t.projects.motopickup.description}</p>
                <p className="project-card__tools">
                  <strong>{t.projects.motopickup.tools}</strong>
                  Flutter (MVC, GetX, Google Maps), Firebase (Auth, Firestore).
                </p>
              </div>
              <div className="project-card">
                <h4>{t.projects.grandHotel.title}</h4>
                <p>{t.projects.grandHotel.description}</p>
                <p className="project-card__tools">
                  <strong>{t.projects.grandHotel.tools}</strong>
                  Flutter (Google Maps, HTTP).
                </p>
              </div>
              <div className="project-card">
                <h4>{t.projects.atar.title}</h4>
                <p>{t.projects.atar.description}</p>
                <p className="project-card__tools">
                  <strong>{t.projects.atar.tools}</strong>
                  Livewire, Onsignal, Google Maps.
                </p>
              </div>
              <div className="project-card">
                <h4>{t.projects.synease.title}</h4>
                <p>{t.projects.synease.description}</p>
                <p className="project-card__tools">
                  <strong>{t.projects.synease.tools}</strong>
                  Flutter, Firebase, OneSignal, Laravel (API), HTTP.
                </p>
              </div>
              <div className="project-card">
                <h4>{t.projects.dabaPermis.title}</h4>
                <p>{t.projects.dabaPermis.description}</p>
                <p className="project-card__tools">
                  <strong>{t.projects.dabaPermis.tools}</strong>
                  Flutter, HTTP, Laravel (API).
                </p>
              </div>
              <div className="project-card">
                <h4>{t.projects.dentalWeb.title}</h4>
                <p>{t.projects.dentalWeb.description}</p>
                <p className="project-card__tools">
                  <strong>{t.projects.dentalWeb.tools}</strong>
                  Laravel.
                </p>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section id="skills" className="skills-section section-padding">
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">{t.navigation.skills}</span>
              <h2 className="section-title">{t.skills.title}</h2>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>{t.skills.languages.title}</h4>
                <p>{t.skills.languages.description}</p>
              </div>
              <div className="skill-category">
                <h4>{t.skills.frameworks.title}</h4>
                <p>{t.skills.frameworks.description}</p>
              </div>
              <div className="skill-category">
                <h4>{t.skills.tools.title}</h4>
                <p>{t.skills.tools.description}</p>
              </div>
              <div className="skill-category">
                <h4>{t.skills.cloud.title}</h4>
                <p>{t.skills.cloud.description}</p>
              </div>
              <div className="skill-category">
                <h4>{t.skills.architectures.title}</h4>
                <p>{t.skills.architectures.description}</p>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section id="education" className="education-section section-padding">
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">{t.navigation.education}</span>
              <h2 className="section-title">{t.education.title}</h2>
            </div>
            <div className="education-grid">
              <div className="education-item">
                <h4>{t.education.licence.title}</h4>
                <p>{t.education.licence.school}</p>
              </div>
              <div className="education-item">
                <h4>{t.education.dut.title}</h4>
                <p>{t.education.dut.school}</p>
              </div>
              <div className="education-item">
                <h4>{t.education.bac.title}</h4>
                <p>{t.education.bac.school}</p>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section
          id="certifications"
          className="certifications-section section-padding"
        >
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">
                {t.navigation.certifications}
              </span>
              <h2 className="section-title">{t.certifications.title}</h2>
            </div>
            <ul className="certifications-list">
              <li>
                <i className="fas fa-award" />{' '}
                <span>{t.certifications.testdome}</span>
              </li>
              <li>
                <i className="fas fa-award" />{' '}
                <span>{t.certifications.encryption}</span>
              </li>
              <li>
                <i className="fas fa-award" />{' '}
                <span>{t.certifications.netops}</span>
              </li>
              <li>
                <i className="fas fa-award" />{' '}
                <span>{t.certifications.ipv6}</span>
              </li>
            </ul>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section id="contact" className="contact-section section-padding">
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">{t.navigation.contact}</span>
              <h2 className="section-title">{t.contact.title}</h2>
            </div>
            <div className="contact-panel">
              <p className="contact-text">{t.contact.description}</p>
              <div className="contact-methods">
                <div className="contact-method">
                  <a
                    href={`mailto:${t.contact.email}`}
                    className="contact-method__link"
                    aria-label={`${t.contact.email} — ${t.navigation.contact}`}
                  >
                    <i className="fas fa-envelope" aria-hidden />
                    <span className="contact-method__text">
                      {t.contact.email}
                    </span>
                  </a>
                </div>
                <div className="contact-method">
                  <a
                    href="tel:+212621460332"
                    className="contact-method__link"
                    aria-label={`${t.contact.phone} — ${t.navigation.contact}`}
                  >
                    <i className="fas fa-phone" aria-hidden />
                    <span className="contact-method__text">
                      {t.contact.phone}
                    </span>
                  </a>
                </div>
              </div>
              <div className="social-links-footer">
                <a
                  href="https://github.com/berhili098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Visit my GitHub profile"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/oussama-berhili/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Visit my LinkedIn profile"
                >
                  <i className="fab fa-linkedin" />
                </a>
                <a
                  href="/assets/oussamaBerhiliFinal.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Download my CV"
                >
                  <i className="fas fa-file-alt" />
                </a>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>
      </main>

      <ScrollReveal>
      <footer className="footer">
        <div className="container">
          <p>
            &copy; {year} {t.footer.copyright}
          </p>
        </div>
      </footer>
      </ScrollReveal>
    </>
  )
}
