import styles from "./index.module.css";

export default function SupportPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Support</h1>
      <p className={styles.subtitle}>How can we help you today?</p>

      {/* FAQ Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>

        <div className={styles.faqItem}>
          <p className={styles.question}>❓ How do I reset my password?</p>
          <p className={styles.answer}>
            You can reset your password from the account settings page under
            &quot; Security. &quot; A reset link will be sent to your registered email.
          </p>
        </div>

        <div className={styles.faqItem}>
          <p className={styles.question}>❓ How can I contact support?</p>
          <p className={styles.answer}>
            You can use the contact form below or email us at
            <strong> support@realtor.com</strong>.
          </p>
        </div>

        <div className={styles.faqItem}>
          <p className={styles.question}>❓ Can I change my subscription plan?</p>
          <p className={styles.answer}>
            Yes, subscription plans can be upgraded or downgraded anytime from
            the billing section in your account dashboard.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Full Name</label>
          <input id="name" type="text" className={styles.input} placeholder="John Doe" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email Address</label>
          <input id="email" type="email" className={styles.input} placeholder="john@example.com" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="message">Message</label>
          <textarea id="message" className={styles.textarea} placeholder="Write your issue or question here..." />
        </div>

        <button className={styles.submitButton}>Submit</button>
      </div>
    </div>
  );
}
