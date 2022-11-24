import clsx from 'clsx';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import { Wrapper as WrapperPopper } from '~/Components/Popper';
import MenuItem from './MenuItem/MenuItem';

function Menu({ children, items = [] }) {
   return (
      <Tippy
         interactive
         placement="bottom-end"
         visible
         delay={[null, 700]}
         render={(attrs) => (
            <div className={clsx(styles.menuList)} tabIndex="-1" {...attrs}>
               <WrapperPopper className={styles.wrapper}>
                  {items.map((item, index) => (
                     <MenuItem key={index} data={item}></MenuItem>
                  ))}
               </WrapperPopper>
            </div>
         )}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
