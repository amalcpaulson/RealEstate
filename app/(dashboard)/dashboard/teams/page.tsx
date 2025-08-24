import styles from "./index.module.css";

export default function TeamsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Teams</h1>
      <p className={styles.subtitle}>Collaborate with your teammates.</p>

      {/* Team Members Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Team Members</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sarah Johnson</td>
              <td>sarah@example.com</td>
              <td><span className={styles.roleBadge}>Admin</span></td>
            </tr>
            <tr>
              <td>Michael Smith</td>
              <td>michael@example.com</td>
              <td><span className={styles.roleBadge}>Editor</span></td>
            </tr>
            <tr>
              <td>Emily Davis</td>
              <td>emily@example.com</td>
              <td><span className={styles.roleBadge}>Viewer</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Invite New Member Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Invite New Member</h2>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="inviteName">Full Name</label>
          <input id="inviteName" type="text" className={styles.input} placeholder="John Doe" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="inviteEmail">Email Address</label>
          <input id="inviteEmail" type="email" className={styles.input} placeholder="john@example.com" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="inviteRole">Role</label>
          <select id="inviteRole" className={styles.select}>
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>
        </div>

        <button className={styles.inviteButton}>Send Invite</button>
      </div>
    </div>
  );
}
