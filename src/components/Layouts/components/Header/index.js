import clsx from 'clsx';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faToggleOff } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/image';
import styles from './Header.module.scss';
import AccountItem from '~/components/AccountItem';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import Button from '~/components/Button';
import Menu from '~/components/Menu';
import {
   CancelIcon,
   CoinsIcon,
   InboxIcon,
   KeyboardIcon,
   LanguageIcon,
   LoadingIcon,
   MessageIcon,
   MoonIcon,
   PlusIcon,
   ProfileIcon,
   QuestionIcon,
   SearchIcon,
   SettingIcon,
   SignOutIcon,
   VideoCameraIcon,
} from '~/components/Icons';
import Image from '~/components/Image';

function Header() {
   const [searchResult, setSearchResult] = useState([]);
   const user = { a: 'a' };
   const MENU_LIST = [
      {
         leftIcon: <LanguageIcon />,
         title: 'English',
         children: {
            header: 'Language',
            data: [
               {
                  type: 'Language',
                  code: 'en',
                  title: 'English',
               },
               {
                  type: 'Language',
                  code: 'vi',
                  title: 'Tiếng Việt',
               },
            ],
         },
      },
      {
         leftIcon: <QuestionIcon />,
         title: 'Feedback and help',
         to: '/feedback',
      },
      {
         leftIcon: <KeyboardIcon />,
         title: 'Keyboard shortcuts',
      },
      {
         leftIcon: <MoonIcon />,
         title: 'Dark mode',
         rightIcon: <FontAwesomeIcon icon={faToggleOff} />,
      },
   ];
   const userMenu = [
      {
         leftIcon: <ProfileIcon />,
         title: 'Profile',
         to: '/profile',
      },
      {
         leftIcon: <CoinsIcon />,
         title: 'Get Coins',
         to: '/feedback',
      },
      {
         leftIcon: <VideoCameraIcon />,
         title: 'LIVE Studio',
         to: '/feedback',
      },
      {
         leftIcon: <SettingIcon />,
         title: 'Settings',
         to: '/feedback',
      },
      ...MENU_LIST,
      {
         separate: true,
         leftIcon: <SignOutIcon />,
         title: 'Log out',
         to: '/feedback',
      },
   ];
   useEffect(() => {
      setSearchResult([]);
   }, []);
   return (
      <header className={clsx(styles.wrapper)}>
         <div className={clsx(styles.inner)}>
            <img src={images.logo} alt="TikTok" />

            <HeadlessTippy
               interactive
               visible={searchResult.length > 0 ? true : false}
               render={(attrs) => (
                  <div className={clsx(styles.searchResult)} tabIndex="-1" {...attrs}>
                     <WrapperPopper>
                        <h4 className={clsx(styles.searchTitle)}>Account</h4>
                        <AccountItem />
                     </WrapperPopper>
                  </div>
               )}
            >
               <div className={clsx(styles.search)}>
                  <input placeholder="Search account and videos" />
                  <button className={clsx(styles.clear)}>
                     <CancelIcon />
                  </button>
                  <LoadingIcon className={clsx(styles.loading)} />
                  <button className={clsx(styles.searchBtn)}>
                     <SearchIcon />
                  </button>
               </div>
            </HeadlessTippy>

            <div className={clsx(styles.actions)}>
               <Button to="/upload" type="textOutline" leftIcon={<PlusIcon />}>
                  Upload
               </Button>
               {Object.keys(user).length !== 0 ? (
                  <>
                     <Tippy content="Messages">
                        <button className={styles.messageBtn}>
                           <MessageIcon />
                        </button>
                     </Tippy>
                     <Tippy content="Inbox">
                        <button className={styles.inboxBtn}>
                           <InboxIcon />
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <Button to="/login" type="primary">
                     Log in
                  </Button>
               )}
               <Menu items={Object.keys(user).length !== 0 ? userMenu : MENU_LIST}>
                  {Object.keys(user).length !== 0 ? (
                     <Image
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/54771adbdfc84c971fe6de57702ce0d6~c5_100x100.jpeg?x-expires=1671285600&x-signature=fFt2EFV0HtKa9lv0fxsvv9AjIFk%3D"
                        alt="user"
                        className={styles.avatarUser}
                        fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                     />
                  ) : (
                     <button className={styles.moreBtn}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
