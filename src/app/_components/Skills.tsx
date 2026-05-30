import styles from "./Skills.module.css";

const SKILL_CATEGORIES = [
  {
    label: "Backend",
    primary: true,
    skills: [
      "Node.js (Express)",
      "Python",
      "REST API Development",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    label: "Backend Security",
    primary: true,
    skills: [
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "Secure API Design",
      "HS256 Signing",
      "Token Refresh Flows",
    ],
  },
  {
    label: "Web (Supporting)",
    primary: false,
    skills: [
      "Next.js",
      "React",
      "HTML/CSS",
    ],
  },
  {
    label: "Tooling",
    primary: false,
    skills: [
      "Docker",
      "Git",
      "Postman",
      "Prisma ORM",
      "Promise.all parallelisation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.section}`} aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-label">
          <span className="section-label__text">Skills</span>
          <div className="section-label__line" />
        </div>

        <h2 id="skills-heading" style={{ marginBottom: "var(--sp-8)" }}>
          Technical Proficiency
        </h2>

        <div className={styles.grid}>
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.label}
              className={`${styles.category} stagger-item`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className={styles.categoryLabel}>{cat.label}</div>
              <div className={styles.skills}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`${styles.skillTag} ${cat.primary ? styles.skillTagPrimary : ""}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
