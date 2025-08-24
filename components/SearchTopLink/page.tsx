import React from "react";
import styles from "./index.module.css";

interface NavItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

type Props = {
  items: NavItem[];
};

const SearchTopLink = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.items.map((item) => (
        <div key={item.value} className={styles.navItem}>
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SearchTopLink;
