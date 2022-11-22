import clsx from 'clsx';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/image';
import styles from './Header.module.scss';
import AccountItem from '~/Components/AccountItem';
import { Wrapper as WrapperPopper } from '~/Components/Popper';

function Header() {
   const [searchResult, setSearchResult] = useState([]);
   useEffect(() => {
      setSearchResult([]);
   }, []);
   return (
      <header className={clsx(styles.wrapper)}>
         <div className={clsx(styles.inner)}>
            <img src={images.logo} alt="TikTok" />

            <Tippy
               interactive
               visible={searchResult.length > 0 ? true : false}
               render={(attrs) => (
                  <div className={clsx(styles.searchResult)} tabIndex="-1" {...attrs}>
                     <WrapperPopper>
                        <h4 className={clsx(styles.searchTitle)}>Account</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                     </WrapperPopper>
                  </div>
               )}
            >
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
            </Tippy>
            <div className={clsx(styles.actions)}></div>
         </div>
      </header>
   );
}

export default Header;
