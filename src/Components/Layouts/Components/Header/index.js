import clsx from 'clsx';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleHalfStroke,
   faCircleXmark,
   faEllipsisVertical,
   faLanguage,
   faMagnifyingGlass,
   faPlus,
   faSpinner,
   faToggleOff,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';

import images from '~/assets/image';
import styles from './Header.module.scss';
import AccountItem from '~/Components/AccountItem';
import { Wrapper as WrapperPopper } from '~/Components/Popper';
import Button from '~/Components/Button';
import Menu from '~/Components/Menu';

function Header() {
   const [searchResult, setSearchResult] = useState([]);
   const MENU_LIST = [
      {
         leftIcon: <FontAwesomeIcon icon={faLanguage} />,
         title: 'English',
      },
      {
         leftIcon: <FontAwesomeIcon icon={faCircleQuestion} />,
         title: 'Feedback and help',
      },
      {
         leftIcon: <FontAwesomeIcon icon={faKeyboard} />,
         title: 'Keyboard shortcuts',
      },
      {
         leftIcon: <FontAwesomeIcon icon={faCircleHalfStroke} />,
         title: 'Dark mode',
         rightIcon: <FontAwesomeIcon icon={faToggleOff} />,
      },
   ];
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
            <div className={clsx(styles.actions)}>
               <Button to="/upload" type="textOutline" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  Upload
               </Button>
               <Button to="/login" type="primary">
                  Log in
               </Button>

               <Menu items={MENU_LIST}>
                  <button className={styles.moreBtn}>
                     <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
