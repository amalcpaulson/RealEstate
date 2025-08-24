import styles from './index.module.css'

type Props = {
  icon: React.ReactNode;
  label: string;
};

const FeatureBadge = (props: Props) => {
  return (
    <div className={styles.badge}>
      <div className={styles.iconContainer}>{props.icon}</div>
      {props.label}
    </div>
  );
};

export default FeatureBadge;