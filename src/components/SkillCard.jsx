import styles from './SkillCard.module.css'

// mobile=true → renders a pill chip for the scroll row
// mobile=false (default) → renders the absolute floating card
export default function SkillCard({ position, delay, floatDur, iconVariant, icon, title, sub, mobile = false }) {
  if (mobile) {
    return (
      <div className={`${styles.mobilePill}`}>
        <span
          className={`${styles.pillIcon} ${styles[iconVariant]}`}
          dangerouslySetInnerHTML={{ __html: icon }}
        />
        <span className={styles.pillTitle}>{title}</span>
      </div>
    )
  }

  return (
    <div
      className={`${styles.card} ${styles[position]}`}
      style={{ '--delay': delay, '--float-dur': floatDur }}
      data-card
    >
      <div
        className={`${styles.icon} ${styles[iconVariant]}`}
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.sub}>{sub}</span>
      </div>
    </div>
  )
}
