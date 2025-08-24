import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftSection}>
        <div>
          <Image src="/images/logo.png" alt="Logo" width={30} height={30} />
        </div>
        <Link href="/projects" className={styles.navLink}>
          Projects
        </Link>
        <Link href="/builders" className={styles.navLink}>
          Builders
        </Link>
        <Link href="/partner" className={styles.navLink}>
          Partner with Us
        </Link>
      </div>
      <div className={styles.rightSection}>
        <Link href="/register" className={styles.navLink}>
          Create Account
        </Link>
        <Link href="/login" className={styles.navLink}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;