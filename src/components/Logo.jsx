import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/">
      <img className={styles.logo} src="/logo.png" alt="WorldWise logo" />
    </Link>
  );
};

export default Logo;
