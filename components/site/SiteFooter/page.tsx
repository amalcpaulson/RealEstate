"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import styles from "./index.module.css";

export function SiteFooter() {
  return (
    <footer aria-label="Footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Top cover image */}
          <div className={styles.imageWrapper}>
            <Image
              src="/images/footer/footer-image.jpg"
              alt="City skyline"
              width={1920}
              height={600}
              className={styles.coverImage}
            />
            {/* Bottom fade: transparent -> white */}
            <div className={styles.fadeOverlay} />
          </div>

          {/* Intro + CTA */}
          <div className={styles.content}>
            <div className={styles.introSection}>
              <h2 className={styles.heading}>
                550+ People Managed Homes <br />
                in <span className={styles.highlight}>Goa</span> with Us
              </h2>
              <Link href="/contact" className={styles.ctaButton}>
                <MessageCircle className={styles.icon} aria-hidden />
                Talk to Us
              </Link>
            </div>

            {/* Link Columns */}
            <div className={styles.linkColumns}>
              <div className={styles.column}>
                <h3 className={styles.columnTitle}>Discover</h3>
                <ul className={styles.linkList}>
                  <li>
                    <Link className={styles.link} href="#">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="#">
                      Properties
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="#">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="#">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="#">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={styles.column}>
                <h3 className={styles.columnTitle}>Properties</h3>
                <ul className={styles.linkList}>
                  <li>
                    <Link className={styles.link} href="#">
                      New Projects
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="#">
                      Co-Working Space
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="#">
                      Apartments
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="#">
                      Holiday Homes
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={styles.column}>
                <h3 className={styles.columnTitle}>Services</h3>
                <ul className={styles.linkList}>
                  <li>
                    <Link className={styles.link} href="#">
                      Sell Your Property
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="#">
                      Rent Your Property
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="#">
                      Housing Loans
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={styles.column}>
                <h3 className={styles.columnTitle}>Address</h3>
                <address className={styles.address}>
                  2nd Floor, Innerspace Business Centre
                  <br /> Chittethukara, Kakkanad 682030
                  <br />
                  <span className={styles.addressDetail}>Phone: +91 95 62 49 25 75</span>
                  <span className={styles.addressDetail}>
                    Email:{" "}
                    <a className={styles.emailLink} href="mailto:me@realtorhadi.com">
                      me@realtorhadi.com
                    </a>
                  </span>
                </address>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
              <p className={styles.copyright}>
                REALTOR.COM © {new Date().getFullYear()} ALL RIGHTS RESERVED
              </p>
              <div className={styles.bottomLinks}>
                <Link href="#" className={styles.link}>
                  Privacy Policy
                </Link>
                <Link href="#" className={styles.link}>
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}