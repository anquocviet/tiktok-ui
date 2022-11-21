import clsx from 'clsx';
import styles from './Sidebar.module.scss';

function Sidebar() {
   return (
      <aside className={clsx(styles.wrapper)}>
         <h2>Side Bar</h2>
      </aside>
   );
}

export default Sidebar;
