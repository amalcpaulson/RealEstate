import styles from "./index.module.css";

export default function SettingsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Settings</h1>
      <p className={styles.subtitle}>
        Manage your account and application preferences.
      </p>

      {/* Account Information Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Account Information</h2>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Full Name</label>
          <input id="name" type="text" className={styles.input} placeholder="John Doe" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email Address</label>
          <input id="email" type="email" className={styles.input} placeholder="john@example.com" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="password">Password</label>
          <input id="password" type="password" className={styles.input} placeholder="••••••••" />
        </div>
      </div>

      {/* Preferences Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Preferences</h2>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="theme">Theme</label>
          <select id="theme" className={styles.select}>
            <option>Light</option>
            <option>Dark</option>
            <option>System Default</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="language">Language</label>
          <select id="language" className={styles.select}>
            <option>English</option>
            <option>Malayalam</option>
            <option>Hindi</option>
            <option>Tamil</option>
          </select>
        </div>
      </div>

      {/* Notifications Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Notifications</h2>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="emailNotifications">
            Email Notifications
          </label>
          <select id="emailNotifications" className={styles.select}>
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="smsNotifications">
            SMS Notifications
          </label>
          <select id="smsNotifications" className={styles.select}>
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>
      </div>

      {/* About Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>About You</h2>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            className={styles.textarea}
            placeholder="Write a short bio about yourself..."
          />
        </div>
      </div>

      <button className={styles.saveButton}>Save Changes</button>
    </div>
  );
}
