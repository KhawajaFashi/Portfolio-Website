import styles from "./Education.module.css";

const COURSEWORK = [
  "Operating Systems",
  "Database Systems",
  "Computer Networks",
  "Design and Analysis of Algorithms",
  "Web Programming",
  "Secure Software Design",
];

export default function Education() {
  return (
    <section id="education" className={`section ${styles.section}`} aria-labelledby="education-heading">
      <div className="container">
        <div className="section-label">
          <span className="section-label__text">Education</span>
          <div className="section-label__line" />
        </div>

        <h2 id="education-heading" style={{ marginBottom: "var(--sp-8)" }}>
          Academic Background
        </h2>

        <article className={styles.card} aria-label="Bachelor of Cybersecurity, FAST NUCES">
          <div className={styles.left}>
            <div className={styles.degree}>Bachelor of Cybersecurity</div>
            <div className={styles.institution}>
              FAST National University of Computer and Emerging Sciences (NUCES)
            </div>
            <div className={styles.location}>Islamabad Campus</div>

            <div className={styles.courseworkLabel}>Relevant Coursework</div>
            <div className={styles.coursework}>
              {COURSEWORK.map((c) => (
                <span key={c} className="tag">{c}</span>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <span className={styles.period}>2023 – 2027</span>
            <span className={styles.badge}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1"/>
                <path d="M3 5l1.5 1.5L7 3.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Expected
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
