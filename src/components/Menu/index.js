import clsx from 'clsx';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import styles from './Menu.module.scss';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

function Menu({ children, items = [] }) {
   const [history, setHistory] = useState([{ data: items }]);
   const current = history[history.length - 1];

   const renderItem = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children;
         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  isParent && setHistory((prev) => [...prev, item.children]);
               }}
            />
         );
      });
   };
   const handleBack = () => setHistory(history.slice(0, history.length - 1));
   return (
      <Tippy
         interactive
         visible
         offset={[12, 10]}
         placement="bottom-end"
         onHidden={() => setHistory((prev) => history.slice(0, 1))}
         delay={[null, 700]}
         render={(attrs) => (
            <div className={clsx(styles.menuList)} tabIndex="-1" {...attrs}>
               <WrapperPopper className={styles.wrapper}>
                  {current.header && <Header title="Language" onBack={handleBack} />}
                  {renderItem()}
               </WrapperPopper>
               <div id="arrow" data-popper-arrow></div>
            </div>
         )}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
