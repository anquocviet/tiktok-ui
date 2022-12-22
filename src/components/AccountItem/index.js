import clsx from 'clsx';
import styles from './AccountItem.module.scss';

function AccountItem() {
   return (
      <div className={clsx(styles.wrapper)}>
         <img className={clsx(styles.avatar)} src="" alt="Avatar" />
         <div className={clsx(styles.info)}>
            <h4 className={clsx(styles.username)}>vtvgo</h4>
            <span className={clsx(styles.name)}>VTV GO</span>
         </div>
      </div>
   );
}

export default AccountItem;
