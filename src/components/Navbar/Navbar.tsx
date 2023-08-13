import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.root}>
      <div>Home</div>
      <div>Menu</div>
      <div>Contact</div>
    </div>
  );
};
