import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/image';

function Header() {
   return (
      <header className={clsx(styles.wrapper)}>
         <div className={clsx(styles.inner)}>
            <img src={images.logo} alt="TikTok" />
            <div className={clsx(styles.search)}>
               <input placeholder="Search account and videos" />
               <button className={clsx(styles.clear)}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
               <FontAwesomeIcon icon={faSpinner} className={clsx(styles.loading)} />
               <button className={clsx(styles.searchBtn)}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
               </button>
            </div>
            <div className={clsx(styles.actions)}></div>
         </div>
      </header>
   );
}

export default Header;
