import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.scss';

function Header({ title, onBack }) {
   return (
      <header className={clsx(styles.header)}>
         <span className={clsx(styles.backIcon)} onClick={onBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
         </span>
         <h4 className={clsx(styles.headerTitle)}>{title}</h4>
      </header>
   );
}

export default Header;
